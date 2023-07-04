import react from 'react';

const SlotM = (props) => {

 /* let x = "😄"; 
  let y = "😄";
  let z = "😄";*/
  let x = props.x;
  let y = props.y;
  let z = props.z;


  if(x === y && y === z){
    return (
      <>
        <div className='Slot_inner'>
        <h1>
         {x} {y} {z}
        </h1>
        <h1>This is Matching.</h1>
        <hr />
        </div>
      </>
    );
  }else{ return (
    <>
      <div className='Slot_inner'>
      <h1>
       {x} {y} {z}
      </h1>
      <h1>This is Not a Matching.</h1>
      <hr />
      </div>
    </>
  );

  }

};

 const App = () => {
  return (
  <>
  
    <h1 className="heading_style">
     🎰 welcome to <span style = { {fontWeight :'Bold'} }>Slot machine game</span> 🎰
     </h1>
     <div className='slotmachine'>

     
     <SlotM x='😄'   y='😄'  z='😄'/>
     <SlotM x='😄'   y= '🧑'  z=' 🍎'/>
     <SlotM x='😄'   y=" 🌹"  z='😄'/>
     <SlotM x='😄'   y=" 🌹"  z=' :100:'/>
     <SlotM x='😄'   y=" 🌹"  z='😄'/>
     <SlotM x=' 💢'   y=" 💢"  z=' 💢'/>
     </div>
  </>
  );
 };

export default App;