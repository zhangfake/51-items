(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/index.ts.e49e0e1f.js")
    );
  })().catch(console.error);

})();
