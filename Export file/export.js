let nav = ` <nav class="navbar navbar-expand-lg navbar-light bg-light ">
             <div class="container-fluid p-2">
                 <img src="/Images/Logo/logo.png" alt="" class="navbar-brand me-auto"
                     style="max-width: 70px; max-height: 70px;">
     
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-5 mb-2 mb-lg-0 gap-4 ">
                         <li class="nav-item dropdown">
                             <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                 Top Brands
                             </a>
                             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li class="nav-item">
                                     <div class="dropend">
                                         <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                             aria-expanded="false" data-bs-auto-close="outside" role="button">
                                             Philips Lighting
                                         </a>
                                         <ul class="dropdown-menu">
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=Philips_indoor">Indoor luminaires</a>
                                             </li>
     
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=Philips_outdoor">Outdoor
                                                     luminaires</a>
                                             </li>
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=Philips_lamp">LED lamps and tubes</a>
     
                                             </li>
                                         </ul>
                                     </div>
                                 </li>
                                 <li class="nav-item">
                                     <div class="dropend">
                                         <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                             aria-expanded="false" data-bs-auto-close="outside" role="button">
                                             Feit Electric
                                         </a>
                                         <ul class="dropdown-menu">
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=feit_downlights">Downlights</a>
                                             </li>
     
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=feit_string">String Lights</a>
                                             </li>
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=feit_fixtures">Light Fixtures</a>
                                             </li>
                                         </ul>
                                     </div>
                                 </li>
                                 <li class="nav-item">
                                     <div class="dropend">
                                         <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                             aria-expanded="false" data-bs-auto-close="outside" role="button">
                                             Vorlane
                                         </a>
                                         <ul class="dropdown-menu">
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=vorlane_downlight">Downlight</a>
                                             </li>
     
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=vorlane_strip">LED Strips</a>
                                             </li>
                                             <li class="nav-item">
                                                 <a class="dropdown-item"
                                                     href="/Category Page/index.html?id=vorlane_flood">Flood Light</a>
                                             </li>
                                         </ul>
                                     </div>
                                 </li>
     
                             </ul>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link active home" aria-current="page" href="/index.html">Home</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link active gallery" aria-current="page" href="/Gallery/index.html">Gallery</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link active about_us" aria-current="page" href="/About_Us/index.html">About Us</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link active contact_us" aria-current="page" href="/Contact_Us/index.html">Contact Us</a>
                         </li>
     
                     </ul>
                 </div>
                 <div class="d-flex justify-content-center align-items-center me-lg-5 me-md-5 me-sm-3 gap-4">
                     <div class="btn-group">
                         <a class="btn btn-group fs-5" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                 class="fa-solid fa-user text-success "></i></a>
                         <form class="dropdown-menu py-lg-5 py-md-5 py-sm-2 px-lg-4 px-md-4 px-sm-1 w-auto mt-3 "
                             style="left: -130px;">
                             <div class=" d-flex justify-content-center align-items-center">
                                 <div class="container-fluid d-flex flex-column justify-content-center align-items-center"
                                     id="login_data">
     
                                 </div>
                             </div>
                         </form>
                     </div>
                     <div class="btn-group">
                         <a href="#" class="cart text-dark pe-4 fs-5" data-bs-toggle="offcanvas"
                             data-bs-target="#ShoppingCart" aria-controls="ShoppingCart"><i
                                 class="fa-solid fa-cart-shopping text-success"></i>
                             <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger cartcounting"
                                 style="left: 70%;font-size: 10px;">
     
                             </span>
                         </a>
                     </div>
                 </div>
     
                 <!-- off canvas nav -->
                 <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasmenu"
                     aria-controls="offcanvasmenu" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon" style="outline: none; box-shadow: none;"></span>
                 </button>
                 <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasmenu"
                     aria-labelledby="offcanvasDarkNavbarLabel">
                     <div class="offcanvas-header">
                         <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                         <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
                             aria-label="Close"></button>
                     </div>
                     <div class="offcanvas-body">
                         <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                             <li class="nav-item ">
                                 <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link active" aria-current="page" href="/Gallery/index.html">Gallery</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link active" aria-current="page" href="/About_Us/index.html">About Us</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link active" aria-current="page" href="/Contact_Us/index.html">Contact Us</a>
                             </li>
                             <li class="nav-item">
                             <li class="nav-item dropdown">
                                 <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                     data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                     Top Brands
                                 </a>
                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <li class="nav-item dropdown">
                                         <a class="nav-link active dropdown-toggle ps-3" href="#" id="navbarDropdown"
                                             role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                             data-bs-auto-close="outside">
                                             Philips Lighting
                                         </a>
                                         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                             <li class="nav-item "><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=Philips_indoor">Indoor luminaires</a>
                                             </li>
                                             <li class="nav-item"><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=Philips_outdoor">Outdoor
                                                     luminaires</a>
                                             </li>
                                             <li class="nav-item"><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=Philips_lamp">LED lamps and tubes</a>
                                             </li>
                                         </ul>
                                     </li>
                                     <li class="nav-item dropdown">
                                         <a class="nav-link active dropdown-toggle ps-3" href="#" id="navbarDropdown"
                                             role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                             data-bs-auto-close="outside">
                                             Feit Electric
                                         </a>
                                         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                             <li class="nav-item "><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=feit_downlights">Downlights</a></li>
                                             <li class="nav-item"><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=feit_string">String Light</a></li>
                                             <li class="nav-item"><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=feit_fixtures">Light Fixtures</a>
                                             </li>
                                         </ul>
                                     </li>
                                     <li class="nav-item dropdown">
                                         <a class="nav-link active dropdown-toggle ps-3" href="#" id="navbarDropdown"
                                             role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                             data-bs-auto-close="outside">
                                             Vorlane
                                         </a>
                                         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                             <li class="nav-item "><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=vorlane_downlight">Downlight</a></li>
                                             <li class="nav-item"><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=vorlane_strip">LED Strips</a></li>
                                             <li class="nav-item"><a class="dropdown-item"
                                                     href="/Category Page/index.html?id=vorlane_flood">Flood Light</a></li>
                                         </ul>
                                     </li>
                                 </ul>
                             </li>
                         </ul>
                     </div>
                 </div>
                 <!-- offcanvas nav end -->
                 <!-- offcanvas shoppingcart start -->
                 <div class="offcanvas offcanvas-end" tabindex="-1" id="ShoppingCart" aria-labelledby="ShoppingCartLabel">
                     <div class="offcanvas-header">
                         <h5 class="offcanvas-title" id="ShoppingCartLabel">Shopping Cart</h5>
                         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                     </div>
                     <div class="offcanvas-body">
                         <div class="container-fluid  mb-5">
                             <div class="row" id="ShoppingCartBody">
                                 <h5 class="text-center text-danger">No items in your cart</h5>
                             </div>
                         </div>
                     </div>
                     <div class=" p-5 bg-light ">
                         <div class="d-flex justify-content-start align-items-center gap-5 text-dark ">
                             <span class="h4"><span>Total: </span><span class="text-success totalamount">200</span> RS</span>
                             <a class="btn btn-outline-success" href="#" style="box-shadow: 2px 2px black;">Checkout</a>
                         </div>
                     </div>
     
                 </div>
                 <!-- offcanvas shoppingcart end -->
     
     
             </div>
         </nav>`;
let loginbtn = () => {
  let username = sessionStorage.getItem("username");
  let login_data = document.querySelector("#login_data");
  if (username == null) {
    login_data.innerHTML = `<button type="button" class="btn btn-outline-success w-auto" id="sign_in">Sign in <i class="bi bi-box-arrow-in-right"></i></button>`;
    let sign_in = document.querySelector("#sign_in");
    sign_in.addEventListener("click", () => {
      window.location.assign("Login and Register/login.html");
    });
  } else {
    login_data.innerHTML = `<h6>Welcome: <i><span id="login_user" class="h5">${username}</span></i></h6>
                <button type="button" class="btn btn-danger w-100" id="logout">Logout <i class="bi bi-box-arrow-right"></i></button>
               </div>`;
    let logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {
      sessionStorage.removeItem("username");
      window.location.reload();
    });
  }
};

let shoppingcart = () => {
  let json_url =
    "https://663647d4415f4e1a5e26de9c.mockapi.io/E-Project/Addtocart";
  fetch(json_url)
    .then((res) => res.json())
    .then((data) => {
      var cartcount = 0;
      var totalprice = 0;
      for (i in data) {
        var quantity = parseInt(data[i].quantity);
        cartcount = cartcount + quantity;
        var tprice = parseInt(data[i].price);
        totalprice = totalprice + tprice * quantity;
      }
      document.querySelector(".cartcounting").innerHTML = cartcount;

      document.querySelector(".totalamount").innerHTML = totalprice;

      var main = "";
      for (i in data) {
        main += ` <div class="col-12 mt-3"><div class="card p-2 h-100" >
                            <div class="row d-flex justify-content-center align-item-center">
                                <div class="col-md-4 col-sm-2 col-lg-4 p-2" style="max-width:60px">
                                    <img src="${data[i].img}"
                                        class="img-fluid h-100 w-100" style="max-height:80px;" alt="...">
                                </div>
                                <div class="col-md-7 col-sm-8 col-lg-7 p-2 justify-content-center align-items-center h-100">
                                <div class="d-flex justify-content-center align-item-center h-100 gap-3 m-2">
                                    <h6 class="mt-2 me-2">Price: <span>${data[i].price}</span></h6>
                                    <input type="text" value="${data[i].quantity}" readonly maxlength="2" style="width: 50px; text-align: center;max-height: 50px;">
                                    <button class="btn btn-danger delete" style="max-height: 50px;"><i class="bi bi-trash"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div></div>`;
        document.querySelector("#ShoppingCartBody").innerHTML = main;
        let deletebtn = document.querySelectorAll(".delete");
        for (let i = 0; i < deletebtn.length; i++) {
          deletebtn[i].addEventListener("click", () => {
            if (data[i].quantity > 1) {
              data[i].quantity = parseInt(data[i].quantity) - 1;
              fetch(
                `https://663647d4415f4e1a5e26de9c.mockapi.io/E-Project/Addtocart/${data[i].id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data[i]),
                }
              );
              setTimeout(() => {
                window.location.reload();
              }, 800);
            } else {
              fetch(
                `https://663647d4415f4e1a5e26de9c.mockapi.io/E-Project/Addtocart/${data[i].id}`,
                {
                  method: "DELETE",
                }
              );
              setTimeout(() => {
                window.location.reload();
              }, 800);
            }
          });
        }
      }
    });
};
let footer = `  <div class="container-fluid py-5 px-5 bg bg-white text-black-50 mb-5 mt-5 position-relative">

            <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-12 mb-sm-5 mb-lg-0 mb-md-0">
                    <div class="d-flex align-items-center gap-1 ">
                        <img src="/Images/Logo/logo.png" alt="logo" class="h-100" style="max-height: 50px;">
                        <h6 class="text-success">Bright World</h6>
                    </div>
                    <div class="ms-3">
                        <h5 class="text-dark">Address</h5>
                        <p class="text-black-50">7643 N Ingram Ave,<br> Suite 101, Fresno,<br> CA 93711</p>
                    </div>
                    <a class="btn btn btn-outline-success ms-3 px-5" href="/Contact_Us/index.html">Contact Us</a>

                </div>
                <div class="col-md-9 col-lg-9 col-sm-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-lg-3 col-sm-12">
                                <h3 class="text-dark py-3">Quick Links</h3>
                                <li class="footerlinks list-unstyled"><a href="/index.html"
                                        class="nav-link d-inline-block">Home</a></li>
                                <li class="footerlinks list-unstyled"><a href="/Gallery/index.html"
                                        class="nav-link d-inline-block">Gallery</a></li>
                                <li class="footerlinks list-unstyled"><a href="/About_Us/index.html"
                                        class="nav-link d-inline-block">About
                                        Us</a></li>


                            </div>
                            <div class="col-md-3 col-lg-3 col-sm-12">
                                <h3 class="text-dark py-3"> Philips</h3>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=Philips_indoor"
                                        class="nav-link d-inline-block">Indoor
                                        luminaires</a></li>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=Philips_outdoor"
                                        class="nav-link d-inline-block">Outdoor luminaires</a></li>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=Philips_lamp"
                                        class="nav-link d-inline-block">LED
                                        lamps and tubes</a></li>
                            </div>
                            <div class="col-md-3 col-lg-3 col-sm-12">
                                <h3 class="text-dark py-3">Feit Electric</h3>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=feit_downlights"
                                        class="nav-link d-inline-block">Downlights</a></li>
                                <li class="footerlinks list-unstyled"><a href="/Category Page/index.html?id=feit_string"
                                        class="nav-link d-inline-block">String
                                        Lights</a></li>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=feit_fixtures"
                                        class="nav-link d-inline-block">Light
                                        Fixtures</a></li>


                            </div>
                            <div class="col-md-3 col-lg-3 col-sm-12">
                                <h3 class="text-dark py-3">Vorlane</h3>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=vorlane_strip"
                                        class="nav-link d-inline-block">LED
                                        Strips</a></li>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=vorlane_downlight"
                                        class="nav-link d-inline-block">Downlight</a></li>
                                <li class="footerlinks list-unstyled"><a
                                        href="/Category Page/index.html?id=vorlane_flood"
                                        class="nav-link d-inline-block">Flood
                                        Light</a></li>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div class="bg_img position-absolute  top-0 bottom-0 start-0 end-0 "></div>
        </div>`;
let spintimer = () => {
  setTimeout(() => {
    document.querySelector("#spinloader").style.display = "none";
  }, 2000);
};

export { nav, loginbtn, shoppingcart, footer, spintimer };
