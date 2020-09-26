const INITIAL_STATE = {
  sections: [
    {
      title: 'mens',
      imageUrl: 'https://i.pinimg.com/originals/dd/a9/32/dda932d588435ce8c40aa6d64b545279.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    {
      title: 'womens',
      imageUrl: 'https://www.boardsportsource.com/wp-content/uploads/2019/12/WOMENS-PIC-HOMEBOY_FW18-1.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'hats',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0039/1780/7734/products/techwear-bucket-hat-streetwear-fashion-raikago-13822007869558_2000x.jpg?v=1579794700',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81dbWXkT7hL._AC_UL1500_.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1673/5051/products/synthesis-high-top-sneakers-streetwear-techwear-14.jpg?v=1585383170',
      id: 3,
      linkUrl: 'shop/sneakers'
    },

    
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
