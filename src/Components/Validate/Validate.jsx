import React,{useState} from 'react'
import Modal from 'react-modal';
import './Validate.css'

function Validate() {

    const [modalopen,setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(!modalopen)
    }

    const transferMoney = () => {
        alert("Money Tranfered Sucessfully")
        setModalOpen(!modalopen)
    }
    return (
        <div className="vali">
            <button onClick={openModal}>hey</button>
            
            <Modal isOpen={modalopen} className="modall">
                <div className="modal_head">Spark Foundation</div>
                <div className="modal_content">
                    <div className="actual_con">
                        <label for="amt">
                            Amount:* 
                            <input type="number" name="name" id="amt" required/>
                        </label><br/>
                        <label for="msg">
                            Messsage:
                            <input type="text" name="name" id="msg"/>
                        </label>
                    </div>
                </div>
                <div className="btn_set">
                    <button onClick={() => transferMoney()} className="suc">Transfer</button>
                    <button onClick={openModal} className="dan">Cancel</button>
                </div>
            </Modal>
        </div>
    )
}

export default Validate
