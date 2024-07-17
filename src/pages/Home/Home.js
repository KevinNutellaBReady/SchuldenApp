import { Component, useState } from 'react';
import './Home.css'

class RenderHome extends Component {


    render() {
        function handleclick() {
        }
        
     return(
        <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    )
}

}

export default RenderHome;