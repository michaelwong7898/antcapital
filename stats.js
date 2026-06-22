/**
 * Ant Capital - 访问统计
 * 仅展示总访问量
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

  function getLang() {
    try { return localStorage.getItem('ant-lang') || 'en'; } catch (e) { return 'en'; }
  }

  var LABELS = {
    en: { label: 'Total Visits' },
    ar: { label: 'إجمالي الزيارات' },
    zh: { label: '总访问量' }
  };

  function render(total) {
    var lang = getLang();
    var L = LABELS[lang] || LABELS.en;

    var html =
      '<section class="stats-section">' +
      '  <div class="container">' +
      '    <div class="stat-single">' +
      '      <div class="stat-icon">👁</div>' +
      '      <div class="stat-value" id="st-total">' + total + '</div>' +
      '      <div class="stat-label">' + L.label + '</div>' +
      '    </div>' +
      '  </div>' +
      '</section>';

    var footer = document.querySelector('footer.footer');
    if (footer) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      footer.parentNode.insertBefore(wrapper.firstElementChild, footer);
    }
  }

  // Init
  var total = track();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { render(total); });
  } else {
    render(total);
  }
})();
