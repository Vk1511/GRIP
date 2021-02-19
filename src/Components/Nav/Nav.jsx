import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'

import './Nav.css'

function Nav() {

    const [profile,setProfile] = useState(false)
    const [tabdata,setTabData] = useState('')
    
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

    const [name,setName] = useState()
    const [acc,setAcc] = useState('')
    const [bal,setBal] = useState('')

    // tabdata.filter(iData => iData.id === "1").map((data,key) => {
    //     setName(data.name)
    //     setAcc(data.acc)
    //     setBal(data.bal)
    //     return(
    //         <h1>hey</h1>
    //     )
    // })
    
    return (
        <>
        <div className="navbar">
            <Link to="/" className="nav_brand"> Spark Foundation</Link>
            <div className="profile_logo" >
                <span className="flx" onClick={() => setProfile(!profile)}><i className="fas fa-user-circle logo" ><span className="txt">Vishw Kadu</span></i></span>
            </div>
        </div>

        <div className="m_f">
        <div className={`${profile ? 'menu' : 'hide'}`}>    
            <span className="menu_head">
                <h3>Vishw Kadu</h3>
                <h4>10256</h4>
            </span>
            <ul>
                <li><i className="fas fa-edit l"></i>edit profile</li><hr />
                <li><i className="fas fa-history l"></i>history</li><hr />
                <li><i className="fas fa-wallet l"></i>balance -- 10000</li><hr />
                <li><i className="fas fa-sign-out-alt l"></i>logout</li>
            </ul>
        </div></div>
        </>
    )
}

export default Nav
