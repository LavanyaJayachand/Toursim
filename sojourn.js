


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