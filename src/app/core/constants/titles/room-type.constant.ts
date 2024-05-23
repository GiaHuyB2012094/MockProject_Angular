export const roomType = [
  {
    value: 'singleBedroom',
    label: 'Single Bedroom',
    price: [
      {
        priceFormat : 'hour',
        value: 150000
      }, 
      {
        priceFormat : 'night',
        value: 500000
      }, 
      {
        priceFormat : 'day',
        value: 300000
      }, 
    ],
    img: '/assets/images/single-bedroom.png',
  },
    {
        value: 'doubleBedroom',
        label: 'Double Bedroom',
        price: [
          {
            priceFormat : 'hour',
            value: 180000
          }, 
          {
            priceFormat : 'night',
            value: 720000
          }, 
          {
            priceFormat : 'day',
            value: 400000
          }, 
        ],
        img: '/assets/images/double-bedroom.svg',
    },
    {
        value: 'tripleBedroom',
        label: 'Triple Bedroom',
        price: [
          {
            priceFormat : 'hour',
            value: 250000
          }, 
          {
            priceFormat : 'night',
            value: 1000000
          }, 
          {
            priceFormat : 'day',
            value: 700000
          }, 
        ],
        img: '/assets/images/triple-bedroom.png',

      },
      {
        value: 'twinBedroom',
        label: 'Twin Bedroom',
        price: [
          {
            priceFormat : 'hour',
            value: 200000
          }, 
          {
            priceFormat : 'night',
            value: 800000
          }, 
          {
            priceFormat : 'day',
            value: 500000
          }, 
        ],
        img: '/assets/images/twin-bedroom.png',
      },
      
  ];
  
  export const payFormat = [
    {
      value: 'hour',
      label: 'Hour',
      img: '/assets/images/clock-icon.webp',
    },
    {
      value: 'night',
      label: 'Night',
      img: '/assets/images/moon-icon.webp',
    },
    {
      value: 'day',
      label: 'Day',
      img: '/assets/images/sun-icon.svg',
    },
  ]