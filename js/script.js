(function() {

    var toggle = document.querySelector(".page-header__menu-btn");
    var showNav =  document.querySelector(".page-header__nav-menu");
    var openMenu = document.querySelector(".page-header");
    toggle.addEventListener( "click", function() {
     
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        (this.classList.contains("active") === true) ? showNav.classList.add('page-header__nav-menu-show') : showNav.classList.remove('page-header__nav-menu-show');
        (this.classList.contains("active") === true) ? openMenu.classList.add('page-header-open') : openMenu.classList.remove('page-header-open');

    });

    


 })();