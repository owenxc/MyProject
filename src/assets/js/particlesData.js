export const Particles_Data = [
    // 样式一
    {
        "particles": {
          "number": {
            "value": 300,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 3,
              "size_min": 1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 1,
              "rotateY": 100
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 100,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 30
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    },
    //样式二
    {
        "particles": {
          "number": {
            "value": 160, 
            "density": {
              "enable": true, 
              "value_area": 800 
            }
          },
          "color": {
            "value": "#00aeff" 
          },
          "shape": {
            "type": "circle", 
            "stroke": {
              "width": 0,
              "color": "#362cff" 
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
            "value": 1,
            "random": true, 
            "anim": {
              "enable": true,
              "speed": 1, 
              "opacity_min": 0, 
              "sync": true
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false, 
              "speed": 4, 
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false, 
            "distance": 150, 
            "color": "#ffffff", 
            "opacity": 0.4, 
            "width": 1 
          },
          "move": {
            "enable": true, 
            "speed": 1, 
            "direction": "none", 
            "random": true, 
            "straight": false, 
            "out_mode": "out", 
            "bounce": false,
            "attract": {
              "enable": false, 
              "rotateX": 600, 
              "rotateY": 600 
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
              "enable": false,
              "mode": "repulse" 
            },
            "resize": true 
          },
          "modes": {
            "grab": {
              "distance": 100, 
              "line_linked": {
                "opacity": 0.8 
              }
            },
            "bubble": {
              "distance": 250, 
              "size": 4, 
              "duration": 2,
              "opacity": 1, 
              "speed": 3
            },
            "repulse": {
              "distance": 400, 
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
]