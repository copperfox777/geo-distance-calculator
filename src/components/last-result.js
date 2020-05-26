import React from 'react';

// THIS COMPONENT HANDELS GOOD RESULT AND ERRORS RESULT

function LastResult({lastData}) {
  let distStyle;
  if(lastData.hasOwnProperty('distance')) {
    if(lastData.distance  > 100 ) distStyle={color:'orange'}
    if(lastData.distance  > 1000) distStyle={color:'red'}
  } 
  return (
      <div className='last-result-box'>
        {lastData.errors && lastData.errors.map((item,idx)=><div key={idx} className='error'>{item}</div>)}
        {lastData.distance && <div style={distStyle}>{Math.round(lastData.distance)}</div>}
      </div>
  );
}

export default React.memo(LastResult);
// Memoized. Rerender only on props change.