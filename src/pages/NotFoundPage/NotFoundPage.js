import * as react from 'react';
import './NotFoundPage.css'

class NotFoundPage extends react.Component {

    render() {
        return(
            <div className="notfound-container">
            <div className="notfound-content">
            <img src="https://th.bing.com/th/id/OIG4.y2UVWgFboOGeW9GQQT_p?pid=ImgGn" alt="Logo" id='logoimg' width={250} height={250}/>
              <h1>404</h1>
              <p>Seite nicht gefunden</p>
              <a href="/" className="home-button">Zur Startseite</a>
            </div>
          </div>
        );
    }

}

export default NotFoundPage;