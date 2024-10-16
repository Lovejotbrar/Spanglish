function toggleLanguage() {
    const innerToggle = document.getElementById('inner-toggle');
 
    const engContent = document.querySelectorAll('.eng');
    const spanishContent = document.querySelectorAll('.spanish');

    if (innerToggle.textContent === 'English') {
        innerToggle.textContent = 'Español';
        innerToggle.style.transform = 'translateX(100%)';
        engContent.forEach(el => el.style.display = 'none');
        spanishContent.forEach(el => el.style.display = 'block');
    } else {
        innerToggle.textContent = 'English';
        innerToggle.style.transform = 'translateX(0)';
        engContent.forEach(el => el.style.display = 'block');
        spanishContent.forEach(el => el.style.display = 'none');
    }
}
function toggleLanguage2() {
    const innerToggle = document.getElementById('inner-toggle2');
 
    const engContent = document.querySelectorAll('.eng');
    const spanishContent = document.querySelectorAll('.spanish');

    if (innerToggle.textContent === 'English') {
        innerToggle.textContent = 'Español';
        innerToggle.style.transform = 'translateX(100%)';
        engContent.forEach(el => el.style.display = 'none');
        spanishContent.forEach(el => el.style.display = 'block');
    } else {
        innerToggle.textContent = 'English';
        innerToggle.style.transform = 'translateX(0)';
        engContent.forEach(el => el.style.display = 'block');
        spanishContent.forEach(el => el.style.display = 'none');
    }
}


document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
document.getElementById('lang-toggle2').addEventListener('click', toggleLanguage2);

var user = document.getElementById('user-name').innerHTML;

document.getElementById('profile-pic').innerHTML=user[0];
document.getElementById('profile-pic1').innerHTML=user[0];
console.log(user[0])
document.querySelectorAll('.spanish').forEach(el => el.style.display = 'none');


function toggleNav() {
    var sideNav = document.getElementById("side-nav");
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
}
