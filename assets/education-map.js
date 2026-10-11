(() => {
  const panel = document.querySelector('.campus-map');
  if (!panel) return;
  const canvas = panel.querySelector('.campus-map-canvas');
  const status = panel.querySelector('.campus-map-status');
  const buttons = [...panel.querySelectorAll('[data-campus]')];
  const schools = [
    { point: [22.568694, 114.088867], zh: '深圳中学 · 泥岗校区', en: 'Shenzhen Middle School · Nigang', dates: '2019.9–2025.6' },
    { point: [22.589750, 113.967221], zh: '哈尔滨工业大学（深圳）', en: 'Harbin Institute of Technology, Shenzhen', dates: '2025.9–2029.6' }
  ];
  let map, markers = [], initialization, hasTiles = false, failed = false;
  const english = () => document.documentElement.lang === 'en';
  const animate = () => !matchMedia('(prefers-reduced-motion: reduce)').matches;
  function updateCopy() {
    status.textContent = english()
      ? (failed ? 'Map unavailable. You can open it in OpenStreetMap.' : 'Loading map…')
      : (failed ? '地图暂时无法显示，可在 OpenStreetMap 中查看。' : '地图加载中…');
    markers.forEach((marker, index) => {
      const school = schools[index];
      const content = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = english() ? school.en : school.zh;
      const date = document.createElement('span');
      date.textContent = school.dates + (index === 1 ? (english() ? ' (expected)' : '（预计）') : '');
      content.append(title, date);
      marker.setPopupContent(content);
      const element = marker.getElement();
      if (element) {
        element.setAttribute('aria-label', title.textContent);
        element.title = title.textContent;
      }
    });
    if (map) {
      const labels = english() ? ['Zoom in', 'Zoom out'] : ['放大地图', '缩小地图'];
      panel.querySelectorAll('.leaflet-control-zoom a').forEach((button, index) => {
        button.title = labels[index];
        button.setAttribute('aria-label', labels[index]);
      });
    }
  }
  function overview(shouldAnimate = true) {
    if (!map) return;
    map.closePopup();
    map.fitBounds(schools.map(school => school.point), {
      padding: [65, 65], maxZoom: 12, animate: shouldAnimate && animate()
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', 'false'));
  }
  function start() {
    if (!initialization) initialization = initialize();
    return initialization;
  }
  async function initialize() {
    try {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'assets/vendor/leaflet/leaflet.css';
      const cssReady = new Promise((resolve, reject) => {
        css.onload = resolve;
        css.onerror = reject;
      });
      document.head.append(css);
      const jsReady = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'assets/vendor/leaflet/leaflet.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.append(script);
      });
      await Promise.all([cssReady, jsReady]);
      map = L.map(canvas, {
        scrollWheelZoom: false, zoomControl: true,
        dragging: !matchMedia('(pointer: coarse)').matches,
        minZoom: 9, maxZoom: 17
      });
      const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, keepBuffer: 1,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      const loadingTimeout = setTimeout(() => {
        if (!hasTiles) { failed = true; updateCopy(); }
      }, 10000);
      tiles.on('tileload', () => {
        hasTiles = true;
        status.hidden = true;
        panel.dataset.ready = 'true';
        clearTimeout(loadingTimeout);
      });
      tiles.on('tileerror', () => {
        if (!hasTiles) { failed = true; updateCopy(); }
      });
      markers = schools.map((school, index) => {
        const marker = L.marker(school.point, {
          icon: L.divIcon({
            className: 'campus-pin', iconSize: [32, 32], iconAnchor: [16, 16],
            html: `<span>${String(index + 1).padStart(2, '0')}</span>`
          }),
          title: school.zh, keyboard: true
        }).addTo(map).bindPopup(document.createElement('div'), {maxWidth: 230, minWidth: 150});
        marker.on('click', () => {
          buttons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.campus) === index)));
        });
        return marker;
      });
      overview(false);
      updateCopy();
      new ResizeObserver(() => {
        map.invalidateSize({pan: false});
        if (buttons.every(button => button.getAttribute('aria-pressed') === 'false')) overview(false);
      }).observe(canvas);
    } catch {
      failed = true;
      updateCopy();
    }
  }
  buttons.forEach(button => button.addEventListener('click', async () => {
    await start();
    if (!map) return;
    const index = Number(button.dataset.campus);
    map.setView(schools[index].point, 15, {animate: animate()});
    markers[index].openPopup();
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));
  panel.querySelector('.campus-map-reset').addEventListener('click', () => overview());
  document.querySelector('.language-toggle').addEventListener('click', updateCopy);
  updateCopy();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        start();
        observer.disconnect();
      }
    });
    observer.observe(panel);
  } else start();
})();
