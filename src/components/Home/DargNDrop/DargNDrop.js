import React from 'react';
import Draggable from 'react-draggable';
import { FaUndo } from "react-icons/fa";


const DargNDrop = () => {
  window.addEventListener("contextmenu",function(event){
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top=event.offsetY + "px";
    contextElement.style.left=event.offsetX + "px";
    contextElement.classList.add("active")
  })
window.addEventListener("click",function(){
  document.getElementById("context-menu").classList.remove("active")
});

const reload =(e)=>{
  window.location.reload()}

  return (
    <div className='darg mb-5'> 
    <h1 className='my-5 title'>Draggable Card Here</h1> 
    {/* here start drag card section */}
    <div className="container d-flex">
      {/*here right click option  */}
    <div id="context-menu">
      <div className="item" onClick={reload} > <FaUndo/> reorder</div>
    </div>

    {/* here start 3 draggable card */}
    <Draggable>
    <div className="container">
      <div className="col">
        <div class="card " >
  <img src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" class="card-img-top c-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card One</h5>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, veniam aspernatur. Quas numquam adipisci possimus delectus voluptatum nam obcaecati id excepturi quam accusamus distinctio alias dolorum officia ratione officiis, dicta minima? Neque et impedit minus.</p>
   
  </div>
</div>
        </div>
    </div>
   </Draggable> 
    <Draggable>
   
    <div className="container">
      <div className="row">
        <div className="col">
        <div class="card" >
  <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" class="card-img-top c-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card Two</h5>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, veniam aspernatur. Quas numquam adipisci possimus delectus voluptatum nam obcaecati id excepturi quam accusamus distinctio alias dolorum officia ratione officiis, dicta minima? Neque et impedit minus.</p>
   
  </div>
       </div>
        </div>
      
      </div>
    </div>
   </Draggable> 
    <Draggable>
    <div className="container">
      <div className="row">
        <div className="col">
        <div class="card" >
  <img src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="card-img-top c-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card Three</h5>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, veniam aspernatur. Quas numquam adipisci possimus delectus voluptatum nam obcaecati id excepturi quam accusamus distinctio alias dolorum officia ratione officiis, dicta minima? Neque et impedit minus.</p>
   
  </div>
</div>
        </div>
      </div>
    </div>
   </Draggable> 
    </div>
    
    </div>
  );
};

export default DargNDrop;