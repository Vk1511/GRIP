import React from 'react'
import './Sender.css'

function Sender({tableData}) {
    
    return (
        <div className="sender_details">
            <fieldset>
                <legend>Sender's Details</legend>
                {
                    tableData.filter(catd => catd.id === "1").map((d,key) => {
                        return(
                            <ul key={key}>
                                <li><span className="field">Name: </span> <span className="data">{d.name}</span></li>
                                <li><span className="field">Account No: </span><span className="data">{d.acc_no}</span></li>
                                <li><span className="field">Phone No: </span><span className="data">{d.mo_no}</span></li>
                                <li><span className="field">Email: </span><span className="data">{d.mail}</span></li>
                                <li><span className="field">Address: </span><span className="data">{d.add}</span></li>
                            </ul>
                        )
                    })
                }
                
            </fieldset>
        </div>
    )
}

export default Sender
