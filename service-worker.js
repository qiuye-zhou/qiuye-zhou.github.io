/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "152a117f56e1d1cac0f7654253e4f9d6"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.3dddcbb6.js",
    "revision": "0e2dc5851cae02a79c1489530d426877"
  },
  {
    "url": "assets/js/10.99c6ebcc.js",
    "revision": "1d5a5c6714cb21317f9950ca9bcf8283"
  },
  {
    "url": "assets/js/11.feae039f.js",
    "revision": "4f6e14c56b0f25e4dd3d24727083a334"
  },
  {
    "url": "assets/js/12.838e269e.js",
    "revision": "48ed196bce6200eb25dfe8d7a8263a07"
  },
  {
    "url": "assets/js/13.88cfea65.js",
    "revision": "6ab6da6a738aab5a82e6fdd901657f97"
  },
  {
    "url": "assets/js/14.cb1fd432.js",
    "revision": "544ed6f0c9406cdc081e2a982b80c582"
  },
  {
    "url": "assets/js/15.ffcec02a.js",
    "revision": "76b89e2d848cb2c1a174fe6f1e9b7479"
  },
  {
    "url": "assets/js/16.c88940d4.js",
    "revision": "3521de4471668fb34484eef9ce5930cf"
  },
  {
    "url": "assets/js/17.8f0d7060.js",
    "revision": "01b01c61e5ede3a0c8eeeeddcc09ddb4"
  },
  {
    "url": "assets/js/18.76e75319.js",
    "revision": "1fd6ae5b1ffcf9b1983eb3809104424d"
  },
  {
    "url": "assets/js/4.eb255ed5.js",
    "revision": "305690923cfe9765a30b684744d6d0a7"
  },
  {
    "url": "assets/js/5.f6d73579.js",
    "revision": "8571afe87efa90c51529a6249262f30c"
  },
  {
    "url": "assets/js/6.f0d28bf3.js",
    "revision": "23b8b613e1b0512ad6920d06760bcf25"
  },
  {
    "url": "assets/js/7.a6e41eeb.js",
    "revision": "9884fba4e63676a3fbaadb4a3f0506e3"
  },
  {
    "url": "assets/js/8.f80a6eb6.js",
    "revision": "90f04fc4b88f3f825db89ea10dc81489"
  },
  {
    "url": "assets/js/9.529a88f2.js",
    "revision": "03fcce099261e885b66f764561829eed"
  },
  {
    "url": "assets/js/app.92ea94da.js",
    "revision": "d05b736f7940875648c22b44e1774076"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.33abfebd.js",
    "revision": "54bce033d0a03c3e5b16df9b5b788595"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "1726f185b5b1d96481745a512b8ac707"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0051e439aac1e023dfe4f58d648156ab"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "37a2adc0888789d1ec5617d7df7da4f4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "47cc5f35ce52a54ab219ee32020ec9d2"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1b74b7e1097b94d0057d2091c7ff50b4"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "d524ac3e8dcd5058062614e0420f198b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "4539cf8f42b2e50914b1b94b2d6f5434"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "db609da699dc1b852eba53e3a63cdd62"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e4c099b6dcf35fb0a18f6893a4762f7c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e471f496a842b757ba15b2f5c8978a7b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4662edbe2e8816b113ebae31a4e76968"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a50c842d364a71f7c9ac8f73e5a6f78f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1f5b7ed9e05cfbad665059fea2388147"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "dc385a959b28602d4464e26e1425745f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "16777e21fc92e93599e6214d66750663"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7866d51fc9b3a159eba4cf50dfbb3a8d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "82a1b75560f33779dfe08294d29b6b21"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ca54b121f0579e513729868ec0071ffc"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d050e7a5bd3e7d2a507028c164aac80"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8d7b2c3b9f3c8918eb4433f1aabb18c5"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c92df016c9c6e522aa1b417087fd3685"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6d5169976954400a3b20c6f8c46c1d20"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "741799d13835979c9d2e72da1b172e4b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "37c7b37c0b6109b9d950a34020d52c61"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
