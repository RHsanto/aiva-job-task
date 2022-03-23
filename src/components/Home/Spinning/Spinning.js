import React from 'react';
import WheelComponent from 'react-wheel-of-prizes';


const Spinning = () => {
  const segments = [
    'better luck next time',
    'won $1000',
    'won $99',
    'better luck next time',
    'won $25',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ]
  const segColors = [
    '#198754',
    '#F44336',
    '#0D6EFD',
    '#DC3545',
    '#FFC107',
    '#0DCAF0',
    '#E91E63',
    '#4CAF50'
  ]
  const onFinished = (winner) => {
  console.log(winner);
  }
  return (
   <div className=' spinners py-5'>
      <h1 className='title mb-5'> Spinning wheel</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
          <WheelComponent
      segments={segments}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={100}
      fontFamily='Arial'
    
    />
          </div>
        </div>
      </div>

  
   </div>
  );
};

export default Spinning;