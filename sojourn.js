


function Toggle(className) {
    let a = document.getElementsByClassName(className);
    for (let i = 0; i < a.length; i++) {
        if (a[i].style.visibility == "visible") {
            a[i].style.visibility = "hidden";
        }
        else {
            a[i].style.visibility = "visible";
        }
    }
}

function switchh(event){

    event.preventDefault()
    let s1=document.getElementById("wa");
    let s2=document.getElementById("yo");
    let s3=document.getElementById("ws") ;

    let input=document.querySelector("input.in")
    if(input.value=="whatsapp"){
        window.location.href="https://web.whatsapp.com/"
    }
    else if(input.value=="youtube")
    {
        window.location.href="https://www.youtube.com/"
    }
    else if(input.value=="w3schools"){
        window.location.href="https://www.w3schools.com/"
    }

}

function navigateToShowcase() {
    // Navigate to page2.html and pass a query parameter for the target section (showcase)
    window.location.href = 'ThemeExtension.html?main-c4=true';

}
