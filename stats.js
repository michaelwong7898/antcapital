/**
 * Ant Capital - 底部访问统计小横幅
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'antcap_stats_v3';

  function getTotal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? parseInt(raw, 10) : 0;
    } catch (e) { return 0; }
  }

  function track() {
    var total = getTotal() + 1;
    try { localStorage.setItem(STORAGE_KEY, total); } catch (e) {}
    return total;
  }

  function render(total) {
    var html =
      '<div class="stats-banner">' +
      '  <span class="stats-banner-text">👁 ' + total + '</span>' +
      '</div>';

    var footer = document.querySelector('footer.footer');
    if (footer) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      footer.parentNode.insertBefore(wrapper.firstElementChild, footer);
    }
  }

  var total = track();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { render(total); });
  } else {
    render(total);
  }
})();
