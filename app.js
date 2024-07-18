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
    window.location.href = "login.html";
}

function back() {
    window.location.href = "sign-up.html";
}

function back2() {
    window.location.href = ".html";
}