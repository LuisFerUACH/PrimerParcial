var ban = new Array(false, false, false, false, false, false);
var tiempos = new Array(0, 0, 0, 0, 0, 0);

//Mesa 1
const mesa1 = () => {
  let mesa = document.getElementById("mesa_billar1");
  if (mesa.src.match('mesa_billarOff')) {
    mesa.src = "./img/mesa_billarOn.jpg"
  } else {
    mesa.src = "./img/mesa_billarOff.jpg"
  }

  if (!ban[0]) {
    tiempos[0] = 0;
    document.getElementById("total1").innerHTML ="";
    document.getElementById("final1").innerHTML = "";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("inicio1").innerHTML = hour + ":" + min + ":" + sec;
    ban[0] = true;
    startTime();
  } else {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("final1").innerHTML = hour + ":" + min + ":" + sec;
    ban[0] = false;
  }

  function startTime() {
    tiempos[0]++;
    if (ban[0]) {
      document.getElementById("total1").innerHTML = "$" + (tiempos[0] * 50) / 3600;
      var t = setTimeout(startTime, 1000);
    }
  }
}

//Mesa 2
const mesa2 = () => {
  let mesa = document.getElementById("mesa_billar2");
  if (mesa.src.match('mesa_billarOff')) {
    mesa.src = "./img/mesa_billarOn.jpg"
  } else {
    mesa.src = "./img/mesa_billarOff.jpg"
  }

  if (!ban[1]) {
    tiempos[1] = 0;
    document.getElementById("total2").innerHTML ="";
    document.getElementById("final2").innerHTML = "";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("inicio2").innerHTML = hour + ":" + min + ":" + sec;
    ban[1] = true;
    startTime();
  } else {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("final2").innerHTML = hour + ":" + min + ":" + sec;
    ban[1] = false;
  }

  function startTime() {
    tiempos[1]++;
    if (ban[1]) {
      document.getElementById("total2").innerHTML = "$" + (tiempos[1] * 50) / 3600;
      var t = setTimeout(startTime, 1000);
    }
  }
}

//Mesa 3
const mesa3 = () => {
  let mesa = document.getElementById("mesa_billar3");
  if (mesa.src.match('mesa_billarOff')) {
    mesa.src = "./img/mesa_billarOn.jpg"
  } else {
    mesa.src = "./img/mesa_billarOff.jpg"
  }

  if (!ban[2]) {
    tiempos[2] = 0;
    document.getElementById("total3").innerHTML ="";
    document.getElementById("final3").innerHTML = "";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("inicio3").innerHTML = hour + ":" + min + ":" + sec;
    ban[2] = true;
    startTime();
  } else {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("final3").innerHTML = hour + ":" + min + ":" + sec;
    ban[2] = false;
  }

  function startTime() {
    tiempos[2]++;
    if (ban[2]) {
      document.getElementById("total3").innerHTML = "$" + (tiempos[2] * 50) / 3600;
      var t = setTimeout(startTime, 1000);
    }
  }
}

//Mesa 4
const mesa4 = () => {
  let mesa = document.getElementById("mesa_billar4");
  if (mesa.src.match('mesa_billarOff')) {
    mesa.src = "./img/mesa_billarOn.jpg"
  } else {
    mesa.src = "./img/mesa_billarOff.jpg"
  }

  if (!ban[3]) {
    tiempos[3] = 0;
    document.getElementById("total4").innerHTML ="";
    document.getElementById("final4").innerHTML = "";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("inicio4").innerHTML = hour + ":" + min + ":" + sec;
    ban[3] = true;
    startTime();
  } else {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("final4").innerHTML = hour + ":" + min + ":" + sec;
    ban[3] = false;
  }

  function startTime() {
    tiempos[3]++;
    if (ban[3]) {
      document.getElementById("total4").innerHTML = "$" + (tiempos[3] * 50) / 3600;
      var t = setTimeout(startTime, 1000);
    }
  }
}

//Mesa 5
const mesa5 = () => {
  let mesa = document.getElementById("mesa_billar5");
  if (mesa.src.match('mesa_billarOff')) {
    mesa.src = "./img/mesa_billarOn.jpg"
  } else {
    mesa.src = "./img/mesa_billarOff.jpg"
  }

  if (!ban[4]) {
    tiempos[4] = 0;
    document.getElementById("total5").innerHTML ="";
    document.getElementById("final5").innerHTML = "";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("inicio5").innerHTML = hour + ":" + min + ":" + sec;
    ban[4] = true;
    startTime();
  } else {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("final5").innerHTML = hour + ":" + min + ":" + sec;
    ban[4] = false;
  }

  function startTime() {
    tiempos[4]++;
    if (ban[4]) {
      document.getElementById("total5").innerHTML = "$" + (tiempos[4] * 50) / 3600;
      var t = setTimeout(startTime, 1000);
    }
  }
}

//Mesa 6
const mesa6 = () => {
  let mesa = document.getElementById("mesa_billar6");
  if (mesa.src.match('mesa_billarOff')) {
    mesa.src = "./img/mesa_billarOn.jpg"
  } else {
    mesa.src = "./img/mesa_billarOff.jpg"
  }

  if (!ban[5]) {
    tiempos[5] = 0;
    document.getElementById("total5").innerHTML ="";
    document.getElementById("final5").innerHTML = "";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("inicio6").innerHTML = hour + ":" + min + ":" + sec;
    ban[5] = true;
    startTime();
  } else {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.getElementById("final6").innerHTML = hour + ":" + min + ":" + sec;
    ban[5] = false;
  }

  function startTime() {
    tiempos[5]++;
    if (ban[5]) {
      document.getElementById("total6").innerHTML = "$" + (tiempos[5] * 50) / 3600;
      var t = setTimeout(startTime, 1000);
    }
  }
}
