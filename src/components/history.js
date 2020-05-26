import React from "react";
import { Button } from 'semantic-ui-react'
function History({ history,historyClickHandler,resetHandler }) {
  return (
    <div>
      <div className='history-title'>History</div> 
      <Button className="bottom-padding" onClick={resetHandler}>Reset</Button>
      {history.map((item, idx) => {
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
