import React,{useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { checkManyResults } from '../helperFunctions/distance-calc'


function MyModal({allprops}) {
    const {dataFromForm,modalOpen,modalSelectHandler} = allprops;
    const item = dataFromForm.serverResponse;
    const [selected,setSelected]=useState({left:0,right:0} )

    const handleItemClick = (e) => {
      let sel = e.target.getAttribute('name');
      sel = sel.split(' ');
      sel[1]=Number(sel[1]);
      setSelected({...selected,[sel[0]]:sel[1]})
    }
    if(!checkManyResults(dataFromForm)){
      return null;
    }
    else {
    return (
      <Modal open={modalOpen} onClose={()=>modalSelectHandler(selected)} size="large">
        <Header icon="browser" content="Many search results. Select exact location." />
        <Modal.Content>
          <div className="flex-cont">
            <div className="flex-box modal-box-1">
              <h5>Left:</h5>
                {item[0].data.map((item,idx) => {
                  let clname = idx ===selected.left ? 'modal-item-selected' : 'modal-item'
                  return (
                  <div key={idx} onClick={handleItemClick} className={clname} name={'left '+idx}>{item.display_name}</div>)}
                  )}
            </div>

            <div className="flex-box modal-box-1">
              <h5>Right:</h5>
              {item[1].data.map((item,idx) => {
                  let clname = idx ===selected.right ? 'modal-item-selected' : 'modal-item'
                  return (
                  <div key={idx} onClick={handleItemClick} className={clname} name={'right '+idx}>{item.display_name}</div>)}
                  )}
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={()=>modalSelectHandler(selected)} inverted>
            <Icon name="checkmark" /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )}

}
export default React.memo(MyModal);