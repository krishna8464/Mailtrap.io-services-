let existingdata = [];
async function getData(){
try {
  let res = await fetch("http://localhost:3000/user")
  let out = await res.json();
  existingdata = out
  console.log(out)
} catch (error) {
  console.log("error")
}
}
getData();


let cont = document.getElementById("appendhere")


function loginreq(){
    let data = `
    <br>
    <div id="doit"><input placeholder="Password" id = "pass" type="password"></div>
    <div id="signupbtn"><button onclick="loginbtn()">Log In</button></div>
    `
    cont.innerHTML=data;
}

async function loginbtn(){
    let emailbox = document.getElementById('mail_inbox')
    let passbox = document.getElementById("pass")
    
}