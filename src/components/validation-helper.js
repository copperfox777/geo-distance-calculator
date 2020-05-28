import React from 'react'

function Nodata() {
  return(
    <span className='red'>?</span>
  )
}

export function ValidationHelper(props) {
  const f = props.formData;
  const e = props.formErrors;
  return (
    <div>
      <div>
        {!e.street1 && f.street1.length>0   ? f.street1 : <Nodata/> }{' '} 
        {!e.city1 && f.city1.length>0 ? f.city1 : <Nodata/> }{' '} 
        {!e.stateCode1 && f.stateCode1.length>0 ? f.stateCode1 : <Nodata/> }{' '}
        {!e.postalCode1 && f.postalCode1.length>0 ? f.postalCode1 : <Nodata/> }{' '}
      </div>
      <div>
        {!e.street2 && f.street2.length>0   ? f.street2 : <Nodata/> }{' '} 
        {!e.city2 && f.city2.length>0 ? f.city2 : <Nodata/> }{' '} 
        {!e.stateCode2 && f.stateCode2.length>0 ? f.stateCode2 : <Nodata/> }{' '}
        {!e.postalCode2 && f.postalCode2.length>0 ? f.postalCode2 : <Nodata/> }{' '}
      </div>
      <br/>
    </div>
  );
}