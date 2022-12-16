let existingdata = [];
async function getData(){
try {
  let res = await fetch("http://localhost:3000/user")
  let out = await res.json();
  existingdata = out
} catch (error) {
  console.log("error")
}
}
getData();



let cont = document.getElementById("appendhere")
function signup(){
data = `
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="mailvalue" class="form-control" id="exampleFormControlInput1" >
</div>
 
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">User Name</label>
  <input type="text" class="username" class="form-control" id="exampleFormControlInput1" >
</div>
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="pasvalue" class="form-control" id="exampleFormControlInput1">
</div>
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Confirmation</label>
  <input type="password" class="conpasvalue" class="form-control" id="exampleFormControlInput1">
</div>


<div id="signupbtn"><button onclick="signupbtn()">Sign Up</button></div>
<div id="alert"></div>
`
cont.innerHTML=data
}
// class="form-control"
//  id="exampleFormControlInput1"

async function signupbtn(){
    let email = document.querySelector('.mailvalue')
    let username = document.querySelector(".username")
    let password = document.querySelector('.pasvalue')
    let conpass = document.querySelector('.conpasvalue')
    let status = false;
    existingdata.forEach((item)=>{
      if(item.email === email.value || item.username === username.value){
        status=true;
      }
    })
    if(email.value==="" || password.value==="" || conpass.value==="" ||username.value===""){
        let data=`
        <br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Please Enter ALL <strong>Detials!</strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
          email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
        document.querySelector('#alert').innerHTML=data
        // console.log("null")
    }
    else if(password.value !== conpass.value){
        // alert('Please Enter Correct Confirmation password')
        let data = `
        <br>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
           Please Enter Correct <strong>Confirmation password!</strong>  
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
        document.querySelector('#alert').innerHTML=data
    
     }else{
      let userObj={
        email : email.value,
        username : username.value,
        password :password.value
      }
      try {
        if(status){
          let data = `
          <br>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
           The detials already <strong>Existes!</strong>  
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `
          email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
          document.querySelector('#alert').innerHTML=data
        }else{
        let signreq= await fetch("http://localhost:3000/user",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(userObj)
        })
        let data= await signreq.json();
         console.log(data);
        let apdata = `
        <br>
        <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          Login success full
        </div>
      </div>
        `
        document.querySelector('#alert').innerHTML=apdata
        setTimeout(() => {
          window.location.href="Log_in.html"
        },2000);

        }
      } catch (error) {
        console.log("something went bad")
      }
     
     }
}
