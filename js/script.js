document.addEventListener("DOMContentLoaded", () => {

    let form1 = document.getElementById("form1");
    let btSgte = document.getElementById("btn-sgt");
    btSgte.addEventListener("click", (e) => {
        e.preventDefault();
        if(form1.checkValidity()){
            form1.classList.add("f1");
            setTimeout(() => {
                 form1.style.opacity="0";
            }, 1000);
        }else{
            form1.reportValidity();
        }
    })
})