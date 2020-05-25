import React,{useState} from 'react'
import MyForm from './components/form'
import LastResult from './components/last-result'
import History from './components/history'
import Navbar from "./components/navbar"
import { processResult } from './helperFunctions/distance-calc'

function App() {
  const [history,setHistory] = useState([]);
  const [lastData,setLastData] = useState([]);

  const formSubmitHandler = (formData,requestResult) =>{
    const data = processResult(formData,requestResult);
    if(data.hasOwnProperty('distance')){
      setHistory([data,...history])
    }
    setLastData(data);
  }

  const historyClickHandler = (idx) =>{
    let data = history[idx];
    let newHistory = [data,...history.slice(0,idx),...history.slice(idx+1)]
    setLastData(data);
    setHistory(newHistory);
  }

  const resetHandler =() =>{
    setHistory([]);
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
          <History history={history} historyClickHandler={historyClickHandler} resetHandler={resetHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
