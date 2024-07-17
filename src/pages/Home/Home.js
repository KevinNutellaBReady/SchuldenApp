import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class HomePage extends Component {

    render() {
        
     return(
        <body>
        <div className="home-container">
        <img src="https://th.bing.com/th/id/OIG4.y2UVWgFboOGeW9GQQT_p?pid=ImgGn" alt="Logo" id='logoimg' width={250} height={250}/>
        <div className="hero-section">
          <h1>Schuldenapp</h1>
          <p>Verwalten Sie Ihre Schulden einfach und effizient.</p>
          <button className="cta-button">Loslegen</button>
        </div>
      </div>
      </body>
    )
}

}

export default HomePage;