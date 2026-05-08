import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    // We fetch from our Node server (Port 5000)
  fetch("https://sis-hackathon-2026.onrender.com/api/test")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error: Backend not reached!"))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hackathon Connection Test</h1>
      <div className="card">
        <p>Backend says: <strong>{message}</strong></p>
      </div>
    </div>
  )
}

export default App
