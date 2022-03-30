import fdmLogo from '../assets/fdm_Logo2.png'
import Particles from 'react-tsparticles';
import { useState } from 'react';

const LoginPage = ({ userType, changeUserType }) => {

  const [usd, setUsd] = useState(userType);
  

  const userTypeHandler = e => {

    if(usd === "T"){
      setUsd("S")
    }
    else{
      setUsd("T")
    }
    changeUserType(usd);
  }

    return (
        <div className="loginPageStuff">
            <Particles 
            options={{
                "particles": {
                    "number": {
                      "value": 320,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "polygon",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.49,
                      "random": false,
                      "anim": {
                        "enable": true,
                        "speed": 0.2,
                        "opacity_min": 0,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 2,
                      "random": true,
                      "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 150
                    },
                    "move": {
                      "enable": true,
                      "speed": 0.2,
                      "random": true,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 83.91608391608392,
                        "size": 1,
                        "duration": 3,
                        "opacity": 1,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }
            }
            />
            <div className="logoSec">
                <img className="logo" src={fdmLogo} alt="" />
                <h2>Training and Scheduling</h2>
                <h3>{usd}</h3>
            </div>
            <div className="form-container">
            <form>
                <div className="form">
                    <div className="input-container">
                        <input type="email" name="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="input-container">
                        <input type="password" name="pass" required />
                        <span></span>
                        <label>Password: </label>
                    </div>
                    <div className="button-container">
                        <input className="submit-button" type="submit" value="Login" />
                    </div>
                </div>
            </form>
            <button onClick={userTypeHandler}>change</button>
        </div>
        </div>
    )
}

export default LoginPage