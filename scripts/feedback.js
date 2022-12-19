function Logout(){
    let str = false;
    sessionStorage.setItem("acive",str)
    alert("Logout sucessful")
    sessionStorage.clear()
    window.location.href="index.html"
}
//don't touch above code





let feedbacktext = document.getElementById("typefeedback")

async function feedbacksub(){
    
    try {
        
        if(feedbacktext.value===""){
            let data = `
        <br>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
           Submit After Filling the <strong>Feedback Text Box!</strong>  
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        document.getElementById('alerthere').innerHTML=data
        }else{
            let feedbacktext = document.getElementById("typefeedback")
            let userid = sessionStorage.getItem('User-Id')
            let feedbackupdate = await fetch(`http://localhost:3000/user/${userid}`,{
            method:"PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({ feedback : feedbacktext.value})
        })
        if(feedbackupdate.ok){
            // console.log("all done")
            let data = `
                    <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                Feedback Submited Sucessfully 👍
                </div>
                </div>
                <br>
                <br>
                <br>
            
                    `
                    getData()
                document.getElementById('alerthere').innerHTML=data
               setTimeout(() => {
                window.location.href="feedback.html"
               }, 2000);
        }
        }
    } catch (error) {
        
    }
}
async function getData(){
    try {
        let userid = sessionStorage.getItem('User-Id')
      let res = await fetch(`http://localhost:3000/user/${userid}`)
      let out = await res.json();
      sessionStorage.setItem("userdetials",JSON.stringify(out))
    } catch (error) {
      console.log("error")
    }
    }