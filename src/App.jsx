
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import { useRef } from 'react';

function App() {

  const containerRef = useRef()

  const toggleActive = () => {
    containerRef.current.classList.toggle('active')
      
  }
 

  return (
    <>
      <div ref={containerRef} className="container">
        <div className="form-container sign-up">
            <SignUp/>
          </div>
          <div className="form-container sign-in">
            <SignIn/>
          </div>
          <div className="toggle-container">

            <div className="toggle">
              <div className="toggle-panel toggle-left">
                  <h1>Welcome back</h1>
                  <p>Enter personal details to use all of site features</p>
                  <button onClick={() => toggleActive()} id='login' className="hidden">Sign In</button>
              </div>

              <div className="toggle-panel toggle-right">
                  <h1>Hello, friend</h1>
                  <p>Regiter with personal details to use all of site features</p>
                  <button onClick={() => toggleActive()} id='register' className="hidden">Sign up</button>
              </div>
            </div>

          </div>
          
      </div>  


    </>
  )
}

export default App
