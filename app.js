// App loader: all question data files are loaded by index.html.
// This file now has one responsibility: start the quiz application core.
(function () {
  const version = encodeURIComponent(window.__APP_SERVER_VERSION__ || Date.now());
  const script = document.createElement('script');
  script.src = 'app_core.js?v=' + version;
  script.async = false;
  script.onload = function () {
    console.log('後期アプリを起動しました');
  };
  script.onerror = function () {
    console.error('app_core.js を読み込めませんでした');
  };
  document.body.appendChild(script);
})();
