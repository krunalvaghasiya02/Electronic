function down(){
  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
  clicksound.play();
  let a=document.getElementById("slidedown")
  a.classList.toggle("active")
}
