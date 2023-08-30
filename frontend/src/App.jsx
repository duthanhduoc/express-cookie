import './App.css'
import http from './http'

function App() {
  const login = async () => {
    const data = await http.post('/login', {})
  }
  const getProile = async () => {
    const data = await http.get('/me')
  }
  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={getProile}>Get Profile</button>
    </>
  )
}

export default App
