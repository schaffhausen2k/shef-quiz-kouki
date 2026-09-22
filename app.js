// Loader: add supplemental question sets, then start the original app.
(function () {
  const version = encodeURIComponent(window.__APP_SERVER_VERSION__ || Date.now());

  function load(src, onload) {
    const script = document.createElement('script');
    script.src = src + '?v=' + version;
    script.async = false;
    script.onload = onload;
    script.onerror = function () {
      console.error(src + ' を読み込めませんでした');
    };
    document.body.appendChild(script);
  }

  load('data/choririron_global_vegan.js', function () {
    load('data/choririron_global_20260922_vegan25.js', function () {
      load('data/foodsafety_20260915.js', function () {
        load('app_core.js', function () {
          console.log('追加問題を含む後期アプリを起動しました');
        });
      });
    });
  });
})();
