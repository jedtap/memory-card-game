import '../Styles/Pin.css';

const Pin = (props) => {
  return (
    <img src={props.pin.img} alt='' className='pin' onClick={() => props.handleClick(props.character.id)}/>
  );
};

export default Pin;