import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'

export const tabDataContext = createContext();

function Contexts({children}) {

    const [tableData,setTableData] = useState([])

    useEffect(() => {
        axios.get('http://localhost/bank/fetch.php')
        .then(res => {
            setTableData(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    console.log(tableData)
    return (
        <tabDataContext.Provider value={"vishw"}>
            {children}
        </tabDataContext.Provider>
    )
}


export default Contexts
