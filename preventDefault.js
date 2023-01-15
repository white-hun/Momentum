const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
loginForm.addEventListener("submit", onLoginSubmit);

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");
// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(loginInput.value);
// }

// function handleLinckClick(event) {
//   event.preventDefault();
//   console.dir(event);
//   alert("Clicked!");
// }
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinckClick);

// HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="css/style.css" />
//     <title>Momentum</title>
//   </head>
//   <body>
//     <form id="login-form">
//       <input
//         required
//         maxlength="15"
//         type="text"
//         placeholder="What is your name?"
//       />
//       <input type="submit" value="Log In" />
//     </form>
//     <script src="app.js"></script>
//   </body>
// </html>
