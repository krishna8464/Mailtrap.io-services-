let access = sessionStorage.getItem("acive")
let append = document.getElementById('user-signup')
let profile = JSON.parse(sessionStorage.getItem('userdetials'))
let img = profile.avatar


if(access === "true"){
    let changelocation = document.getElementById("changelocation")
    let data = `
    <button id="barr" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img style="width: 30px;height: 30px;" src="https://thumbs.dreamstime.com/z/icon-profile-color-green-icon-profile-color-green-circle-color-dark-green-background-color-white-194702090.jpg"/>
     </button>
    <ul class="dropdown-menu">
     <li><a href="userprofile.html" id="signin" class="dropdown-item" href="#">User Profil</a></li>
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
// don't touch the above code  for the better usage

console.log(profile)
let email = profile.email;
let avatar = profile.avatar;
let username = profile.username;

let appendimage = document.getElementById("userimagechange")
let appendname = document.getElementById('usernamechange')
let appendmail = document.getElementById('usermailchange')
appendimage.src=avatar
appendname.innerText=username
appendmail.innerText=email

let inputname = document.getElementById("changeusername");
let inputmail = document.getElementById("changemail");
let inputavatar = document.getElementById("changeavatar");

inputname.value = username;
inputmail.value = email;
inputavatar.value = avatar;

function cancle(){
    window.location.href="UI.html"
}

async function update(){
    try {
        let inputnam = document.getElementById("changeusername");
        let inputmai = document.getElementById("changemail");
        let inputavata = document.getElementById("changeavatar");
        let userid = sessionStorage.getItem('User-Id')
        if(inputnam.value ==="" || inputmai.value===""||inputavata.value===""){
            let data = `
            <br>
            <div id="makeitright" class="alert alert-warning alert-dismissible fade show" role="alert">
             Please Fill=><strong> All Detials!</strong>  
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
                      `
                  document.querySelector('#alerthere').innerHTML=data

        }else{
            let obj = {
                email : inputmai.value,
              username: inputnam.value,
              avatar: inputavata.value,
            }
          
          let change_pass = await fetch(`https://maletrap-io.onrender.com/user/${userid}`,{
              method:"PATCH",
              headers : {
                  "Content-Type" : "application/json"
              },
              body:JSON.stringify(obj)
          })
          getData();
          if(change_pass.ok){
              
              // console.log("all done")
              let data = `
                      <div id="makeitright" class="alert alert-success d-flex align-items-center" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                  <div>
                  Detials Updated Sucessfully 👍
                  </div>
                  </div>
                      `
                  document.querySelector('#alerthere').innerHTML=data
                  
                  
                 setTimeout(() => {
                  window.location.href="userprofile.html"
                 }, 2000);
          }
        }
        
    } catch (error) {
        console.log("some thing went bad in patchotp")
    }

}

async function getData(){
try {
    let userid = sessionStorage.getItem('User-Id')
  let res = await fetch(`https://maletrap-io.onrender.com/user/${userid}`)
  let out = await res.json();
  sessionStorage.setItem("userdetials",JSON.stringify(out))
} catch (error) {
  console.log("error")
}
}

async function pasupdate(){
    try {
        let prev = document.getElementById("oldpass")
        let newpass = document.getElementById("newpass")
        let conpass = document.getElementById("conpass")
        let prevpass = profile.password
        if(prev.value==="" || newpass.value===""||conpass.value===""){
            let data = `
            <br>
            <div id="makeitright" class="alert alert-warning alert-dismissible fade show" role="alert">
             Please Fill<strong> All Detials!</strong>  
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
                      `
                  document.querySelector('#alertpas').innerHTML=data
        }else if(newpass.value !== conpass.value){
            let data = `
            <br>
            <div id="makeitright" class="alert alert-warning alert-dismissible fade show" role="alert">
             new password is not mathing wiht <strong> confirm password!</strong>  
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
                      `
             document.querySelector('#alertpas').innerHTML=data
           
        }else if(prevpass===newpass.value){
            let data = `
            <br>
            <div id="makeitright" class="alert alert-warning alert-dismissible fade show" role="alert">
             you can't Set the <strong> Previous Password!</strong>  
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
                      `
             document.querySelector('#alertpas').innerHTML=data
        }else{
            let userid = sessionStorage.getItem('User-Id')
            let change_pass = await fetch(`https://maletrap-io.onrender.com/user/${userid}`,{
            method:"PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({ password : newpass.value})
        })
        if(change_pass.ok){
            // console.log("all done")
            let data = `
                    <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                Password Changed Sucessfully 👍
                </div>
                </div>
                <br>
                <br>
                <br>
            
                    `
                    getData()
                document.querySelector('#alertpas').innerHTML=data
               setTimeout(() => {
                window.location.href="userprofile.html"
               }, 2000);
        }
        }
    } catch (error) {
        
    }
}

