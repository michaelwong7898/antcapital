/**
 * Ant Capital - 访问统计模块
 * 基于 localStorage 自动记录每次页面访问
 * 展示：总访问量 | 今日访问 | 7天访问 | 趋势图
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'antcap_stats_v2';
  const TODAY = new Date().toISOString().slice(0, 10);
  const PAGE_LOAD_TIME = Date.now();

  // === 数据读写 ===
  function getStats() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return { total: 0, firstVisit: TODAY, daily: {} };
  }

  function saveStats(s) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) { /* quota exceeded */ }
  }

  // === 追踪 ===
  function track() {
    var stats = getStats();
    stats.total++;
    stats.daily[TODAY] = (stats.daily[TODAY] || 0) + 1;
    saveStats(stats);
    return stats;
  }

  // === 计算 ===
  function calc7Days(stats) {
    var days = [];
    for (var i = 6; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = d.toISOString().slice(0, 10);
      days.push({ date: key, label: (i === 0 ? 'Today' : ('-' + i + 'd')), count: stats.daily[key] || 0 });
    }
    return days;
  }

  // === 渲染 ===
  function getLang() {
    try { return localStorage.getItem('ant-lang') || 'en'; } catch (e) { return 'en'; }
  }

  var LABELS = {
    en: { title: 'Site Stats', total: 'Total Visits', today: 'Today', week: '7 Days', since: 'Since' },
    ar: { title: 'إحصائيات الموقع', total: 'إجمالي الزيارات', today: 'اليوم', week: '٧ أيام', since: 'منذ' },
    zh: { title: '网站数据', total: '总访问量', today: '今日访问', week: '7天访问', since: '数据起始' }
  };

  function render(stats) {
    var lang = getLang();
    var L = LABELS[lang] || LABELS.en;
    var days7 = calc7Days(stats);
    var weekTotal = days7.reduce(function (s, d) { return s + d.count; }, 0);
    var maxCount = Math.max.apply(null, days7.map(function (d) { return d.count; })) || 1;

    // Build bars HTML
    var barsHTML = days7.map(function (d) {
      var h = Math.max(4, Math.round((d.count / maxCount) * 48));
      var active = d.date === TODAY ? ' active' : '';
      return '<div class="st-bar-col"><span class="st-bar-count">' + d.count + '</span><div class="st-bar' + active + '" style="height:' + h + 'px"></div><span class="st-bar-label">' + d.label + '</span></div>';
    }).join('');

    var html =
      '<section class="section stats-section">' +
      '  <div class="container">' +
      '    <h2 class="section-title" style="text-align:center;margin-bottom:32px;">' + L.title + '</h2>' +
      '    <div class="stats-cards">' +
      '      <div class="stat-card">' +
      '        <div class="stat-icon">👁</div>' +
      '        <div class="stat-value" id="st-total">' + stats.total + '</div>' +
      '        <div class="stat-label">' + L.total + '</div>' +
      '      </div>' +
      '      <div class="stat-card">' +
      '        <div class="stat-icon">📅</div>' +
      '        <div class="stat-value" id="st-today">' + (stats.daily[TODAY] || 0) + '</div>' +
      '        <div class="stat-label">' + L.today + '</div>' +
      '      </div>' +
      '      <div class="stat-card">' +
      '        <div class="stat-icon">📊</div>' +
      '        <div class="stat-value" id="st-week">' + weekTotal + '</div>' +
      '        <div class="stat-label">' + L.week + '</div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="stats-chart">' +
      '      <div class="st-bars">' + barsHTML + '</div>' +
      '    </div>' +
      '    <p class="stats-note">' + L.since + ': ' + stats.firstVisit + '</p>' +
      '  </div>' +
      '</section>';

    // Insert before footer
    var footer = document.querySelector('footer.footer');
    if (footer) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      footer.parentNode.insertBefore(wrapper.firstElementChild, footer);
    }
  }

  // === 定时更新 todays count ===
  function updateTodayDisplay() {
    var stats = getStats();
    var el = document.getElementById('st-today');
    if (el) el.textContent = stats.daily[TODAY] || 0;
    var elT = document.getElementById('st-total');
    if (elT) elT.textContent = stats.total;
  }

  // === Init ===
  var stats = track();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { render(stats); });
  } else {
    render(stats);
  }

  // Refresh every 30s to stay in sync with multi-tab
  setInterval(updateTodayDisplay, 30000);
})();
