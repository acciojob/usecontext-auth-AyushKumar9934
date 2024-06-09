import React, { useContext } from 'react'
import { AuthContext } from './App'

const Auth = () => {
    const  [isChecked,setIsChecked]=useContext(AuthContext)
    function handleChange(e){
        setIsChecked(e.target.checked)
    }
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <label>
    <input type="checkbox" onChange={handleChange} />
    I'am not a robot
</label>

    </div>
  )
}

export default Auth