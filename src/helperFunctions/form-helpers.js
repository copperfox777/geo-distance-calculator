export const formInitialState={
  street1: "",
  city1: "",
  stateCode1: "",
  postalCode1: "",
  street2: "",
  city2: "",
  stateCode2: "",
  postalCode2: "",
}

export const formInitialStatePreset={
  street1: "20",
  city1: "San",
  stateCode1: "CA",
  postalCode1: "94123",
  street2: "350 5th Avenue",
  city2: "Manhattan",
  stateCode2: "NY",
  postalCode2: "10018",
}

function validatePostalCode(value) {
  let res = /^\d{5}$|^\d{5}-\d{4}$/.test(value)
  return !res;
}

function validateStateCode(val) {
  let value = val.toUpperCase();
  if   (  value === "AL" || value === "AK" || value === "AZ" || value === "AR" || value === "CA" || value === "CO" || value === "CT" || value === "DE" || value ===  "FL" || value === "GA" || value === "HI" || value === "ID" || value === "IL" || value === "IN" || value === "IA" || value === "KS" || value === "KY" || value === "LA" || value ===  "ME" || value === "MD" || value === "MA" || value === "MI" || value === "MN" || value === "MS" || value === "MO" || value === "MT" || value === "NE" || value === "NV" || value === "NH" || value === "NJ" || value === "NM" || value === "NY" || value === "NC" || value === "ND" || value === "OH" || value === "OK" || value === "OR" || value === "PA" || value === "RI" || value === "SC" || value === "SD" || value === "TN" || value === "TX" || value === "UT" || value === "VT" || value === "VA" || value === "WA" || value === "WV" || value === "WI" || value === "WY" || value === "AS" || value === "DC" || value === "FM" || value === "GU" || value === "MH" || value === "MP" || value === "PW" || value === "PR" || value === "VI" ){
    return false;
  }
  return true;
}

function validateStreetAndCity(value) {
  return false;
 }

export function formDataToRequestUrl(formData) {
  const f=formData;
  let url1=`${f.street1}, ${f.city1}, ${f.stateCode1} ${f.postalCode1}`.split(' ').join('+');
  let url2=`${f.street2}, ${f.city2}, ${f.stateCode2} ${f.postalCode2}`.split(' ').join('+');
  return [url1,url2];
}

export function allFilled(obj) {
  for(let prop in obj)
      if(obj[prop].length === 0 ) return false;
  return true;
}

export function allFalse(obj) {
  for(let prop in obj)
      if(obj[prop] === true ) return false;
  return true;
}

export function formDataHasErrors(formData) {
  const postalCode1 = validatePostalCode(formData.postalCode1)
  const postalCode2 = validatePostalCode(formData.postalCode2)
  const stateCode1 = validateStateCode(formData.stateCode1)
  const stateCode2 = validateStateCode(formData.stateCode2)
  const street1 = validateStreetAndCity(formData.street1)
  const street2 = validateStreetAndCity(formData.street2)
  const city1 = validateStreetAndCity(formData.city1)
  const city2 = validateStreetAndCity(formData.city2)

  return {street1,street2,city1,city2,stateCode1,stateCode2,postalCode1,postalCode2}
 }