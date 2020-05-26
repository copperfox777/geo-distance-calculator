import React,{useState,useEffect} from 'react'
import MyForm from './components/form'
import LastResult from './components/last-result'
import History from './components/history'
import Navbar from "./components/navbar"
import { processResult as processData, checkManyResults, getErrors } from './helperFunctions/distance-calc'
import MyModal from './components/modal'

function App() {
  const [history,setHistory] = useState([])
  const [lastData,setLastData] = useState([])
  const [modalOpen,setModalOpen] = useState(false)
  const [dataFromForm,setDataFromForm] = useState({fields:0,requestResult:[]})
  // const [requestResult,setRequestResult] = useState([])
  // const [formData,setFormData] = useState(0)
  
  
  
  useEffect(() => {
    console.log(dataFromForm)
    if (dataFromForm.fields) {
      let errors = getErrors(dataFromForm)
      if (errors) {
        setLastData(errors)
      } else {
        if (checkManyResults(dataFromForm)) {
          setModalOpen(true)
        } else {
          const goodResult = processData(dataFromForm)
          setHistory((h) => [goodResult, ...h])
          setLastData(goodResult)
        }
      }
    }
  }, [dataFromForm])


  // HANDLERS 
  const formSubmitHandler = (formData,requestResult) =>{
      setDataFromForm({fields:formData,requestResult})
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

  const modalHandler =(payload) =>{
    console.log('payload', payload)
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
      <MyModal dataFromForm={dataFromForm} modalOpen= {modalOpen} modalHandler={modalHandler}/> 

    </div>
  );
}

export default App;
