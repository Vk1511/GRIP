import React,{useState,useEffect} from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import './Reciver.css'

function Reciver() {
    
    const [tabdata,setTabData] = useState('');
    var datatab = [...tabdata]
    useEffect(() => {
        axios.get('http://localhost/bank/fetch.php')
        .then(res => {
            // console.log(res)
            setTabData(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    console.log(tabdata)

    const [modalopen,setModalOpen] = useState(false)
    const [amt,setAmt] = useState('')
    const [msg,setMsg] = useState(null)

    // const [aname,setAname] = useState(null)
    const [acc,setAcc] = useState('');
    const [mobile,setMobile] = useState('');
    const [mailid,setMailid] = useState('');
    const [addr,setAddr] = useState('');
    const [bal,setBal] = useState('')
    const [sender,setSender] = useState('')
    

    const sbal = datatab.filter(catd => catd.id === "1").map((data,key) => {
        console.log(data.bal)
        return(
            <h1>hey</h1>
        )
    })

    const DropList = datatab.filter(catd => catd.id !== "1").map((data,key) => {
        return(
            <option value={data.name} key={key}>{data.name}</option>
        )
    })

    const openModal = () => {
        if(acc === "0" || acc === ''){
            alert("Please Select Valid Account")
        }
        else{
        setModalOpen(!modalopen)
        }
    }

    const transferMoney = () => {
        if(amt === '' && acc === "0"){
            alert("Please Enter Amount")
        }
        else{
            var r_bal = parseInt(amt)+parseInt(bal)
            var senderAcc = 10256
            var obj = {acc_no : acc, bal: r_bal, sacc_no : senderAcc, d_amt : amt}
            console.log(obj)
            axios.post('http://localhost/bank/update.php',obj)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            setModalOpen(!modalopen)
            alert("Money Tranfered Sucessfully")
        }     
    }

    const handleChange = (selectedData) => {
        tabdata.filter(iData => iData.name === selectedData).map((data,key) => {
            // setAname(data.name)
            setAcc(data.acc_no)
            setMobile(data.mo_no)
            setMailid(data.mail)
            setAddr(data.add)
            setBal(data.bal)
            return(
                <h1 key={key}>hey</h1>
            )
        })
    }    
    
    return (
        <div className="sender_details">
            <fieldset>
                <legend>Receiver's Details</legend>
                <ul>
                    <li><span className="field">Name: </span><span className="data"><select onChange={(event) => handleChange(event.target.value)}>{DropList}</select></span></li>  
                    <li><span className="field">Account No: </span><span className="data">{acc}</span></li>
                    <li><span className="field">Phone No: </span><span className="data">{mobile}</span></li>
                    <li><span className="field">Email: </span><span className="data">{mailid}</span></li>
                    <li><span className="field">Address: </span><span className="data">{addr}</span></li>
                </ul>
                <div className="start_btn"><button className="btn" onClick={openModal}>Proceed</button></div>

                <Modal isOpen={modalopen} className="modall" ariaHideApp={false}>
                    <div className="modal_head">Spark Foundation</div>
                    <div className="modal_content">
                        <div className="actual_con">
                            <label >
                                Amount:* 
                                <input autocomplete="off" type="number" name="name" id="amt" required onChange={(event) => {setAmt(event.target.value)}}/>
                            </label><br/>
                            <label >
                                Messsage:
                                <input autocomplete="off" type="text" name="name" id="msg" onChange={(event) => {setMsg(event.target.value)}}/>
                            </label>
                        </div>
                    </div>
                    <div className="btn_set">
                        <button onClick={() => transferMoney()} className="suc">Transfer</button>
                        <button onClick={openModal} className="dan">Cancel</button>
                    </div>
                </Modal>
            </fieldset>
        </div>
    )
    
}

export default Reciver
