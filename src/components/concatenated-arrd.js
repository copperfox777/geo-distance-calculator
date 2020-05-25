import React from 'react'

export function ConcatenatedAddrs({formData}) {
  const f = formData;
  return (
    <div>
      <div>
        {`${f.street1 || "?"}, ${f.city1 || "?"}, ${f.stateCode1 || "?"} ${f.postalCode1 || "?"}`}
      </div>
      <div>
        {`${f.street2 || "?"}, ${f.city2 || "?"}, ${f.stateCode2 || "?"} ${f.postalCode2 || "?"}`}
      </div>
      <br/>
    </div>
  );
}