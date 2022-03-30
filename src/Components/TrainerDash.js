import React, {useState} from "react";
import TrainerLoginForm from "./TrainerLoginForm";
import fdmLogo from '../assets/fdm_Logo2.png';
import Particles from "react-tsparticles";

function TrainerDash({registry}) {

  const [trainer, setTrainer] = useState(null);

  const login = (details) => {
    const allTrainers = registry.getAllTrainers();
    for(let i = 0; i < allTrainers.length; i++){
      if (details.email == allTrainers[i].getEmail() && details.password == allTrainers[i].getPassword()){
        setTrainer(allTrainers[i]);
        break;
      }
    }
    document.getElementById("submit").value = "Incorrect Details. Try Again"
  }

  const logout = () => {
      setTrainer(null);
  }

  return (
    <div className="TrainerDash">
      {(trainer !== null) ? (
        <div>
          <h1>Welcome, {trainer.getFullName()}</h1>
          <button>View Timetable</button>  
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
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
            <img className="logo" src={fdmLogo} alt="Image Failed To Load" />
            <h1>Trainer Dashboard</h1>
          </div>
        <TrainerLoginForm Login={login}></TrainerLoginForm>
        </div>
      )}
    </div>
  );
}

export default TrainerDash;