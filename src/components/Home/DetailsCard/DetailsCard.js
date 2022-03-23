import React from 'react';


const DetailsCard = () => {
 
  return (
    <div>
      <h1 className='title mt-5'>Clickable Card </h1>
       <div className="container my-5">
      <div className="row">
      <div className="col-lg-4">
   <div class="card" >
<img src='https://images.unsplash.com/photo-1545462616-efed1939219f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80' class="card-img-top c-img" alt="..."/>
<div class="card-body">
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class=" border-0 text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    <p title='The Bengal tiger is a population of the Panthera tigris tigris subspecies.'> Royal Bengal Tiger</p>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The Bengal tiger is a population of the Panthera tigris tigris subspecies. It ranks among the biggest wild cats alive today. It is considered to belong to the world's charismatic megafauna.</div>
    </div>
  </div>
</div>

</div>
</div>
       </div>
       <div className="col-lg-4">
   <div class="card" >
<img src='https://images.unsplash.com/photo-1618641662184-bafefb91a542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80' class="card-img-top c-img" alt="..."/>
<div class="card-body">
<div class="accordion accordion-flush" id="accordionFlushExample2">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class=" border-0 text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
     <p title="The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular...">Lion King </p>
      </button>
    </h2>
    <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
      <div class="accordion-body">The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.</div>
    </div>
  </div>
</div>

</div>
</div>
 </div>
 <div className="col-lg-4">
   <div class="card" >
<img src='https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHplYnJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
' class="card-img-top c-img" alt="..."/>
<div class="card-body">
<div class="accordion accordion-flush" id="accordionFlushExample3">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class=" border-0 text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
     <p title='Zebra Technologies Corporation is an American mobile computing company specializing in...'>Zebra</p>
      </button>
    </h2>
    <div id="flush-collapseOne3" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample3">
      <div class="accordion-body">Zebra Technologies Corporation is an American mobile computing company specializing in technology used to sense, analyze, and act in real time. The company manufactures and sells marking, tracking, and computer printing technologies..</div>
    </div>
  </div>
</div>

</div>
</div>
       </div>
     
      </div>
    
    </div>
    </div>
  );
};

export default DetailsCard;