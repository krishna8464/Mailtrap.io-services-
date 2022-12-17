let access = sessionStorage.getItem("acive")
let append = document.getElementById('user-signup')
let profile = JSON.parse(sessionStorage.getItem('userdetials'))
let img = profile.avatar
console.log(img)

if(access === "true"){
    let changelocation = document.getElementById("changelocation")
    let data = `
    <button id="barr" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img style="width: 30px;height: 30px;" src=${img}/>
     </button>
    <ul class="dropdown-menu">
     <li><a href="userprofile.html" id="signin" class="dropdown-item" href="#"><b>User Profil</b></a></li>
     <li><a href="index.html" onclick="Logout()"  class="dropdown-item" href="#">Log Out</a></li>
     <li><a href="feedback.html" id="logout" class="dropdown-item" href="#">Feed Back</a></li>
     </ul>
    `
    append.innerHTML=data
    changelocation.href="UI.html"
}

function Logout(){
    let str = false;
    sessionStorage.setItem("acive",str)
    alert("Logout sucessful")
    sessionStorage.clear()
    window.location.href="index.html"
}