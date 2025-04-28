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
    const groupSize = 4;  // عدد الأعضاء في كل مجموعة
    let index = 0;
  
    // دالة لإخفاء الأعضاء الحاليين قبل عرض المجموعة التالية
    function hideMembers() {
      // إخفاء جميع الأعضاء الذين تم عرضهم سابقاً
      teamBoxes.forEach(box => {
        box.classList.remove('visible');
        box.style.display = 'none';  // إخفاء العنصر
      });
    }
  
    // دالة لعرض الأعضاء في مجموعات
    function showGroupMembers() {
      hideMembers();  // إخفاء الأعضاء الحاليين
      const endIndex = Math.min(index + groupSize, teamBoxes.length); // التأكد من عدم تجاوز العدد الإجمالي
      for (let i = index; i < endIndex; i++) {
        teamBoxes[i].classList.add('visible');
        teamBoxes[i].style.display = 'block';  // عرض العنصر
      }
      index += groupSize;
  
      // إذا تم عرض جميع الأعضاء، نعيد العملية من البداية
      if (index >= teamBoxes.length) {
        index = 0;  // إعادة التكرار من أول الأعضاء
      }
    }
  
    // عرض المجموعة الأولى فور تحميل الصفحة
    showGroupMembers();
  
    // تعيين فترة زمنية لعرض كل مجموعة بشكل لانهائي
    const interval = setInterval(showGroupMembers, 3000); // 5000 ميلي ثانية (5 ثواني)
  });
  const scriptURL =                       
  "https://script.google.com/macros/s/AKfycbyuz5KrsfDveeSguHPQUyY2awF9iKS4kuTF4dIy2CC-QR8fSXDgT9SLkavyLbvdX5Fg6Q/exec";
  const form = document.forms["subscribeForm"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        swal("Done", "Submitted Successfully.", "success");
      })
      .catch((error) => {
        swal("Error", "Something went wrong. please try again!", "error");
      });
  });
  tsParticles.load("particles-js", {
    fullScreen: { enable: false }, // نستخدمه داخل العنصر فقط مش كل الشاشة
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
        distance: 250, /* ⭐ زيادة المسافة لكي تكون دائما متصلة */
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
          mode: "grab" // لما تمرر الماوس يشد الخطوط شوي
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
