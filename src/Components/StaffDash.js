import React, {useState} from "react";
import StaffLoginForm from "./StaffLoginForm";
import fdmLogo from '../assets/fdm_Logo2.png';
import Particles from "react-tsparticles";

function StaffDash({registry}) {

  const [staff, setStaff] = useState(null);

  const login = (details) => {
    const allStaff = registry.getAllStaff();
    for(let i = 0; i < allStaff.length; i++){
      if (details.ID === allStaff[i].getID() && details.password === allStaff[i].getPassword()){
        setStaff(allStaff[i])
        break;
      }
    }
    document.getElementById("submit").value = "Incorrect Details. Try Again"
  }

  const logout = () => {
      setStaff(null);
  }

  return (
    <div className="StaffDash">
      {(staff !== null) ? (
        <div>
          <h1>Welcome, {staff.getFullName()}</h1>
          <button>Create Course</button>
          <h2>List of Courses</h2>
          <table id="Course Table">
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Course Length</th>
              <th>View Modules</th>
              <th>Delete Course</th>
            </tr>
          </table>
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
                <img className="logo" src={fdmLogo} alt="" />
                <h2>Staff Login</h2>
            </div>
        <StaffLoginForm Login={login}></StaffLoginForm>
        </div>
      )}
    </div>
  );
}

export default StaffDash;