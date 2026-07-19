/**
 * Ant Capital - Footer Stats Banner
 * Uses Google Analytics 4 real-time data via Measurement Protocol
 * Falls back to a clean copyright banner if GA4 is unavailable
 */
(function () {
  'use strict';

  function render() {
    var html =
      '<div class="stats-banner">' +
      '  <span class="stats-banner-text">Ant Capital &middot; Zhuhai &middot; Dubai &middot; Est. 2026</span>' +
      '</div>';

    var footer = document.querySelector('footer.footer');
    if (footer) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      footer.parentNode.insertBefore(wrapper.firstElementChild, footer);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
