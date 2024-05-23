let username = sessionStorage.getItem("username");
let login_data = document.querySelector("#login_data");
if (username == null) {
  login_data.innerHTML = `<button type="button" class="btn btn-outline-success w-auto" id="sign_in">Sign in</button>`;
  let sign_in = document.querySelector("#sign_in");
  sign_in.addEventListener("click", () => {
    window.location.assign("/Login and Register/login.html");
  });
} else {
  login_data.innerHTML = `<h6>Welcome: <i><span id="login_user" class="h5">${username}</span></i></h6>
                <button type="button" class="btn btn-danger w-100" id="logout">Logout</button>
               </div>`;
  let logout = document.querySelector("#logout");
  logout.addEventListener("click", () => {
    sessionStorage.removeItem("username");
    window.location.reload();
  });
};

let submitbtn = document.querySelector(".submitbtn");
let nameinput = document.querySelector(".nameinput");
let emailinput = document.querySelector(".emailinput");
let numberinput = document.querySelector(".numberinput");
let message = document.querySelector(".messageinput");
let addressinput = document.querySelector(".addressinput");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(nameinput.value =="" || emailinput.value=="" || numberinput.value=="" || message.value=="" || addressinput.value=="" ){
    alert("Please fill all the fields");
                return false;
  }
  if (!nameinput.value.match(/[A-z]/)) {
    alert("Name can only contain letters and spaces");
    return false;
}
if (!emailinput.value.match(/[A-z]+[0-9]+[@]+[a-z]{5}[.]+[a-z]{3}/)) {
  alert("Please enter a valid email address");
  return false;
}
if (!numberinput.value.match(/[+92][0-9]{12}/)) {
  alert("Please enter a pakistani mobile number");
  return false;
}
if (!addressinput.value.match(/[A-z]/)) {
  alert("Please enter a Valid Adress");
  return false;
}
if (!addressinput.value.match(/[A-z]/)) {
  alert("Please write a message");
  return false;
}



Email.send({
  Host : "smtp.elasticemail.com",
  Username : "saqibkhan4567892@gmail.com",
  Password : "9F60F62D966FA23CF9465C50B7D341C32CB4",
  To : 'saqibkhan4567892@gmail.com',
  From : document.getElementById("email").value,
  Subject : "New Contact Form Enquiry",
  Body : "And this is the body"
}).then(
message => alert("Form Submit Sucessfully")
);

});
