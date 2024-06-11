let submitbtn = document.querySelector(".submitbtn");
let nameinput = document.querySelector(".nameinput");
let emailinput = document.querySelector(".emailinput");
let numberinput = document.querySelector(".numberinput");
let message = document.querySelector(".messageinput");
let addressinput = document.querySelector(".addressinput");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameinput.value == "" ||
    emailinput.value == "" ||
    numberinput.value == "" ||
    message.value == "" ||
    addressinput.value == ""
  ) {
    alert("Please fill all the fields");
    return false;
  }
  if (!nameinput.value.match(/[A-z]/)) {
    alert("Name can only contain letters and spaces");
    return false;
  }
  if (!emailinput.value.match(/[A-z0-9]+[@]+[a-z]{5}[.]+[a-z]{3}/)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (!numberinput.value.match(/[+92][0-9]{12}/)) {
    alert(
      "Please enter a pakistani mobile number (+920000000000) without spaces"
    );
    return false;
  }
  if (!addressinput.value.match(/[A-z0-9\W]/)) {
    alert("Please enter a Valid Address");
    return false;
  }
  if (!addressinput.value.match(/[A-z]/)) {
    alert("Please write a review with Alphabets Only");
    return false;
  }

  alert("Review Submitted");
  window.location.reload();
  return false;
});
