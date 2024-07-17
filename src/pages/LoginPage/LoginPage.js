import { Component, useState } from 'react';
import './LoginPage.css'

class LoginPage extends Component {
    render() {
        return(
            <div className="login-container">
            <div className="login-box">
              <h2>Anmelden</h2>
              <form>
                <div className="input-group">
                  <label htmlFor="username">Benutzername</label>
                  <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Passwort</label>
                  <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-button">Einloggen</button>
              </form>
            </div>
          </div>
        );
    }

}

export default LoginPage;