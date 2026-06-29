
  // Reading progress bar (top + sidebar)
  function updateProgress() {
    const article = document.getElementById('article-main');
    const rect = article.getBoundingClientRect();
    const articleHeight = article.offsetHeight;
    const scrolled = -rect.top;
    const pct = Math.min(100, Math.max(0, (scrolled / (articleHeight - window.innerHeight)) * 100));

    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('sidebar-fill').style.width = pct + '%';
    document.getElementById('progress-label').textContent = Math.round(pct) + '% complete';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
