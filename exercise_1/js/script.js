let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/

// 2:::
only show the notification banner when you click the login button, (this is an event.)

// 3:::
add a photo as a background image to hero banner
*/


let notification = document.querySelector(".has-background-primary");
notification.innerHTML = "Hello! Welcome to my page";

let changeBackgroundColor = document.querySelector(".notification");
changeBackgroundColor.style.backgroundColor = "has-background-primary";

const showBanner = document.querySelector(".button is-light");
notification.style.display = "none";


notification.addEventListener("click", showBanner);
