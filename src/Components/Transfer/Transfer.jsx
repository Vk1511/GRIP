import React,{useState,useEffect} from 'react'
import Sender from '../Sender/Sender'
import Reciver from '../Reciver/Reciver'
import axios from 'axios'

function Transfer() {

    const [tabData,setTabData] = useState([])

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
    
    return (
        <>
          <Sender tableData={tabData}/>
          <Reciver />  
        </>
    )
}

export default Transfer
