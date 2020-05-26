import React,{useState,useEffect} from 'react'
import clone from 'lodash/clone';
import MyForm from './components/form'
import LastResult from './components/last-result'
import History from './components/history'
import Navbar from "./components/navbar"
import MyModal from './components/modal'
import { processResult as processData, checkManyResults, getErrors } from './helperFunctions/distance-calc'

function App() {
  const [history,setHistory] = useState([])
  const [lastData,setLastData] = useState([])
  const [modalOpen,setModalOpen] = useState(false)
  const [formData,setFormData] = useState({fields:0,serverResponse:[]})
  // const [serverResponse,setserverResponse] = useState([])
  // const [formData,setFormData] = useState(0)
  
  
  
  useEffect(() => {
    if (formData.fields) {
      let errors = getErrors(formData)
      if (errors) {
        setLastData(errors)
      } else {
        if (checkManyResults(formData)) {
          setModalOpen(true)
        } else {
          const goodResult = processData(formData)
          setHistory((h) => [goodResult, ...h])
          setLastData(goodResult)
        }
      }
    }
  }, [formData])


  // HANDLERS 
  const formSubmitHandler = (formData,serverResponse) =>{
      setFormData({fields:formData,serverResponse})
  }

  const historyClickHandler = (idx) =>{
    let data = history[idx];
    let newHistory = [data,...history.slice(0,idx),...history.slice(idx+1)]
    setLastData(data);
    setHistory(newHistory);
  }

  const resetHistoryHandler =() =>{
    setHistory([]);
  }

  const modalSelectHandler =(payload) =>{
    setFormData((formData)=>{
      const newformData = clone(formData);
      const leftSelection = formData.serverResponse[0].data[payload.left]
      const rightSelection = formData.serverResponse[1].data[payload.right]
      // console.log(leftSelection,rightSelection);
      newformData.serverResponse[0].data=[leftSelection];
      newformData.serverResponse[1].data=[rightSelection];
      return newformData;
    });
    setModalOpen(false);
  }

  return (
    <div>
      <Navbar />
      <div className="flex-cont">
        <div className="flex-box box-1">
          <MyForm formSubmitHandler={formSubmitHandler} />
          <LastResult lastData={lastData} />
        </div>
        <div className="flex-box box-2">
          <History history={history} historyClickHandler={historyClickHandler} resetHandler={resetHistoryHandler}/>
        </div>
      </div>
      <MyModal allprops={{formData,modalOpen,modalSelectHandler}}/> 

    </div>
  );
}

export default App;
