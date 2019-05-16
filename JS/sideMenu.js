"use scrict"
function openNav() {
  let width = window.innerWidth;
  if(width < 768){
    //Mobile/Tablet width menu
    document.getElementById("mySideNav").style.width = "70%";
  }else{
    //Desktop width menu
    document.getElementById("mySideNav").style.width = "50%";
  }
}


function closeNav() {
  document.getElementById("mySideNav").style.width = "0%";
}






