import React from 'react';

const SlotM = (props) =>
{
  
  //before object destructing
  //  let x = props.x;
  let {x,y,z} = props;
  
  if( (x===y) && (y===z ) )
  {
    return (
      <>
      <div className='slot_inner'>
      <h1>{x} {y} {z}</h1>
      <h1>Match Found</h1>
      <hr/>
      </div>
      </>
    )

  }else
  {
    return(
      <>
       <div className='slot_inner'>
      <h1>{x} {y} {z}</h1>
    <h1>Not Found</h1>
    <hr/>
    </div>
    </>
    )
  }
}


export default SlotM;