let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/

let notification = document.querySelector(".has-background-primary");
notification.innerHTML = "Hello! Welcome to my page";

let changeBackgroundColor = document.querySelector(".notification");
changeBackgroundColor.style.backgroundColor = "has-background-primary";

// 2:::
only show the notification banner when you click the login button, (this is an event.)


let logInButton = document.querySelector(".is-light");
notification.style.display = "none";


logInButton.addEventListener("click", notification);

// 3:::
add a photo as a background image to hero banner
*/


// 4::::
/*
  The Grid. This is the most popular news website, better than vg.no

  1. create an object for a news article
    1.1 it must have a Title, Image, and Text property and url property.
  2. use this object to update the front end of the first green block in the the grid.
*/
