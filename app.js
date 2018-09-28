var vm = new Vue({
  el: '#images',
  data: {
    counter: 1,
    products: [
      { imagePath: 'img/001.jpg', imageAlt: '夕暮れのサンタモニカの海岸' },
      { imagePath: 'img/002.jpg', imageAlt: 'サンタモニカの看板' },
      { imagePath: 'img/003.jpg',  imageAlt: '地面に咲くパンジーの花' },
      { imagePath: 'img/004.jpg',  imageAlt: '晴天のセドナの赤岩' },
      { imagePath: 'img/005.jpg',  imageAlt: 'セドナにあるデビルズブリッジ' },
      { imagePath: 'img/006.jpg',  imageAlt: 'アメリカのSTOPの標識' },
      { imagePath: 'img/007.jpg',  imageAlt: 'ロサンゼルスにあるLACMAの美術館前' }
    ]
  },
  methods: {
    say: function(imageAlt) {
      alert(imageAlt) 
    }
  }
});