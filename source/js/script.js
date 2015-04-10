(function() {

    var toggle = document.querySelector(".page-header__menu-btn");
    var showNav =  document.querySelector(".page-header__nav-menu");
    var openMenu = document.querySelector(".page-header");
    toggle.addEventListener( "click", function() {
     
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        (this.classList.contains("active") === true) ? showNav.classList.add('page-header__nav-menu-show') : showNav.classList.remove('page-header__nav-menu-show');
        (this.classList.contains("active") === true) ? openMenu.classList.add('page-header-open') : openMenu.classList.remove('page-header-open');

    });


    var sliderWr = document.querySelector(".slider-price-wrapper");
    var btnPagin = sliderWr.querySelectorAll(".pagination__item");
    var sliderPrise = sliderWr.querySelector(".slider-price__table");

    for (var i = 0; i < btnPagin.length; i++) {
        console.log("проверка");

        btnPagin[i].addEventListener("click", function() {
            console.log("проверка2");

            if (this.classList.contains('pagination__item-active') === true) {
                return;
            }


            var btnActive = document.querySelector(".pagination__item-active");
            btnActive.classList.remove('pagination__item-active');
            console.log("проверка3");

             var index = this.dataset.index;
             console.log(index);

            // var r = document.querySelector('.slider-price__table-move');
            // r.style.transform = 'translate(-255px, 0px)';

            for (var j = 0; j < btnPagin.length; j++) {
                if (this === btnPagin[j]) {

                    
                    btnPagin[j].classList.add('pagination__item-active');
                    console.log("проверка4");

                }
            }
         });

    }






















    // var sliderWr = document.querySelector(".slider-price-wrapper");
    // var btnPagin = sliderWr.querySelectorAll(".pagination__item");
    // var sliderPrise = sliderWr.querySelector(".slider-price__table");


    // // var i = 0,
    // //       btnPaginL = btnPagin.length;

    //     for (var i = 0; i <btnPagin.length; i++) {

    //     btnPagin[i].addEventListener( "click", function() {
    //         console.log("проверка");

    //         for (var j = 0; j < btnPagin.length; j++) {

    //             if(this.classList.contains('pagination__item') == true) {
    //                 console.log(j);
    //                 this.classList.add('pagination__item-active');
    //                 console.log("проверка1");
    //                 sliderPrise.classList.add('slider-price__table-move');
    //                 var r = document.querySelector('.slider-price__table-move');
    //                 console.log(r);
    //                 var t = r.style.transform;
    //                 r.style.transform = t +'translate(-255px, 0px)';
    //             }
    //             // console.log("проверка3");
    //             return j;
    //             console.log("проверка4");
    //         }
    //      });

    //     }

    


 })();