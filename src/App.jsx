import axios from 'axios'
import { useState } from 'react'

import './App.css'

function App() {
  const [finder,setFinder] = useState(null);
  const [inputField,setInputField] = useState('');
  const [error,setError] = useState(null)

  function fetchingData(){
      setError(null)
    axios.get(`https://api.github.com/users/${inputField}`)
    .then((response) => {
       console.log(response.data);
      setFinder(response.data)
      setInputField("");
    })
    .catch(() => {
      setError("user not found or network erro")
      setFinder(null)
    })
  }
 function inputSender(e){
  setInputField(e.target.value);
  
 }
  return (
    <>
    <h1>Welcome to Github Finder</h1>
      <input onChange={inputSender}  value={inputField}/>
      <button onClick={fetchingData}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      { finder &&
        <>
          <div className="combine">
             <img src={finder.avatar_url} alt={finder.login}width={100} height={100}  /> 
          <p className='name'>User Name:{finder.name}</p>
       
          </div>
        
        <p className='bio'>Bio: {finder.bio}</p>
        <p className='repo'>Repository: {finder.public_repos}</p>
      </>
      }
      </>
      )
      }
      
export default App
