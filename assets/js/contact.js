 // Simple progress bar for the sidebar (based on scroll)
    (function() {
      const progressFill = document.getElementById('sidebarProgressFill');
      const progressLabel = document.getElementById('sidebarProgressLabel');

      function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let percent = 0;
        if (docHeight > 0) {
          percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));
        }
        if (progressFill) {
          progressFill.style.width = percent + '%';
        }
        if (progressLabel) {
          progressLabel.textContent = percent + '%';
        }
        // also update top progress bar
        const topBar = document.getElementById('progress-bar');
        if (topBar) {
          topBar.style.width = percent + '%';
        }
      }

      window.addEventListener('scroll', updateProgress);
      window.addEventListener('resize', updateProgress);
      updateProgress();
    })();