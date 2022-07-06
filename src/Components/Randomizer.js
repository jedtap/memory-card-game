import uniqid from 'uniqid';

const pinNumbers = [
  { id: uniqid, index: 1, img: require('../Media/1.png') },
  { id: uniqid, index: 2, img: require('../Media/2.png') },
  { id: uniqid, index: 3, img: require('../Media/3.png') },
  { id: uniqid, index: 4, img: require('../Media/4.png') },
  { id: uniqid, index: 5, img: require('../Media/5.png') },
  { id: uniqid, index: 6, img: require('../Media/6.png') },
  { id: uniqid, index: 7, img: require('../Media/7.png') },
  { id: uniqid, index: 8, img: require('../Media/8.png') },
  { id: uniqid, index: 9, img: require('../Media/9.png') },
  { id: uniqid, index: 10, img: require('../Media/10.png') },
  { id: uniqid, index: 11, img: require('../Media/11.png') },
  { id: uniqid, index: 12, img: require('../Media/12.png') },
  { id: uniqid, index: 13, img: require('../Media/13.png') },
  { id: uniqid, index: 14, img: require('../Media/14.png') },
  { id: uniqid, index: 15, img: require('../Media/15.png') },
  { id: uniqid, index: 16, img: require('../Media/16.png') },
  { id: uniqid, index: 17, img: require('../Media/17.png') },
  { id: uniqid, index: 18, img: require('../Media/18.png') },
  { id: uniqid, index: 19, img: require('../Media/19.png') },
  { id: uniqid, index: 20, img: require('../Media/20.png') },
  { id: uniqid, index: 21, img: require('../Media/21.png') },
  { id: uniqid, index: 22, img: require('../Media/22.png') },
  { id: uniqid, index: 23, img: require('../Media/23.png') },
  { id: uniqid, index: 24, img: require('../Media/24.png') },
  { id: uniqid, index: 25, img: require('../Media/25.png') },
  { id: uniqid, index: 26, img: require('../Media/26.png') },
  { id: uniqid, index: 27, img: require('../Media/27.png') },
  { id: uniqid, index: 28, img: require('../Media/28.png') },
  { id: uniqid, index: 29, img: require('../Media/29.png') },
  { id: uniqid, index: 30, img: require('../Media/30.png') },
];

const randomPins = () => {
  const shuffledPins = pinNumbers.sort(() => 0.5 - Math.random());
  return shuffledPins.slice(0, 12);
};

export default randomPins;