// Life photos are ordered from childhood to the present, followed by the video.
const personalPhotos = [
  { src: 'assets/gallery/childhood-flowers.webp', altZh: '在深圳戴着彩色花环的童年照片', altEn: 'A childhood photo wearing a colorful garland in Shenzhen', captionZh: '深圳', captionEn: 'Shenzhen', date: '2010-07-17' },
  { src: 'assets/gallery/jiangshan-childhood.webp', altZh: '在浙江江山穿黄色毛衣的童年照片', altEn: 'A childhood photo in a yellow sweater in Jiangshan, Zhejiang', captionZh: '浙江 · 江山', captionEn: 'Jiangshan · Zhejiang', date: '2011-02-04' },
  { src: 'assets/gallery/childhood-panda.webp', altZh: '在上海外滩戴着熊猫帽的童年照片', altEn: 'A childhood photo wearing a panda hat at the Bund in Shanghai', captionZh: '上海 · 外滩', captionEn: 'Shanghai · The Bund' },
  { src: 'assets/gallery/xuefu-primary.webp', altZh: '在深圳学府小学参加舞台表演的照片', altEn: 'On stage at Xuefu Primary School, Shenzhen', captionZh: '深圳 · 学府小学', captionEn: 'Shenzhen · Xuefu Primary School', date: '2014-06-15' },
  { src: 'assets/gallery/chibi-childhood.webp', altZh: '在湖北赤壁穿黄色上衣的童年照片', altEn: 'A childhood photo in a yellow shirt in Chibi, Hubei', captionZh: '湖北 · 赤壁', captionEn: 'Chibi · Hubei' },
  { src: 'assets/gallery/bloxham.webp', altZh: '在英国牛津郡 Bloxham 的照片', altEn: 'In Bloxham, Oxfordshire, United Kingdom', captionZh: '英国 · Oxfordshire · Bloxham', captionEn: 'Bloxham · Oxfordshire · United Kingdom', date: '2018-08-26' },
  { src: 'assets/gallery/london-trafalgar.webp', altZh: '在伦敦特拉法加广场戴着 London 帽子的照片', altEn: 'Wearing a London beanie at Trafalgar Square, London', captionZh: '英国 · 伦敦 · 特拉法加广场', captionEn: 'Trafalgar Square · London · United Kingdom', date: '2018-08-26' },
  { src: 'assets/gallery/nigang-classroom.webp', altZh: '在深圳中学泥岗校区教室黑板前的照片', altEn: 'By a classroom blackboard at Shenzhen Middle School, Nigang Campus', captionZh: '深圳 · 深圳中学泥岗校区', captionEn: 'Shenzhen Middle School · Nigang Campus' },
  { src: 'assets/gallery/nigang-football.webp', altZh: '在深圳中学泥岗校区足球场的合照', altEn: 'A group photo on the football field at Shenzhen Middle School, Nigang Campus', captionZh: '深圳 · 深圳中学泥岗校区', captionEn: 'Shenzhen Middle School · Nigang Campus' },
  { src: 'assets/gallery/shenzhen-middle-school.webp', altZh: '在深圳中学泥岗校区红砖建筑前的照片', altEn: 'By the red-brick buildings at Shenzhen Middle School, Nigang Campus', captionZh: '深圳 · 深圳中学泥岗校区', captionEn: 'Shenzhen Middle School · Nigang Campus', date: '2024-07-10' },
  { src: 'assets/gallery/seaside.webp', altZh: '在三亚湾海边的照片', altEn: 'By the sea at Sanya Bay', captionZh: '三亚湾', captionEn: 'Sanya Bay', date: '2026-02-01' },
  { src: 'assets/gallery/life-01.webp', altZh: '在深圳福田香格里拉的照片', altEn: 'At Futian Shangri-La, Shenzhen', captionZh: '深圳 · 福田香格里拉', captionEn: 'Shenzhen · Futian Shangri-La', date: '2026-04-09' },
  { src: 'assets/gallery/life-02.webp', altZh: '在哈尔滨工业大学深圳实验学校的合影', altEn: 'A group photo at Harbin Institute of Technology Shenzhen Experimental School', captionZh: '深圳 · 哈尔滨工业大学深圳实验学校', captionEn: 'Shenzhen · HIT Shenzhen Experimental School', date: '2026-04-15' },
  { type: 'video', src: 'assets/gallery/life-video.mp4', poster: 'assets/gallery/life-video-poster.webp', altZh: '在香港中港城拍摄的生活视频', altEn: 'A personal video filmed at China Hong Kong City', captionZh: '香港 · 中港城', captionEn: 'Hong Kong · China Hong Kong City', date: '2026-10-01' }
];
// Photography works are separate from the personal carousel. Add real works here.
const photographyWorks = [];
const resumePdf = "";
let galleryState = null;
const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const translations = {
  zh: {
    navNow: '近况', navMusic: '歌单', nowTitle: '近况', nowOngoing: '正在读', bookPrevious: '上一本书', bookNext: '下一本书', bookLabel: '滑动阅读书架',
    musicTitle: '歌单', musicDraft: '歌单初选', musicHint: '左右滑动，点击封面前往 Apple Music。', musicPrevious: '上一张专辑', musicNext: '下一张专辑', musicLabel: '滑动专辑封面歌单',
    title: '周方璟 · 个人主页', name: '周方璟',
    description: '周方璟，哈尔滨工业大学（深圳）计算机科学与技术专业大二学生。个人项目、随笔与日常。',
    skip: '跳到主要内容', homeLabel: '周方璟 首页', navLabel: '主导航',
    navAbout: '关于', navProjects: '项目', navEssays: '随笔', navPhotography: '摄影', navContact: '联系',
    hello: '你好，我是', university: '哈尔滨工业大学（深圳）', degree: '计算机科学与技术 · 大二',
    artLineOne: 'the best people', artLineTwo: 'in life are free.',
    viewProjects: '看看我的项目', artLabel: '由绿色圆形、轨道、字样 felixzhou 和数字 24 组成的抽象个人标识',
    explore: '向下探索', aboutTitle: '关于我',

    bioIntroStart: '我是周方璟，', universityShort: '哈工大（深圳）', bioIntroEnd: '计算机科学与技术专业大二学生。',
    bioSite: '这里有我的项目、照片和随笔。',
    bioTeaching: '我也喜欢教英语，曾在哈工大深圳实验学校给初二重点班做过一学期的英语辅导。',
    bioFootballStart: '我是', barcelona: '巴塞罗那', bioFootballAnd: '和', pengCity: '深圳新鹏城', bioFootballMiddle: '的球迷。在', bioFootballEnd: '校队踢前腰和左边锋。',
    bioMusic: '喜欢唱歌，平时主要听欧美流行，常听 Taylor Swift、Ed Sheeran、The Weeknd、Ariana Grande 和 Sabrina Carpenter。看过陶喆和单依纯的现场演唱会。',
    bioPotterStart: '《', potterTitle: '哈利·波特', bioPotterEnd: '》迷，斯莱特林学生。',
    campusMapTitle: '校园地图', campusShaibu: '深圳中学 · 晒布', campusNigang: '深圳中学 · 泥岗', campusUniversity: '哈工大（深圳）', campusOverview: '查看全图', campusMapLabel: '深圳校园位置，可通过按钮缩放和切换校园', campusMapHint: '点击校园标记查看位置', campusOpenMap: '在地图中打开',
    educationTitle: '教育经历', schoolShenzhen: '深圳中学', educationUniversityDates: '2025.9–2029.6（预计）',
    updating: '持续更新中', projectsTitle: '一些正在做的事', allRepos: '全部仓库',
    notesVisual: '学习 / 资料整理', notesCover: '课程讲义', notesArtwork: '哈工深 · 自建讲义库',
    notesCategory: '学习资料', notesTitle: '哈工深讲义库', notesDescription: '课程讲义的整理与积累。',
    painterVisual: '创意 / 人工智能工具', painterCoverOne: '一点', painterCoverTwo: '想象力。',
    painterCategory: '创意工具', painterDescription: '将图片改画为水粉画风格的 Codex 技能。',
    essaysIndex: '生活 · 音乐 · 随想', essaysTitle: '随笔集',
    essaysIntro: '关于生活、音乐，以及偶尔想留下的感受。',
    essaysEmpty: '第一篇，慢慢写。', essaysHint: '还没有公开的随笔，写好了就放在这里。',
    emailLabel: '邮箱', contactDetails: '联系方式', contactEyebrow: '很高兴认识你。', contactTitle: '保持联系', findGithub: '在 GitHub 上找到我',
    followMe: '关注我', socialLabel: '社交媒体', rednote: '小红书', pending: '待补充',
    pendingRednote: '小红书链接待补充', linkedinLabel: '在 LinkedIn 上关注我',
    zhihuLabel: '在知乎上关注我', rednoteLabel: '在小红书上关注我', githubLabel: '在 GitHub 上关注我', sponsorTitle: '支持我的学习与创作',
    sponsorDescription: '微信扫一扫', sponsorImageAlt: '微信赞赏二维码',
    officialAccountLabel: '公众号', lastUpdatedLabel: '最后更新：', resumeLabel: '简历 PDF',
    galleryLabel: '个人相册', previousPhoto: '上一项', nextPhoto: '下一项', photoNumber: '查看第 {n} 项',
    photographyTitle: '摄影集', photographyEmpty: '作品待更新', photographyHint: '这里将收录我喜欢的摄影作品。',
    backTop: '回到顶部',
    themeDark: '切换到深色模式', themeLight: '切换到浅色模式'
  },
  en: {
    navNow: 'Now', navMusic: 'Music', nowTitle: 'Now', nowOngoing: 'Currently reading', bookPrevious: 'Previous book', bookNext: 'Next book', bookLabel: 'Scrollable reading shelf',
    musicTitle: 'Music', musicDraft: 'First selection', musicHint: 'Swipe through the covers. Select one to listen on Apple Music.', musicPrevious: 'Previous album', musicNext: 'Next album', musicLabel: 'Swipeable album cover playlist',
    title: 'Felixzhou · Personal Website', name: 'Felixzhou',
    description: 'Felixzhou, a second-year Computer Science and Technology student at Harbin Institute of Technology, Shenzhen. Projects, essays, and everyday life.',
    skip: 'Skip to content', homeLabel: 'Felixzhou home', navLabel: 'Main navigation',
    navAbout: 'About', navProjects: 'Projects', navEssays: 'Essays', navPhotography: 'Photography', navContact: 'Contact',
    hello: "Hi, I'm", university: 'Harbin Institute of Technology, Shenzhen', degree: 'Computer Science and Technology · Year 2',
    artLineOne: 'the best people', artLineTwo: 'in life are free.',
    viewProjects: 'Explore my projects', artLabel: 'A felixzhou wordmark with the number 24, a green circle, and orbital lines',
    explore: 'Scroll to explore', aboutTitle: 'About me',

    bioIntroStart: "I'm Felixzhou, a second-year computer science student at ", universityShort: 'HIT Shenzhen', bioIntroEnd: '.',
    bioSite: "This is where I share my projects, photos, and essays.",
    bioTeaching: 'I also enjoy teaching English. I tutored an advanced Grade 8 class for one semester at HIT Shenzhen Experimental School.',
    bioFootballStart: 'I support ', barcelona: 'FC Barcelona', bioFootballAnd: ' and ', pengCity: 'Shenzhen Peng City', bioFootballMiddle: '. I play as an attacking midfielder and left winger for the ', bioFootballEnd: ' university team.',
    bioMusic: 'I enjoy singing and mostly listen to Western pop: Taylor Swift, Ed Sheeran, The Weeknd, Ariana Grande, and Sabrina Carpenter. I have also seen David Tao and Shan Yichun live in concert.',
    bioPotterStart: "I'm also a ", potterTitle: 'Harry Potter', bioPotterEnd: ' fan and a Slytherin.',
    campusMapTitle: 'Campus map', campusShaibu: 'SMS · Shaibu', campusNigang: 'SMS · Nigang', campusUniversity: 'HIT Shenzhen', campusOverview: 'Overview', campusMapLabel: 'Campus locations in Shenzhen; use the controls to zoom and select a campus', campusMapHint: 'Select a campus marker to explore', campusOpenMap: 'Open map',
    educationTitle: 'Education', schoolShenzhen: 'Shenzhen Middle School', educationUniversityDates: '2025.9–2029.6 (expected)',
    updating: 'A work in progress', projectsTitle: "Things I'm working on", allRepos: 'All repositories',
    notesVisual: 'LEARNING / DOCUMENTATION', notesCover: 'LECTURE NOTES', notesArtwork: 'HITSZ · Lecture notes',
    notesCategory: 'Learning resources', notesTitle: 'HITSZ Lecture Notes', notesDescription: 'A growing collection of course lecture notes.',
    painterVisual: 'CREATIVE / AI TOOLS', painterCoverOne: 'a little', painterCoverTwo: 'imagination.',
    painterCategory: 'Creative tools', painterDescription: 'A Codex skill that repaints images in a gouache style.',
    essaysIndex: 'Life · Music · Reflections', essaysTitle: 'Essays',
    essaysIntro: 'Thoughts on life, music, and moments I want to remember.',
    essaysEmpty: 'Taking my time with the first one.', essaysHint: 'No published essays yet. They will appear here when ready.',
    emailLabel: 'Email', contactDetails: 'Contact details', contactEyebrow: 'Nice to meet you.', contactTitle: 'Keep in touch', findGithub: 'Find me on GitHub',
    followMe: 'Follow me', socialLabel: 'Social media', rednote: 'Xiaohongshu', pending: 'Coming soon',
    pendingRednote: 'Xiaohongshu link coming soon', linkedinLabel: 'Follow me on LinkedIn',
    zhihuLabel: 'Follow me on Zhihu', rednoteLabel: 'Follow me on Xiaohongshu', githubLabel: 'Follow me on GitHub', sponsorTitle: 'Support my learning and creative work',
    sponsorDescription: 'Scan with WeChat', sponsorImageAlt: 'WeChat support QR code',
    officialAccountLabel: 'Official account', lastUpdatedLabel: 'Last updated:', resumeLabel: 'Résumé PDF',
    galleryLabel: 'Personal gallery', previousPhoto: 'Previous item', nextPhoto: 'Next item', photoNumber: 'Show item {n}',
    photographyTitle: 'Photography', photographyEmpty: 'No works published yet', photographyHint: 'A selection of my favorite photographs will appear here.',
    backTop: 'Back to top',
    themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode'
  }
};

function readPreference(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch (_) {}
}
let language = readPreference('fz-language') === 'en' ? 'en' : 'zh';
function updateThemeLabel() {
  const label = translations[language][root.dataset.theme === 'dark' ? 'themeLight' : 'themeDark'];
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
}
function setTheme(theme) {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0c1b14' : '#f1f5ee';
  updateThemeLabel();
}
function setLanguage(next) {
  language = next;
  const copy = translations[language];
  root.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-label]').forEach(element => {
    const label = copy[element.dataset.i18nLabel];
    element.setAttribute('aria-label', label);
    if (element.classList.contains('social-icon')) element.title = label;
  });
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  languageToggle.textContent = language === 'zh' ? 'English' : '中文';
  languageToggle.lang = language === 'zh' ? 'en' : 'zh-CN';
  languageToggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  updateThemeLabel();
  updateGalleryLanguage();
}
const savedTheme = readPreference('fz-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme);
setLanguage(language);
themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  savePreference('fz-theme', next);
});
languageToggle.addEventListener('click', () => {
  const next = language === 'zh' ? 'en' : 'zh';
  setLanguage(next);
  savePreference('fz-language', next);
});
document.getElementById('year').textContent = new Date().getFullYear();

if (resumePdf) {
  const resumeLink = document.getElementById('resume-link');
  resumeLink.href = resumePdf;
  resumeLink.hidden = false;
}

function updateGalleryLanguage() {
  if (!galleryState) return;
  const copy = translations[language];
  galleryState.photos.forEach(({ media, photo }) => {
    const description = language === 'zh' ? photo.altZh : photo.altEn;
    if (photo.type === 'video') media.setAttribute('aria-label', description);
    else media.alt = description;
  });
  const activePhoto = personalPhotos[galleryState.index - 1];
  const caption = document.querySelector('.gallery-caption');
  caption.hidden = !activePhoto;
  caption.textContent = activePhoto
    ? (language === 'zh' ? activePhoto.captionZh : activePhoto.captionEn)
    : '';
  if (activePhoto?.date) caption.textContent += ' · ' + activePhoto.date.replaceAll('-', '.');
  galleryState.dots.forEach((dot, index) => {
    dot.setAttribute('aria-label', copy.photoNumber.replace('{n}', index + 1));
  });
}

const gallery = document.querySelector('.hero-gallery');
const galleryControls = gallery.querySelector('.gallery-controls');
galleryState = { photos: [], dots: [], index: 0 };
personalPhotos.forEach(photo => {
  const slide = document.createElement('div');
  slide.className = 'gallery-slide photo-slide';
  slide.hidden = true;
  const media = document.createElement(photo.type === 'video' ? 'video' : 'img');
  media.src = photo.src;
  media.style.objectPosition = photo.position || 'center';
  if (photo.type === 'video') {
    media.controls = true;
    media.playsInline = true;
    media.preload = 'none';
    media.poster = photo.poster;
    media.textContent = 'Your browser does not support embedded video.';
  } else {
    media.loading = 'lazy';
    media.decoding = 'async';
  }
  slide.append(media);
  gallery.insertBefore(slide, galleryControls);
  galleryState.photos.push({ media, photo });
});
const gallerySlides = Array.from(gallery.querySelectorAll('.gallery-slide'));
function showGallerySlide(index) {
  galleryState.index = (index + gallerySlides.length) % gallerySlides.length;
  gallerySlides.forEach((slide, slideIndex) => {
    slide.hidden = slideIndex !== galleryState.index;
    if (slide.hidden) slide.querySelector('video')?.pause();
  });
  galleryState.dots.forEach((dot, dotIndex) => {
    dot.setAttribute('aria-current', String(dotIndex === galleryState.index));
  });
  // Warm up adjacent photos so the next swipe rarely needs to wait.
  [-1, 0, 1].forEach(offset => {
    const nearby = (galleryState.index + offset + gallerySlides.length) % gallerySlides.length;
    const image = gallerySlides[nearby].querySelector('img');
    if (image) image.loading = 'eager';
  });
  updateGalleryLanguage();
}
if (gallerySlides.length > 1) {
  gallery.classList.add('has-photos');
  galleryControls.hidden = false;
  gallerySlides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.addEventListener('click', () => showGallerySlide(index));
    gallery.querySelector('.gallery-dots').append(dot);
    galleryState.dots.push(dot);
  });
  gallery.querySelector('.gallery-prev').addEventListener('click', () => showGallerySlide(galleryState.index - 1));
  gallery.querySelector('.gallery-next').addEventListener('click', () => showGallerySlide(galleryState.index + 1));
  gallery.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showGallerySlide(galleryState.index + (event.key === 'ArrowRight' ? 1 : -1));
  });
  let touchStart;
  gallery.addEventListener('touchstart', event => {
    if (event.target.closest('video')) { touchStart = null; return; }
    if (event.touches.length !== 1) { touchStart = null; return; }
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });
  gallery.addEventListener('touchend', event => {
    if (!touchStart || !event.changedTouches.length) return;
    const deltaX = event.changedTouches[0].clientX - touchStart.x;
    const deltaY = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      showGallerySlide(galleryState.index + (deltaX < 0 ? 1 : -1));
    }
    touchStart = null;
  }, { passive: true });
  showGallerySlide(0);
} else {
  gallery.removeAttribute('tabindex');
}
updateGalleryLanguage();

const photographyGrid = document.querySelector('.photography-grid');
photographyWorks.forEach(work => {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.src = work.src;
  image.loading = 'lazy';
  image.decoding = 'async';
  const caption = document.createElement('figcaption');
  const updateCopy = () => {
    image.alt = language === 'zh' ? work.altZh : work.altEn;
    caption.textContent = language === 'zh' ? work.captionZh : work.captionEn;
  };
  updateCopy();
  languageToggle.addEventListener('click', updateCopy);
  figure.append(image, caption);
  photographyGrid.append(figure);
});
if (photographyWorks.length) {
  photographyGrid.hidden = false;
  document.querySelector('.photography-empty').hidden = true;
}

const siteHeader = document.querySelector('.site-header');
let headerFrame = null;
function updateHeaderPosition() {
  const shift = Math.min(1, Math.max(0, window.scrollY / 180));
  siteHeader.style.setProperty('--brand-shift', shift.toFixed(4));
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 10);
  headerFrame = null;
}
window.addEventListener('scroll', () => {
  if (headerFrame === null) headerFrame = requestAnimationFrame(updateHeaderPosition);
}, { passive: true });
updateHeaderPosition();

// Native scrolling supports touch and trackpads; controls also work with a keyboard.
function setupShelf(railSelector, cardSelector, previousSelector, nextSelector) {
  const rail = document.querySelector(railSelector);
  const previous = document.querySelector(previousSelector);
  const next = document.querySelector(nextSelector);
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function move(direction) {
    const card = rail.querySelector(cardSelector);
    rail.scrollBy({ left: direction * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).gap)), behavior: motion.matches ? 'auto' : 'smooth' });
  }
  function updateControls() {
    previous.disabled = rail.scrollLeft <= 4;
    next.disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  rail.addEventListener('scroll', updateControls, { passive: true });
  rail.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  new ResizeObserver(updateControls).observe(rail);
  updateControls();
}
setupShelf('.music-rail', '.music-card', '.music-prev', '.music-next');
setupShelf('.book-rail', '.book-card', '.book-prev', '.book-next');
