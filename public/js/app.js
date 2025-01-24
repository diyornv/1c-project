let hamburger = document.querySelector("#hamburger");
let responsive_nav_list = document.querySelector("#responsive_nav_list");

// SVG kodlari
const openIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.5H21M3 15.5H21" stroke="#2C2B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

const closeIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7L7 17M7 7L17 17" stroke="#2C2B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

hamburger.addEventListener("click", function() {
    // Nav menyu ochilishi yoki yopilishi uchun klasslarni almashtirish
    responsive_nav_list.classList.toggle("-top-[110%]");
    responsive_nav_list.classList.toggle("top-[72px]");
    document.body.classList.toggle("overflow-y-hidden")
    // `hamburger` elementidagi `true` klassni yoqish yoki o'chirish
    if (hamburger.classList.toggle("true")) {
        hamburger.innerHTML = closeIcon; // `true` bo'lganda yopiq ikonka
    } else {
        hamburger.innerHTML = openIcon; // `false` bo'lganda ochiq ikonka
    }
});

let dropdownTop = document.querySelectorAll(".dropdownTop h3");
let dropdown = document.querySelectorAll(".dropdown");
let dropdownToggleBtn = document.querySelectorAll(".dropdownToggleBtn");

dropdownToggleBtn.forEach((item, index) => {
    item.addEventListener('click', function () {
        if (dropdown[index].style.maxHeight === "0px" || dropdown[index].style.maxHeight === "") {
            dropdown[index].style.maxHeight = dropdown[index].scrollHeight + "px";
        } else {
            dropdown[index].style.maxHeight = "0px";
        }
    });
});
