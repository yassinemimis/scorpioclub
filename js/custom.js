// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
window.addEventListener('DOMContentLoaded', function() {
  const teamBoxes = document.querySelectorAll('.team_section .box');
  const groupSize = 4;  
  let index = 0;


  function hideMembers() {
 
    teamBoxes.forEach(box => {
      box.classList.remove('visible');
      box.style.display = 'none'; 
    });
  }


  function showGroupMembers() {
    hideMembers();  
    const endIndex = Math.min(index + groupSize, teamBoxes.length); 
    for (let i = index; i < endIndex; i++) {
      teamBoxes[i].classList.add('visible');
      teamBoxes[i].style.display = 'block'; 
    }
    index += groupSize;
    
    if (index >= teamBoxes.length) {
      index = 0;
    }
  }
  showGroupMembers();
  const interval = setInterval(showGroupMembers, 3000);
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxXMOG5R2sbC4jbIYPR0O_5DsrLW_YMgCPlSYux5Zja5J0dqTb-3GsYGBp123_biO_1cg/exec'

  const form = document.forms['contact-form']
  
  form.addEventListener('submit', e => {
    
    e.preventDefault()
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Form is submitted" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })
  const scriptURL1 = 'https://script.google.com/macros/s/AKfycbw19zN00-WaDubaDVGpzItDn_RgNPa0SAdVbf9E61ESCNdyg1zJJ_48xc8awocZVpao/exec';

const form1 = document.forms['subscribe-form'];

form1.addEventListener('submit', e => { 
  e.preventDefault();

  fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
    .then(response => alert("Thank you! Form is submitted"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});
  tsParticles.load("particles-js", {
    fullScreen: { enable: false }, 
    background: {
      color: "transparent"
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#00ffcc"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8
      },
      size: {
        value: { min: 1, max: 3 }
      },
      links: {
        enable: true,
        distance: 250,
        color: "#00bbf0",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "out"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab" 
        },
        onClick: {
          enable: false
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 300,
          links: {
            opacity: 0.1
          }
        }
      }
    },
    detectRetina: true
  });

let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
