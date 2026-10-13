(() => {
  'use strict';

  // Public collection address; dashboard access requires the owner's login.
  const dashboardUrl = 'https://peppaoinks.goatcounter.com';
  if (!dashboardUrl || window.location.hostname !== 'peppaoinks.github.io') return;

  const tracker = document.createElement('script');
  tracker.async = true;
  tracker.src = 'assets/vendor/goatcounter/count.js?v=c031008';
  tracker.setAttribute('data-goatcounter', `${dashboardUrl}/count`);
  tracker.setAttribute('data-goatcounter-settings', JSON.stringify({
    path: window.location.pathname === '/index.html' ? '/' : window.location.pathname,
    title: 'Felixzhou · Personal Website',
    no_events: true,
  }));
  document.head.appendChild(tracker);
})();
