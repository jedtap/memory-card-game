import uniqid from 'uniqid';

const pinNumbers = [
  { id: uniqid, img: require('../Media/1.png') },
  { id: uniqid, img: require('../Media/2.png') },
  { id: uniqid, img: require('../Media/3.png') },
  { id: uniqid, img: require('../Media/4.png') },
  { id: uniqid, img: require('../Media/5.png') },
  { id: uniqid, img: require('../Media/6.png') },
  { id: uniqid, img: require('../Media/7.png') },
  { id: uniqid, img: require('../Media/8.png') },
  { id: uniqid, img: require('../Media/9.png') },
  { id: uniqid, img: require('../Media/10.png') },
  { id: uniqid, img: require('../Media/11.png') },
  { id: uniqid, img: require('../Media/12.png') },
  { id: uniqid, img: require('../Media/13.png') },
  { id: uniqid, img: require('../Media/14.png') },
  { id: uniqid, img: require('../Media/15.png') },
  { id: uniqid, img: require('../Media/16.png') },
  { id: uniqid, img: require('../Media/17.png') },
  { id: uniqid, img: require('../Media/18.png') },
  { id: uniqid, img: require('../Media/19.png') },
  { id: uniqid, img: require('../Media/20.png') },
  { id: uniqid, img: require('../Media/21.png') },
  { id: uniqid, img: require('../Media/22.png') },
  { id: uniqid, img: require('../Media/23.png') },
  { id: uniqid, img: require('../Media/24.png') },
  { id: uniqid, img: require('../Media/25.png') },
  { id: uniqid, img: require('../Media/26.png') },
  { id: uniqid, img: require('../Media/27.png') },
  { id: uniqid, img: require('../Media/28.png') },
  { id: uniqid, img: require('../Media/29.png') },
  { id: uniqid, img: require('../Media/30.png') },
];

const randomPins = () => {
  const shuffledPins = pinNumbers.sort(() => 0.5 - Math.random());
  return shuffledPins.slice(0, 12);
};

export default randomPins;