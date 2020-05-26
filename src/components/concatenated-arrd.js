import React from 'react'

function Nodata() {
  return(
    <span className='red'>?</span>
  )
}

export function ConcatenatedAddrs(props) {
  const f = props.formData;
  const e = props.formErrors;
  return (
    <div>
      <div>
        {f.street1.length > 0 ? f.street1 : <Nodata/> }{' '} 
        {f.city1.length > 0 ? f.city1 : <Nodata/> }{' '} 
        {!e.stateCode1 ? f.stateCode1 : <Nodata/> }{' '}
        {!e.postalCode1 ? f.postalCode1 : <Nodata/> }{' '}
      </div>
      <div>
        {f.street2.length > 0 ? f.street2 : <Nodata/> }{' '} 
        {f.city2.length > 0 ? f.city2 : <Nodata/> }{' '} 
        {!e.stateCode2 ? f.stateCode2 : <Nodata/> }{' '}
        {!e.postalCode2 ? f.postalCode2 : <Nodata/> }{' '}
      </div>
      <br/>
    </div>
  );
}