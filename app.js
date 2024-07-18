const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=>
{
    faq.addEventListener("click",()=>
    {
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
            faqs.forEach((otherfaq)=>{
                if(otherfaq != faq){
                    otherfaq.classList.remove("active")
                }
            })
        }
        })
})


function myFunc() {
    window.location.href = "sign-up.html";
}

function back() {
    alert("Login Succesfully");
}

function back2() {
    window.location.href = "sign-in.html";
}
function back3() {
    window.location.href = "sign-up.html";
}

