import React, { useState } from 'react'
import './SignUp.css'


function SignUp() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const [thumbnail, setThumbNail] = useState(null);
  const [thumbnailError, setThumbNailError] = useState(null)

  const handleFileChange = (e) =>{
    setThumbNail(null)
    let selected = e.target.files[0]
    console.log(selected)
    if(!selected){
      setThumbNailError('Please select a file')
      return
    }
    if(!selected?.type?.includes('image')){
      setThumbNailError('Selected file must be an image')
      return
    }
    if(selected.size > 500000){
      setThumbNailError('Image File size must be less than 500kb')
      return
    }

    setThumbNailError(null)
    setThumbNail(selected)
    console.log('thumbnail updated')
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(email,password)
  }

  return (
    <form className='auth-form'
    onSubmit={handleSubmit}
    >
      <h2>Sign up</h2>
      <label>
      <span>email:</span>
      <input
      required
      type='email'
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      />
      </label>
      <label>
      <span>password:</span>
      <input
      required
      type='password'
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      />
      </label>
      <label>
      <span>Display Name:</span>
      <input
      required
      type='text'
      onChange={(e)=>setDisplayName(e.target.value)}
      value={displayName}
      />
      </label>
      <label>
      <span>profile thumbnail:</span>
      <input
      required
      type='file'
      onChange={handleFileChange}
      />
      {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <button className='btn'>Sign up</button>
    </form>
  )
}

export default SignUp