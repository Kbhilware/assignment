import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {

  return (
  
    <Carousel interval={null}>
    {props.p.map((x,i) =>{
      return <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={x}
          alt="First slide"
        />
      </Carousel.Item>
      })}
    </Carousel>
  );
}

export default Slider;