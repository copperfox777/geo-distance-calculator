import React from "react";
import { Button } from 'semantic-ui-react'
function History({ history,historyClickHandler,resetHandler }) {
  console.log(history);
  return (
    <div>
      <div className='history-title'>History</div> 
      <Button className="bottom-padding" onClick={resetHandler}>Reset</Button>
      
      {history.map((item, idx) => {
        console.log(item);
        return (
          <div className='history-item' key={idx} onClick={()=>historyClickHandler(idx) }>
            <div>{item.from}</div>
            <div>{item.to}</div>
          </div>
        )
      })}
    </div>
  );
}

export default History;
