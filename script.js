//DOM elements
const mainPage = document.querySelector(".mainPage");
const loginPage = document.querySelector(".loginPage");
const middleContent = document.querySelector(".middleContent");
const btnTop = document.querySelector(".btnTop");
const newsFeedPage = document.querySelector(".feedPage");
const loginModal = document.querySelector(".loginModal");
const modalX = document.querySelector(".loginModal i");
const loginFormBtn = document.querySelector(".loginFormBtn");
const postBtn = document.querySelector(".postBtn");
const modalWrapper = document.querySelector(".modalWrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modalHeader i");
const modalPostBtn = document.querySelector(".modalHeader button");
const modalFooterPlus = document.querySelector(".modalFooter span");
const modalInput = document.querySelector(".modalInput");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebarWrapper");
const xBtn = document.querySelector(".sidebarHeader i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

/********************************************************* */
//Main Page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => {
    if(e.target.classList[1] === 'mainBtn'){
        goToLoginPage();
    }
});
btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.userInfo');
    const inputPassword = document.querySelector('.password');

    if(inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display ="none";
        newsFeedPage.style.display ="block";
    } else {
        goToLoginPage();
        loginModal.style.display = "block";
    }
});
//Login Page
modalX.addEventListener('click', () => {
    loginModal.style.display = "none";
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector(".loginUserInfo");
    const loginPassword = document.querySelector(".loginPassword");

    if(loginUserInfo.value !== "" && loginPassword.value !== ""){
        loginPage.style.display = "none";
        newsFeedPage.style.display = "block";
    } else {
        loginModal.style.display = "block";
    }
});
//News feed page
//Post modal
postBtn.addEventListener('click', () =>{
    modal.style.display = "block";
    modalWrapper.classList.add("modalWrapperDisplay");

    if(modalInput.value !== ""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
});
const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};
postModalX.addEventListener('click', () => {
    modal.style.display = "none";
    modalWrapper.classList.remove('modalWrapperDisplay');
});
modalInput.addEventListener('keypress', (e) => {
    if(e.target.value !== ""){
        changeOpacity(1);
    }
});
modalInput.addEventListener('blur', (e) => {
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
});
//Sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebarDisplay');
    sidebarWrapper.classList.add('sidebarWrapperDisplay');
});
xBtn.addEventListener('click', () => {
    sidebar.classList.remove("sidebarDisplay");
    sidebarWrapper.classList.remove("sidebarWrapperDisplay");
});
//Dark Mode
const darkElements1 = document.querySelectorAll(".darkMode1");
const darkElements2 = document.querySelectorAll(".darkMode2");
const lightTexts = document.querySelectorAll(".lightText");
const borders = document.querySelectorAll(".border");

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map((darkEl1) => darkEl1.classList.toggle('dark1'));
    Array.from(darkElements2).map((darkEl2) => darkEl2.classList.toggle('dark2'));
    Array.from(lightTexts).map((lightText) => lightText.classList.toggle('light'));
    Array.from(borders).map((border) => border.classList.toggle('borderColor'));
});