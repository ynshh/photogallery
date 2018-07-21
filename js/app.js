var vm = new Vue({
  el: '#images',
  data: {
    photos: [
      { imagePath: 'img/001.jpg', imageAlt: '夕暮れのサンタモニカの海岸' },
      { imagePath: 'img/002.jpg', imageAlt: 'サンタモニカの看板' },
      { imagePath: 'img/003.jpg',  imageAlt: '地面に咲くパンジーの花' },
      { imagePath: 'img/004.jpg',  imageAlt: '晴天のセドナの赤岩' },
      { imagePath: 'img/005.jpg',  imageAlt: 'セドナにあるデビルズブリッジ' },
      { imagePath: 'img/006.jpg',  imageAlt: 'アメリカのSTOPの標識' },
      { imagePath: 'img/007.jpg',  imageAlt: 'ロサンゼルスにあるLACMAの美術館前' }
    ]
  }
});

window.onload = function () {
  // 'use strict';

  var Viewer = window.Viewer;
  var pictures = document.querySelector('.docs-pictures');
  var buttons = document.querySelector('.docs-buttons');
  var viewer = new Viewer(pictures);

  function toggleButtons(mode) {
    var photos;
    var photo;
    var length;
    var i;

    if (/modal|inline|none/.test(mode)) {
      photos = buttons.querySelectorAll('button[data-enable]');

      for (i = 0, length = photos.length; i < length; i++) {
        photo = photos[i];
        photo.disabled = true;

        if (String(photo.getAttribute('data-enable')).indexOf(mode) > -1) {
          photo.disabled = false;
        }
      }
    }
  }

  function addEventListener(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    }
  }
};
