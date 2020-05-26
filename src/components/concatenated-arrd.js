import React from 'react'

function Nodata() {
  return(
    <span className='red'>?</span>
  )
}

export function ConcatenatedAddrs({formData}) {
  const f = formData;
  return (
    <div>
      <div>
        {f.street1 || <Nodata/> }{' '} 
        {f.city1 || <Nodata/> }{' '}
        {f.stateCode1 || <Nodata/> }{' '}
        {f.postalCode1 || <Nodata/> }{' '}
      </div>
      <div>
        {`${f.street2 || <Nodata/>}, ${f.city2 || <Nodata/>}, ${f.stateCode2 || <Nodata/>} ${f.postalCode2 || <Nodata/>}`}
      </div>
      <br/>
    </div>
  );
}