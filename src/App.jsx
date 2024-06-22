import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div style={{
        backgroundColor: 'darkgreen', 
        border: 2, borderRadius: 10, 
        textAlign: 'center', 
        margin: 10,
        padding: 10,
        marginTop: 10
        }}>
        <p style={{fontSize: 150, color: 'white' }}>
          hello, HELLO
          </p>
        <button style={{
          backgroundColor: 'white', 
          color: 'darkgreen', 
          margin: 10, 
          padding: 10,
          width: 100,
          height: 70,
          fontSize: 15,
          

          }}>
          Let's Talk!
        </button>
      </div>
    </>
  )
}

export default App
