import React from 'react'
// import "./Modal.css";

function Modala({ closeModal }) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={ () => closeModal(false)}>X</button>
            <div className='title'>
                <h1>Does this work?</h1>
            </div>
            <div className='body'>
                <p>lorem ipsulm</p>
            </div>
        </div>
    </div>
  )
}

export default Modala