import React from 'react';
import { useState } from 'react';
import {  TwitterPicker } from 'react-color';

const ColorPiker = () => {
  const[color,setColor]=useState('#fff')
  const[showColorPicker,setShowColorPicker]=useState(false)
  
  return (
    <div className="color-section">
     <div className='container my-5 py-5'>
      <h1 className='title'>Color Picker Section</h1>
     <div className="row">
       <div className="col-lg-6 mx-auto ">
         {/* here toggle button */}
       <button className='my-5 btn btn-primary'
      onClick={()=>setShowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? ' Close color picker' : 'Pick a color'}
        
      </button>
   
      {/* here color picker section */}
     <div className="color ">
     {showColorPicker && (
        <TwitterPicker  color={color}
         onChange={updatedColor => setColor(updatedColor.hex)}/>
      )}
     </div>
    {/* here picked color code */}
     <h2 className='mt-5'> You Picked Color {color}</h2>
       </div>
     </div>
    </div>
    </div>
   
  );
};

export default ColorPiker;