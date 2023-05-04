 var timeleft = 6;
  var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = `${timeleft} seconds left`;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      window.location.replace("TheSecretSocietyHome.html");
    }
  }, 1000);



    
      