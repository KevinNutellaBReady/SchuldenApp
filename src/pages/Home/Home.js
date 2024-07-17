import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class HomePage extends Component {

    render() {
        
     return(
        <div className="home-container">
        <div className="hero-section">
          <h1>Schuldenapp</h1>
          <p>Verwalten Sie Ihre Schulden einfach und effizient.</p>
          <Link to="/login"><button className="cta-button">Loslegen</button> </Link>
        </div>
      </div>
    )
}

}

export default HomePage;