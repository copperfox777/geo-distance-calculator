function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}


// function formDataToStrings(formData) {
//   const f = formData;
//   let fromStr = `FROM: ${f.street1}, ${f.city1}, ${f.stateCode1} ${f.postalCode1}`;
//   let toStr = `  TO: ${f.street2}, ${f.city2}, ${f.stateCode2} ${f.postalCode2}`;
//   return { fromStr, toStr };
// }

export function processResult(formData) {
  const {serverResponse} = formData;
    const lon1=serverResponse[0].data[0].lon;
    const lat1=serverResponse[0].data[0].lat;
    const lon2=serverResponse[1].data[0].lon;
    const lat2=serverResponse[1].data[0].lat;
    const distance = getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2);
    // const { fromStr, toStr } = formDataToStrings(fields);
    const from = serverResponse[0].data[0].display_name;
    const to =   serverResponse[1].data[0].display_name;
    
    let result={from,to,distance}
    return result;
  
}

export function checkManyResults(formData){
  return formData.serverResponse.some((item)=>item.data.length > 1 )
}

export function checkNoResults(formData){
  return formData.serverResponse.some((item)=>item.data.length === 0 )
}

export function getErrors(formData) {
  const {serverResponse} = formData;
  let errors = [];
  serverResponse.forEach((element, idx) => {
    if (element.hasOwnProperty("error")) {
      errors.push(
        "Failed to fetch. Maybe you have problems with internet connection"
      );
    }
    if (element.data.length === 0) {
      errors.push(`Failed to find location ${idx ? "TO" : "FROM"}`);
    }
  });

  if (errors.length > 0) {
    return {errors};
  } 
  return false;
}