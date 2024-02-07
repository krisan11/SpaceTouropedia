const first = document.getElementById("01");
const second = document.getElementById("02");
const third = document.getElementById("03");
const fourth = document.getElementById("04");
const vehicle = document.getElementById('vehicle');
const shuttle = document.getElementById('shuttle');
const space_port = document.getElementById('space-port');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
const hurley = document.getElementById('hurley');
const mark = document.getElementById('mark');
const victor = document.getElementById('victor');
const ansari = document.getElementById('ansari');


if (vehicle && shuttle && space_port) {
    vehicle.addEventListener('click', () => {
        vehicle.style.backgroundColor = "white";
        vehicle.style.color = "black";
        vehicle.style.border = "none";
        shuttle.style.background = "none";
        shuttle.style.color = "white";
        shuttle.style.border = "1px solid rgb(70, 69, 69)";
        space_port.style.background = "none";
        space_port.style.color = "white";
        space_port.style.border = "1px solid rgb(70, 69, 69)";
    });
    shuttle.addEventListener('click', () => {
        shuttle.style.backgroundColor = "white";
        shuttle.style.color = "black";
        shuttle.style.border = "none";
        vehicle.style.background = "none";
        vehicle.style.color = "white";
        vehicle.style.border = "1px solid rgb(70, 69, 69)";
        space_port.style.background = "none";
        space_port.style.color = "white";
        space_port.style.border = "1px solid rgb(70, 69, 69)";
    });
    space_port.addEventListener('click', () => {
        console.log("gelo");
        space_port.style.backgroundColor = "white";
        space_port.style.color = "black";
        space_port.style.border = "none";
        vehicle.style.background = "none";
        vehicle.style.color = "white";
        vehicle.style.border = "1px solid rgb(70, 69, 69)";
        shuttle.style.background = "none";
        shuttle.style.color = "white";
        shuttle.style.border = "1px solid rgb(70, 69, 69)";
    });
}
if (moon && mars && europa && titan) {
    moon.addEventListener('click', () => {
        document.getElementById('m1').style.visibility = 'visible';
        document.getElementById('m2').style.visibility = 'hidden';
        document.getElementById('m3').style.visibility = 'hidden';
        document.getElementById('m4').style.visibility = 'hidden';
    });
    mars.addEventListener('click', () => {
        document.getElementById('m1').style.visibility = 'hidden';
        document.getElementById('m2').style.visibility = 'visible';
        document.getElementById('m3').style.visibility = 'hidden';
        document.getElementById('m4').style.visibility = 'hidden';
    });
    europa.addEventListener('click', () => {
        document.getElementById('m1').style.visibility = 'hidden';
        document.getElementById('m2').style.visibility = 'hidden';
        document.getElementById('m3').style.visibility = 'visible';
        document.getElementById('m4').style.visibility = 'hidden';
    });
    titan.addEventListener('click', () => {
        document.getElementById('m1').style.visibility = 'hidden';
        document.getElementById('m2').style.visibility = 'hidden';
        document.getElementById('m3').style.visibility = 'hidden';
        document.getElementById('m4').style.visibility = 'visible';
    });
}
if (hurley && mark && victor && ansari) {
    hurley.addEventListener('click', () => {
        hurley.style.opacity="1";
        victor.style.opacity="0.2";
        mark.style.opacity="0.2";
        ansari.style.opacity="0.2";
    });
    mark.addEventListener('click', () => {
        hurley.style.opacity="0.2";
        victor.style.opacity="0.2";
        mark.style.opacity="1";
        ansari.style.opacity="0.2";
    });
    victor.addEventListener('click', () => {
        hurley.style.opacity="0.2";
        victor.style.opacity="1";
        mark.style.opacity="0.2";
        ansari.style.opacity="0.2";
    });
    ansari.addEventListener('click', () => {
        hurley.style.opacity="0.2";
        victor.style.opacity="0.2";
        mark.style.opacity="0.2";
        ansari.style.opacity="1";
    });
}
first.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        document.getElementById('c1').style.visibility = 'visible';
        document.getElementById('c2').style.visibility = 'hidden';
        document.getElementById('c3').style.visibility = 'hidden';
        document.getElementById('c4').style.visibility = 'hidden';
    }
});
second.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        document.getElementById('c1').style.visibility = 'hidden';
        document.getElementById('c2').style.visibility = 'visible';
        document.getElementById('c3').style.visibility = 'hidden';
        document.getElementById('c4').style.visibility = 'hidden';
    }
});
third.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        document.getElementById('c1').style.visibility = 'hidden';
        document.getElementById('c2').style.visibility = 'hidden';
        document.getElementById('c3').style.visibility = 'visible';
        document.getElementById('c4').style.visibility = 'hidden';
    }
});
fourth.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        document.getElementById('c1').style.visibility = 'hidden';
        document.getElementById('c2').style.visibility = 'hidden';
        document.getElementById('c3').style.visibility = 'hidden';
        document.getElementById('c4').style.visibility = 'visible';
    }
});