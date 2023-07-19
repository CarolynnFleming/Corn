import { Carousel } from 'react-carousel3';

const style = {
  width: 297,
  height: 296,
};

export default function Turnstyle () { 
    return (
  <div
    style={{
      marginTop:'170px',
      display: 'flex',
      justifyContent: 'center',
      opacity: 0.8,
      // background: 'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
    }}
  >
    <Carousel height={350} width={450} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
        <img alt="" src="./public/6.jpg" />
      </div>
      <div key={2} style={style}>
        <img alt="" src="./public/7.jpg" />
      </div>
      <div key={3} style={style}>
        <img alt="" src="./public/8.jpg" />
      </div>
      <div key={4} style={style}>
        <img alt="" src= "./public/9.jpg"/>
      </div>
      <div key={5} style={style}>
        <img alt="" src= "./public/10.jpg"/>
      </div>
      <div key={6} style={style}>
        <img alt="" src= "./public/11.jpeg"/>
      </div>
    </Carousel>
  </div>
)};