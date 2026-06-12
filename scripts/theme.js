/**
 * theme.js — Toggle Dark / Light Mode
 * Interface-EchoLinkSvx-Logs by CN8VX
 *
 * Usage : <script src="scripts/theme.js"></script>
 * Fonctionne avec : css/dark-light.css
 * Le choix est sauvegardé dans localStorage ('echolink-theme')
 */

(function () {
  const STORAGE_KEY = 'echolink-theme';
  const DEFAULT_THEME = 'dark'; // thème par défaut

  /**
   * Applique le thème sur <html data-theme="...">
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleButton(theme);
  }

  /**
   * Met à jour l'icône et le label du bouton
   */
  function updateToggleButton(theme) {
    var btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    var icon = btn.querySelector('.toggle-icon');
    var label = btn.querySelector('.toggle-label');

    if (theme === 'dark') {
      if (icon)  icon.textContent  = '☀️';
      if (label) label.textContent = 'Dark';
      btn.title = 'Change Theme';
    } else {
      if (icon)  icon.textContent  = '🌙';
      if (label) label.textContent = 'Light';
      btn.title = 'Change Theme';
    }
  }

  /**
   * Bascule entre dark et light
   */
  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
    var next = (current === 'dark') ? 'light' : 'dark';
    applyTheme(next);
  }

  /**
   * Initialisation : lit le localStorage ou détecte la préférence système
   */
  function initTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);

    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      applyTheme('light');
    } else {
      applyTheme(DEFAULT_THEME);
    }
  }

  /**
   * Écoute le changement de préférence système en temps réel
   */
  function watchSystemTheme() {
    if (!window.matchMedia) return;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      // Ne change que si l'utilisateur n'a pas fait de choix manuel
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // ── Initialiser dès que possible (avant DOMContentLoaded pour éviter le flash) ──
  initTheme();
  watchSystemTheme();

  // ── Attacher le handler du bouton après que le DOM soit prêt ──
  document.addEventListener('DOMContentLoaded', function () {
    initTheme(); // re-applique pour mettre à jour le bouton qui vient d'être créé
    var btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });

  // Exposer la fonction globalement (utile si besoin depuis d'autres scripts)
  window.toggleEcholinkTheme = toggleTheme;
})();