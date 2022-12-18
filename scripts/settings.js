let firstname = document.getElementById("first");
let lastname = document.getElementById("last");
let companyname = document.getElementById("compName");
let texinv= document.getElementById("TaxNum");
let adress = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let country = document.getElementById("country");
let zipcode = document.getElementById("kazip");
let phone = document.getElementById("kaphone");
let mail = document.getElementById("email2");

async function updateaddres(){
    try {
        let str = mail.value
        console.log(str)
        let status1=str.includes("@gmail.com")
        if(firstname.value ===""||lastname.value===""||companyname.value===""||texinv.value===""||adress.value===""||
        city.value===""||state.value===""||country.value===""||zipcode.value===""||phone.value===""||mail.value===""){
            let data = `
        <br>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
           Please Enter All<strong>Detials!</strong>  
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <br>
        <br>
        <br>
        <br>
        `
        document.getElementById('alerthere').innerHTML=data
        }else if(status1===false){
            let data = `
            <br>
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
               Please Enter Correct<strong>Mail!</strong>  
               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <br>
            <br>
            <br>
            <br>
            `
            document.getElementById('alerthere').innerHTML=data
        }else if(zipcode.value.length!==6 || phone.value.length !== 10){
            let data = `
            <br>
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
               Please Enter Correct<strong>Phone-Number or Zipcode!</strong>  
               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <br>
            <br>
            <br>
            <br>
            `
            document.getElementById('alerthere').innerHTML=data
        }else{
            let plandet = JSON.parse(sessionStorage.getItem("plan"));
            // console.log(plandet)
            let firslast = `${firstname.value} ${lastname.value}`
            let udpobj = {
                plan : plandet,
                address : {
                          Name : firslast,
                          Company : companyname.value,
                          Tax_Inv : texinv.value,
                          Adress : adress.value,
                          Cityname : city.value,
                          State : state.value,
                          Country : country.value,
                          Zipcode : zipcode.value,
                          Contact : phone.value,
                          Mail : mail.value
                          }
              }
                    //    console.log(udpobj)
                    sessionStorage.setItem("addressdet",JSON.stringify(udpobj))
                    let data = `
                    <br>
                    <br>
                    <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                Address Updated Successfull 👍
                </div>
                </div>
                <br>
                <br>
                <br>
                    `
                 document.getElementById('alerthere').innerHTML=data
                // getData()
               setTimeout(() => {
                window.location.href="payment.html"
               },1000);
                   
        }
        
        
    } catch (error) {
        console.log("some thing went bad")
    }
}





