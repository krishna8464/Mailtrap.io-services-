function Logout(){
    let str = false;
    sessionStorage.setItem("acive",str)
    alert("Logout sucessful")
    sessionStorage.clear()
    window.location.href="index.html"
}

//////don't touch the above code
function individual(){
    let obj = {
        planname : "individual",
        planamount : "$14"
    }
    sessionStorage.setItem("plan",JSON.stringify(obj))
    setTimeout(() => {
        window.location.href="setting.html"
    }, 1000);
    
}

function team(){
    let obj = {
        planname : "Team",
        planamount : "$34"
    }
    sessionStorage.setItem("plan",JSON.stringify(obj))
    setTimeout(() => {
        window.location.href="setting.html"
    }, 1000);
}

function business(){
    let obj = {
        planname : "Business",
        planamount : "$64"
    }
    sessionStorage.setItem("plan",JSON.stringify(obj))
    setTimeout(() => {
        window.location.href="setting.html"
    }, 1000);
}
function Premium(){
    let obj = {
        planname : "Premium",
        planamount : "$129"
    }
    sessionStorage.setItem("plan",JSON.stringify(obj))
    setTimeout(() => {
        window.location.href="setting.html"
    }, 1000);
}
function enterprise(){
    let obj = {
        planname : "Enterprise",
        planamount : "$399"
    }
    sessionStorage.setItem("plan",JSON.stringify(obj))
    setTimeout(() => {
        window.location.href="setting.html"
    }, 1000);
}

function moveit(){
    window.location.href="inbox.html"
}