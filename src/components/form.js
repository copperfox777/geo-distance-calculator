// I decided to do data fetching inside form component.
// It will return data to App.
import React, {useState,useEffect} from "react";
import { Button, Form } from "semantic-ui-react";
import {formDataToRequestUrl, allFilled, formDataHasErrors, allFalse,formInitialState, validateField, formInitialStatePreset} from '../helperFunctions/form-helpers'
import {fetchUrls} from '../helperFunctions/fetch-service-2'
import { ValidationHelper } from "./validation-helper";

function MyForm({formSubmitHandler}) {
  const [isLoading, setIsLoading] = useState(false);
  const [canSubmit,setCanSubmit] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  // const [formData, setFormData] = useState(formInitialStatePreset);
  const [formErrors, setFormErrors] = useState({});
  
  useEffect(() => {
    const formFilled = allFilled(formData);
    const formErrors = formDataHasErrors(formData);
    const formIsValid = allFalse(formErrors);

    formFilled && formIsValid ? setCanSubmit(true) : setCanSubmit(false);
    // setFormErrors(formErrors);
  }, [formData]);

  // HANDLERS
  const handleChange = (e, { name, value }) => {
    if(name.includes('state')){
      value = value.toUpperCase()
    }
    const validationRes = validateField(name,value)
    console.log('validationRes: ', validationRes)
    setFormData({...formData, [name]: value })
    setFormErrors({...formErrors,[name]:validationRes})
  }

  const handleSubmit = () =>{
      const urls = formDataToRequestUrl(formData);
      setIsLoading(true);
      fetchUrls(urls).then((result)=>{
        setIsLoading(false);
        formSubmitHandler(formData,result)
      })
    }


  return (
    <div>
      <div className="flex-cont">
          <Form autoComplete="off" loading={isLoading}>
          <Form.Group widths='equal'>
            <Form.Input label="From" placeholder="Street" name="street1" value={formData.street1} onChange={handleChange} error={formErrors.street1}/>
            <Form.Input label="To" placeholder="Street" name="street2" value={formData.street2} onChange={handleChange} error={formErrors.street2}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input placeholder="City" name="city1" value={formData.city1} onChange={handleChange} error={formErrors.city1}/>
            <Form.Input placeholder="City" name="city2" value={formData.city2} onChange={handleChange} error={formErrors.city2}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input placeholder="State code" name="stateCode1" value={formData.stateCode1} onChange={handleChange} error={formErrors.stateCode1}/>
            <Form.Input placeholder="State code" name="stateCode2" value={formData.stateCode2} onChange={handleChange} error={formErrors.stateCode2}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input placeholder="Postal code" name="postalCode1" value={formData.postalCode1} onChange={handleChange} error={formErrors.postalCode1}/>
            <Form.Input placeholder="Postal code" name="postalCode2" value={formData.postalCode2} onChange={handleChange} error={formErrors.postalCode2}/>
          </Form.Group>
          </Form>
      </div>
        <ValidationHelper formData={formData} formErrors={formErrors}/>
        <Button content="Submit" disabled={!canSubmit} loading={isLoading} onClick={handleSubmit}/>
      
        {/* <strong>Debug:</strong> */}
        {/* <pre>{JSON.stringify(formData)}</pre> */}
        {/* <pre>{JSON.stringify(formErrors, null, 2)}</pre> */}
    </div>
  );
}

export default MyForm;
