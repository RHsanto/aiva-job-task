import React from 'react';
import ColorPiker from './ColorPiker/ColorPiker';
import DargNDrop from './DargNDrop/DargNDrop';
import DetailsCard from './DetailsCard/DetailsCard';
import Spinning from './Spinning/Spinning';

const Home = () => {
  return (
    <div>
   {/* here all components */}
      <DargNDrop/>
      <Spinning/>
      <DetailsCard/>
      <ColorPiker/>
    </div>
  );
};

export default Home;