import {
  nav,
  loginbtn,
  shoppingcart,
  footer,
  spintimer,
} from "../Export file/export.js";
spintimer();
document.querySelector(".navimport").innerHTML = nav;
loginbtn();
shoppingcart();
document.querySelector("footer").innerHTML = footer;
