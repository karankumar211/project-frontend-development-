let url =
  "https://script.google.com/macros/s/AKfycbwxZzoJjqwWOEEqlqm-ISWSEtKSYpJEmSiv9vDjCUNT10r_NOqyv1nug81Q9_OwR2KIlA/exec";

let form = document.querySelector("#form"); //to take
form.addEventListener("submit", (e) => {
  e.target.btn.innerHtml = "submitting....";
  let d = new FormData(form); //data of form accessing
  fetch(url, {
    // to fetch the sheet
    method: "POST", // method of sending the data
    body: d, //content  that take to sheet
  })
    .then((res) => res.text()) // geting reponse and conveting into text
    .then((finalRes) => {
      e.target.btn.innerHtml = "submit";
      document.getElementById("res").innerHTML = finalRes; // to show the response div
      form.reset();
      setTimeout(() => {
        document.getElementById("res").innerHTML = ""; // to clear the response div after 5 sec
      }, 5000);
      console.log(finalRes);
    });
  e.preventDefault(); //to cancel   event to relode
});
