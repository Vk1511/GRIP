import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <><h2>Intern Name: Vishw Kadu</h2>
        <div className="home">
        <div className="home_container">
            <div className="head">Welcome To The Money Transfer Application</div>
            <div className="home_content">
                <ul>
                <span className="rules">Rules:-</span>
                    <li>This Is a React Web App.</li>
                    <li>For Better Experience Open this Site In Your Desktop Or Tablet.</li>
                    <li>Once You Click The Start, Transfer Process Begins.</li>
                    <li>On Next Page, Select The Reciver's data.</li>
                    <li>Once You Click The Transfer Button, Money Will Be Tranfer To the Receiver's Acount.</li>
                    <li>You Can Check The History In Your Profile</li>
                </ul>
            </div>
            <div className="start_btn"><Link to="/transfer"><button className="btn">Start</button></Link></div>
        </div>
        </div></>
    )
}

export default Home
