import { useState } from 'react'
import './App.css'
import Avatar from './Avatar'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env.VITE_PUBLIC_URL)
  return (
    <>
      <h1>Avatar List</h1>
      <div className="mainContent">
        <button onClick={() => setCount((count) => count + 1)}>
          created {count} avatars
        </button>
        <div>
          <Avatar/>
        </div>
      </div>
      <p className="read-the-docs">
        Click to regenerate some avatars.
      </p>
    </>
  )
}

export default App
