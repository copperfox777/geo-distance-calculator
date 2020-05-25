import React from "react";
function History({ history,historyClickHandler }) {
  console.log(history);
  return (
    <div>
      <div className='history-title'>History</div>
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
