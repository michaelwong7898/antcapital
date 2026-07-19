/**
 * Ant Capital | Real Visitor Counter via countapi.xyz
 * Each unique page load increments the global counter.
 */
(function () {
  var API = 'https://api.countapi.xyz';
  var NS = 'antcapital';
  var KEY = 'site-visits';

  function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return String(n);
  }

  function setDisplay(value) {
    var el = document.getElementById('stat-visitors');
    if (el) el.textContent = value;
  }

  async function init() {
    try {
      // Step 1: check if counter exists
      var check = await fetch(API + '/get/' + NS + '/' + KEY);
      var data = await check.json();

      if (data && data.value !== undefined) {
        // Counter exists — hit (increment + return)
        var hit = await fetch(API + '/hit/' + NS + '/' + KEY);
        var hitData = await hit.json();
        setDisplay(formatNumber(hitData.value));
      } else {
        // Counter doesn't exist yet — create first, then hit
        await fetch(API + '/create?namespace=' + NS + '&key=' + KEY + '&value=0');
        var firstHit = await fetch(API + '/hit/' + NS + '/' + KEY);
        var firstData = await firstHit.json();
        setDisplay(formatNumber(firstData.value));
      }
    } catch (e) {
      // Fallback: show placeholder if API is down
      setDisplay('--');
    }
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
