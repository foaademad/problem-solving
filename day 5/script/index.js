///! style and cssText
// const header = document.querySelector("h1"); // object
// header.style.backgroundColor = "red";
// header.style.color = "white";
// header.style.padding = "2em";
// header.style.cssText = `background-color:red ; color:white ; padding:2em`;
// console.log(header.style.backgroundColor = "red");
///! classList
// header.classList.add("active")
// header.classList.remove("active")
// header.classList.replace("active" , "demo")
// console.log(header.classList.contains("active")); // true or false
// header.classList.toggle("demo") // add or remove

///! dataset
// header.dataset.productId="100"
// console.log(header.dataset.productId);
///! attributes
// 1- id and class
// console.log(header.id);
// console.log(header.className); //getter
// console.log(header.className = "active demo test"); //setter
// 2- attributes
// console.log(header.attributes); // object
// console.log(header.attributes.id); // key form object
// console.log(header.attributes.id.value); // value from key
// 3- setAttributes and getAttributes
// console.log(header.getAttribute("data-product-id")); /// image src
// header.setAttribute("data-test","test100")
///! events
// 1- click
// const toggleBtn = document.querySelector(".toggleBtn");
// toggleBtn.onclick = () => {
//     header.classList.toggle("active");
// };

// 2- change
// const textInput =document.getElementById("textInput");
// const textInput = document.querySelector("#textInput");
// textInput.onchange = () => {
//     console.log("change..");

// };
// 3- input
// textInput.oninput = () => {
//     console.log("change..", textInput.value);
// };
// 4- focus
// textInput.onfocus = () => {
//     textInput.style.border = `2px solid red`;
//     textInput.style.outline = `0`;
//     console.log("change..", textInput.value);
// };
// 5- blur
// textInput.onblur = () => {
//     textInput.style.border = `2px solid black`;
//     textInput.style.outline = `0`;
// };
// 6- mouse mover
// window.onmousemove = (e) => {
//     document.querySelector(".custom_mouse").style.left = `${e.clientX -20}px`;
//     document.querySelector(".custom_mouse").style.top = `${e.clientY -20}px`;
//     // console.log("move" , e.target);
//     // console.log("move" , e.clientX , e.clientY);
// }
// 7- mouse enter
// header.onmouseenter = (e) => {
//     document.body.style.background = "red";
// }
// 8- mouse leave
// header.onmouseleave = (e) => {
//     document.body.style.background = "white";
// }
///! Practical Tasks
// 1- navbar menu
// const navbarMenu = Array.from(document.querySelectorAll(".navbar a")); // []
const navbarMenu = document.querySelectorAll(".navbar a"); // nodeList
navbarMenu.forEach((link) => {
    link.onclick = () => {
        //remove active class
        removeActiveClass();
        link.classList.add("active");
    };
});
function removeActiveClass() {
    navbarMenu.forEach((link) => {
        link.classList.remove("active");
    });
}
// 2- navbar toggle active calss
const toggleMenu = document.querySelector(".toggleMenu");
const mobile_Menu = document.querySelector(".mobile_Menu");
const mobile_Menu_list = document.querySelector(".mobile_Menu ul");
const closeMenu = document.querySelector(".closeMenu");
toggleMenu.onclick = () => {
    mobile_Menu.classList.add("active");
    mobile_Menu_list.classList.add("active");
};
closeMenu.onclick = () => {
    mobile_Menu.classList.remove("active");
    mobile_Menu_list.classList.remove("active");
};
// 3- display product and change color text theme
// https://preview.themeforest.net/item/grabit-multipurpose-ecommerce-react-nextjs-template/full_screen_preview/55940002?_ga=2.23464442.1740541596.1739912889-568678468.1724007581

const products = [
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
        category: "Dried Fruits",
        title: "Mixed Nuts Berries Pack",
        rate: 4,
        newPrice: 45,
        oldPrice: null,
        isSale: true,
        isNew: false,
    },
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
        category: "Cookies",
        title: "Multi Grain Combo Cookies",
        rate: 2,
        newPrice: 25,
        oldPrice: 30,
        isSale: false,
        isNew: false,
    },
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
        category: "Foods",
        title: "Fresh Mango juice pack",
        rate: 3,
        newPrice: 46,
        oldPrice: 65,
        isSale: false,
        isNew: true,
    },
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
        category: "Dried Fruits",
        title: "Dates Value Fresh Pouch",
        rate: 5,
        newPrice: 78,
        oldPrice: 85,
        isSale: false,
        isNew: false,
    },
];
const palettes = [
    {
        code: "#fb8500",
    },
    {
        code: "#219ebc",
    },
    {
        code: "#606c38",
    },
];
products.map((product) => {
    let temp = ``;
    temp += `
     <div class="product_card">
                        <div class="product_card_image">
                            <img src="${product.image}" alt="">
                        </div>
                        <div class="product_card_info">
                            <span>${product.category}</span>
                            <h3>${product.title}</h3>
                            <div class="product_card_info_rate">
                                ${new Array(5).fill(0).map(
                                    (_, index) => `<svg stroke="currentColor" fill="${product.rate >= index ? "#FFC107" : "#D3D3D3"}" stroke-width="0" viewBox="0 0 576 512" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                    </path>
                                </svg>`,
                                )}
                            </div>
                            <div class="product_card_info_price">
                            ${
                                product.oldPrice
                                    ? `<strong>$${product.newPrice}</strong>
                            <del>$${product.oldPrice}</del>`
                                    : `<strong>$${product.newPrice}</strong>`
                            }
                            
                            </div>
                        </div>
                    </div>`;
    document.querySelector(".product_cards_container").innerHTML += temp;
});

palettes.map((color) => {
    let temp = ``;
    temp += `<div class="palettes_color" data-theme="${color.code}"></div>`;
    document.querySelector(".palettes").innerHTML += temp;
});

const palettes_color = document.querySelectorAll(".palettes_color");
const dataColorSet = document.querySelectorAll("[data-color]");
console.log(dataColorSet);

palettes_color.forEach((ele) => {
    ele.style.background = ele.dataset.theme;
    ele.onclick = () => {
        changeModeTextColor(ele.dataset.theme);
    };
});

function changeModeTextColor(color) {
    dataColorSet.forEach((item) => {
        item.style.color = color;
    });
}
// console.log(new Array(5).fill(0));

function toggleOffcanvas() {
    document.getElementById("offcanvas").classList.toggle("open");
}

function setDirection(dir) {
    document.body.setAttribute("dir", dir);
    localStorage.setItem("direction", dir);

    document.getElementById("ltr-btn").classList.remove("active");
    document.getElementById("rtl-btn").classList.remove("active");

    if (dir === "rtl") {
        document.getElementById("rtl-btn").classList.add("active");
    } else {
        document.getElementById("ltr-btn").classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedDir = localStorage.getItem("direction") || "ltr";
    setDirection(savedDir);
});

function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty("--bg-color", "#121212");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.getElementById("dark-btn").classList.add("active");
        document.getElementById("light-btn").classList.remove("active");
    } else {
        document.documentElement.style.setProperty("--bg-color", "white");
        document.documentElement.style.setProperty("--text-color", "black");
        document.getElementById("light-btn").classList.add("active");
        document.getElementById("dark-btn").classList.remove("active");
    }
}
