function MainNavigation() {
  document.write(`
  <!-- Start NavBar  -->
  <!------- Header ------->
  <div class="header bg-primary flex-column flex-md-row bg-secondary p-1">
    <div class=" container d-flex justify-content-between flex-md-row">
    <!-- Header Content  -->
    <div class="d-flex">
      <a href="" target="_blank" class="text-white text-decoration-none link-primary d-flex align-items-center">
        <div><img src="images/phone.svg" alt=""></div>
        <span class="fs-7 mx-1 mt-1">+966 56 627 2746</span>
      </a>
      <a href="" target="_blank" class="text-white text-decoration-none link-primary d-flex align-items-center mx-2">
        <div><img src="images/sms.svg" alt=""></div>
        <span class="fs-7 mx-1 mt-1">operations@alfarhoodport.com</span>
      </a>
    </div>

    <div class=" d-flex justify-content-lg-between justify-content-between d-none d-md-block">
      <a href="" class="text-decoration-none mx-3"><i class="fa-brands fa-facebook-f text-white rounded-2 link-primary"></i></a>
      <a href="" class="text-decoration-none mx-3" target="_blank">
        <i class="fa-brands fa-twitter text-white rounded-2 link-primary"></i>
      </a>
      <a href="" class="text-decoration-none mx-3" target="_blank"><i class="fa-brands fa-instagram  text-white rounded-2 link-primary"></i></a>
  
      <a href="" class="text-decoration-none mx-3" target="_blank">
         <i class="fa-brands fa-whatsapp text-white rounded-2 link-primary"></i>
        </a>
    </div>
  </div>
  </div>
  <!------------ header end ------------>
<nav class="navbar navbar-expand-lg">
  <div class="container-lg d-flex align-items-center justify-content-between">
      <!-- logo -->
      <a href="index.html" class="navbar-brand d-flex align-items-center">
        <div>
          <img src="images/image_31515-removebg-preview 1.svg" width="80" alt="">
        </div>
        <div>
          <img src="images/image_31515.svg" alt="">
        </div>
      </a>

      <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse key mx-n3" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3 text-warning">
              <li class="nav-item me-3 fw-semibold ">
                  <a class="nav-link text-black link-primary active" href="index.html">Home</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link text-black link-primary" href="about.html">About</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link text-black link-primary" href="services.html">Services</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link text-black link-primary" href="gallery.html">Gallery</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                <a class="nav-link text-black link-primary" href="our-team.html">Our team</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link text-black link-primary" href="contact-us.html">Contact us</a>
              </li>
              
            </ul>
      </div>

      <a class="btn-book rounded-5 py-1 text-black d-flex align-items-center text-decoration-none fs-7 d-none d-lg-flex " href="">
        العربية
        <div>
          <img src="images/translate.svg" class="mx-1" alt="">
        </div>
      </a>
      
  </div>
  
</nav>
<!-- End NavBar  -->
  `);
}
function MainFooter() {
  document.write(`
  <footer class="py-5 bg-secondary">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <a href="index.html" class="d-flex align-items-center text-decoration-none">
                <div>
                  <img src="images/logo.svg" class="img-fluid" alt="">
                </div>
                <div>
                  <img src="images/image_31515-removebg-preview 2.svg" class="img-fluid" alt="">
                </div>
              </a>
              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
            <div class="col-md-4 mt-5 mt-md-0">
              <div>
                <h3 class="text-white">Overview</h3>
                <div class="row">
                  <div class="col-md-6 d-flex flex-column">
                    <a href="about.html" class="text-decoration-none text-white link-primary">About</a>
                    <a href="services.html" class="text-decoration-none text-white link-primary">Services</a>
                    <a href="gallery.html" class="text-decoration-none text-white link-primary">Gallary</a>
                  </div>
                  <div class="col-md-6 d-flex flex-column">
                    <a href="our-team.html" class="text-decoration-none text-white link-primary">Our team</a>
                    <a href="contact-us.html" class="text-decoration-none text-white link-primary">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5 mt-md-0">
              <h3 class="text-white">Lets chat!</h3>
              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
              <ul class="list-unstyled m-0 p-0">
                <div class="row g-4">
                  <div class="col-lg-8 d-flex justify-content-lg-between col-6 col-md-12 justify-content-between">
                    <a href="" class="text-decoration-none" target="_blank"><i class="fa-brands fa-facebook-f text-white fs-4 rounded-2 link-primary"></i></a>
                    <a href="" class="text-decoration-none" target="_blank">
                      <i class="fa-brands fa-twitter text-white fs-4 rounded-2 link-primary"></i>
                    </a>
                    <a href="" class="text-decoration-none" target="_blank"><i class="fa-brands fa-instagram  text-white fs-4 rounded-2 link-primary"></i></a>
                
                    <a href="" class="text-decoration-none" target="_blank">
                       <i class="fa-brands fa-whatsapp text-white fs-4 rounded-2 link-primary"></i>
                      </a>
                  </div>
                
                </div>
              </ul>  
            </div>
          </div>
            <hr class="text-white border-white"/>
          <div class="d-flex justify-content-between flex-wrap">
            <div class="d-flex align-items-center">
              <div>
                <img src="images/location.svg" alt="">
              </div>
            <span class="text-white mx-1 mt-1"> Riyadh - KSA</span> 
            </div>
            <ul class="list-unstyled d-flex justify-content-between">
              <li><a href="terms.html" class="text-decoration-none text-white mx-2 link-primary">Terms and conditions</a></li>
              <li><a href="privacy.html" class="text-decoration-none text-white mx-2 link-primary">Privacy police </a></li>
              <li><a href="faq.html" class="text-decoration-none text-white mx-2 link-primary">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>
  `);
}

function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-white justify-content-between">
  <!-- logo -->
  <a href="index.html" class="navbar-brand d-flex align-items-center">
    <div>
      <img src="images/image_31515-removebg-preview 1.svg" width="80" alt="">
    </div>
    <div>
      <img src="images/image_31515.svg" alt="">
    </div>
  </a>
    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-white hover-links">
    <ul class="navbar-nav d-flex">
      <li class="nav-item fw-bold">
          <a class="nav-link text-black active link-primary" href="index.html">Home</a>
      </li>
      <li class="nav-item fw-bold">
          <a class="nav-link text-black active link-primary" href="about.html">About Us</a>
      </li>
      <li class="nav-item fw-bold">
          <a class="nav-link text-black active link-primary" href="services.html">Services</a>
      </li>
      <li class="nav-item fw-bold">
          <a class="nav-link text-black active link-primary" href="gallery.html">Gallery</a>
      </li>
      <li class="nav-item fw-bold">
          <a class="nav-link text-black active link-primary" href="our-team.html">Our-team</a>
      </li>
      <li class="nav-item fw-bold">
          <a class="nav-link text-black active link-primary" href="contact-us.html">Contact Us</a>
      </li>
    
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}



function BtnBackToTop() {
  document.write(`
  <button
        type="button" title="Back to top"
        class="back-to-top btn btn- text-white rounded-circle py-2 px-2">
  <img src="images/arrow-up.svg" class="mb-3" width="18" />
  </button>  
  `);
}
function WhatsApp() {
  document.write(`
  <a href="https://wa.me/+97334479384" class="whats-app btn btn-info py-2 px-2 rounded-circle" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Whatsapp">
  <i class="bi bi-whatsapp my-float"></i>
  </a>  
  `);
}




