import React from 'react';
import ColorPiker from './ColorPiker/ColorPiker';
import DargNDrop from './DargNDrop/DargNDrop';
import DetailsCard from './DetailsCard/DetailsCard';
import Spinning from './Spinning/Spinning';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <DargNDrop/>
      <ColorPiker/>
    
      <Spinning/>
      <DetailsCard/>
    </div>
  );
};

export default Home;