let holdername = document.getElementById("hi_card_name");
let cardnumber = document.getElementById("hi_card_number");
let cvvnumber = document.getElementById("hi_cvv_number");

let recOTP=0;

let str = cardnumber.value
let str1 = cvvnumber.value


async function sendotp(){
   try {
    if(holdername.value ==="" || cardnumber.value==="" || cvvnumber.value===""){
        let data=`
        <br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Please Fill All The <strong>Detials!</strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.querySelector('#alerthere').innerHTML=data
    }else if(cardnumber.value.length !== 16 || cvvnumber.value.length !== 3){
        let data=`
        <br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Please Enter Correct <strong>Detials!</strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.querySelector('#alerthere').innerHTML=data
    }else{
        recOTP = Math.floor((Math.random()*1000000)+1)
        alert(recOTP)
        let data=`
        <label for="">Enter OTP</label>
        <div id="hi_mm">
                <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="6"  size="6" placeholder="Enter OTP" id="entotpval" required><br>
            </div>
            <br>
            <button onclick="Paytheamount()" id="hi_button">PAY AMOUNT</button>
        `
        document.getElementById("hi_card_name").readOnly = true;
        document.getElementById("hi_card_number").readOnly = true;
        document.getElementById("hi_cvv_number").readOnly = true;
        document.querySelector('#appendheretoo').innerHTML=data


    }
   } catch (error) {
    console.log("something went wrong in sendotp function")
   }
}

async function Paytheamount(){
    try {
        let entotp = document.getElementById("entotpval")
        if(Number(entotp.value) !== recOTP ){
            let data=`
            <br>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Please Enter Correct <strong>OTP!</strong>  
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
            // console.log(typeof(entotp.value),typeof(recOTP))
            document.querySelector('#alerthere').innerHTML=data
            
        }else{
            let sesobj = JSON.parse(sessionStorage.getItem("addressdet"))
            sesobj[["carddetials"]]=cardnumber.value;
            let userid = sessionStorage.getItem('User-Id')
            let adding_card = await fetch(`https://maletrap-io.onrender.com/user/${userid}`,{
            method:"PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(sesobj)
            })
            if(adding_card.ok){
                let data = `
                <br>
                <br>
                    <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                Payment Done Sucessfully 👍
                </div>
                </div>
                <br>
                <br>
                <br>
            
                    `
                    getData()
                document.querySelector('#alerthere').innerHTML=data
               setTimeout(() => {
                window.location.href="UI.html"
               }, 2000);
            }
        }

    } catch (error) {
        
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

    function Logout(){
        let str = false;
        sessionStorage.setItem("acive",str)
        alert("Logout sucessful")
        sessionStorage.clear()
        window.location.href="index.html"
    }