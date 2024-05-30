import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div style={{
        backgroundColor: '#FFEA00', 
        border: 2, borderRadius: 10, 
        textAlign: 'center', 
        margin: 10,
        padding: 10,
        marginTop: 10
        }}>
        <p style={{fontSize: 200}}>
          It's ME!
          </p>
        <button style={{
          backgroundColor: 'black', 
          color: '#FFEA00', 
          margin: 10, 
          padding: 10,
          width: 100,
          height: 70,
          fontSize: 20,
          

          }}>
          Click Here
        </button>
      </div>
    </>
  )
}

export default App
