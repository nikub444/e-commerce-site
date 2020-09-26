const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://image.ceneostatic.pl/data/products/75578950/i-asos-design-wide-brim-pork-pie-hat-in-brown-with-aztec-band-brown.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://www.fiorucci.com/dw/image/v2/BBVZ_PRD/on/demandware.static/-/Sites-fiorucci-master-catalog/default/dw5b37e4dc/images/New%20Beanie/BEANIE00XA_Blue_01.jpg?sw=1000&sh=1500',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0089/1541/9195/products/image_84cef335-370a-4f4e-b4f7-8fb5144df695_800x.jpg?v=1564173754',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/610GN-bj2HL._SL1500_.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://cdn10.bigcommerce.com/s-5c4c996f/products/267/images/704/Beanie_Woman_Gree__73678.1511314550.1280.1280.jpg?c=2',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://www.stuartslondon.com/images/lacoste-palm-tree-croc-cap-lemon-p41944-391812_zoom.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdVbVEdaHZzzbrpSRBllB27hMt1xsjeGzwjg&usqp=CAU',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://pertlybeast.com/325-large_default/beast-hat-snow-wolf-c-faux-fur-with-ears.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://e3a2x2w3.stackpathcdn.com/wp-content/uploads/2019/04/NMD-Racer-Juice2fsx1s1d.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://www.sneakers-actus.fr/wp-content/uploads/2020/03/Kanye-West-x-Adidas-Yeezy-Boost-350-V2-Cinder-5-600x455.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://trendyideas.net/wp-content/uploads/2017/08/0f8dc8c6960dc95a6c9ec04aa88b0d52--nike-air-shoes-womens-shoes.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.pinimg.com/736x/1d/f3/94/1df394ae12c0cf5679c5a9654e734c85.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'data:image/jpeg;base64,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',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://cf.shopee.com.my/file/6b8b46bea332bbc561abb757a10eabc4',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://sklep.sizeer.com/media/cache/gallery/rc/knfdzvqy/timberland-premium-6-inch-boot-meskie-buty-zimowe-zolty-tb0100617131_2.jpg',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'data:image/jpeg;base64,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',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_auto,f_auto,q_auto,w_auto/v1/i/95ab01de_c1bf.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://images.asos-media.com/products/asos-design-skinny-denim-jacket-in-grey/8738295-1-grey?$XXL$&wid=513&fit=constrain',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://image.ceneostatic.pl/data/products/71710282/i-asos-design-plus-western-faux-shearling-jacket-in-brown-brown.jpg',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://image.ceneostatic.pl/data/products/75581736/p-na-kd-ribbed-tank-top-with-button-detail-in-blue-blue.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://contestimg.wish.com/api/webimage/5af560cc2d2b9540baaf79c2-large.jpg?cache_buster=909c4ac1623c3120a8deeeb5f440e834',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://media.missguided.com/s/missguided/DD923430_set/1/white-floral-print-flutter-sleeve-midi-dress',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1bEpgRirpK1RjSZFhq6xSdXXaC/Red-White-Polka-Dot-Dress-2019-Summer-Sleeveless-Tank-Tunic-Big-Swing-Pinup-Dress-Vintage-Party.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://fns.modanisa.com/r/pro2/2018/11/30/z-esofman-alti--sari--kuaybe-gider-688724-1.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://ae01.alicdn.com/kf/H8bac9cc4f1ce453aac8e0d34a4030599o/Aachoae-White-Blouse-Long-Sleeve-Blouse-Double-V-neck-Women-Tops-and-Blouses-Solid-Office-Shirt.jpg',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://cdna.lystit.com/photos/94ca-2015/08/21/michael-kors-army-camo-down-vest-green-product-0-411046468-normal.jpeg',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://cf.shopee.ph/file/ff65c1ecdc4a27b0e151f83ee02a068c',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Zine-Chilled-Layered-Black-%26-White-Long-Sleeve-T-Shirt--_282951.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61FNdPlpLDL._UX425_.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://velpa.pl/pol_pl_-LONGSLEEVE-CARLOS-JOOP-JEANS-50578_4.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/m/e/mens_burgundy_t_shirt_front-min_1.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
