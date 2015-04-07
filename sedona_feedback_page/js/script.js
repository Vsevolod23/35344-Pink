(function() {
    
var btnIn = document.querySelectorAll(".counter-action");
var tablo = document.querySelectorAll(".counter-input");

var form = document.querySelector(".response");
var conteiner = form.querySelector(".same-row");
var template = document.querySelector("#input-template").innerHTML;

var adultCount = document.querySelector('.js-adultCount');


for (var i = 0; i<btnIn.length; i++) {
    var btn = btnIn[i];

    btn.addEventListener("click", function(){

        var counterParent = this.parentNode;
        var input = counterParent.querySelector('.counter-input');

        var counter = 1;
        var addedRows = document.querySelectorAll('.js-addedRow');

        counter = counter + addedRows.length;

        // var i = counter + 10;
        
        // var html = Mustache.render(template, {
        //     "label" : "text" + i,
        //     "counter": counter
        // });  


        // console.log(this.classList.contains('minus'));

        if (this.dataset.action  == 'minus' ) {
            input.value++;
            console.log("сработал +");

                if (this.classList.contains('js-pepe') == true) {
                    console.log("сработал+ на кнопке кол-вщ взрослых");

                    var template = document.querySelector("#input-template").innerHTML;
                    var addedRows = document.querySelectorAll('.js-addedRow'),
                    counter = addedRows.length + 1;

                    var html = Mustache.render(template, {
                        "label" : "text" + (10 + counter),
                        "counter": counter
                    });

                    if (addedRows.length > 0) {
                        addedRows[addedRows.length - 1].insertAdjacentHTML('afterend', html);
                        console.log("первая проверка");
                    } else {
                        // Когда ни одна строка до этого не была вставлена
                        document.querySelector('.js-countTravelers').insertAdjacentHTML('afterend', html); 
                        // conteiner.innerHTML = conteiner.innerHTML + html; 
                        console.log("вторая проверка");
                    }   

                }
            // conteiner.innerHTML = conteiner.innerHTML + html;
         } 

         else if (this.classList.contains('plus') == true && input.value > 1) {
            input.value--;
                // console.log(this.classList.contains('plus'));

         } 

         // else if (this.classList.contains('js-pepe') === true ) {
         //    // var rr = this.classList.contains('js-pepe');
         //    // console.log(this.classList.contains('js-pepe'));
         //    console.log(123);
         // } 

         else return;

        // console.log(counterParent);

    });

}

adultCount.addEventListener('change', function(){   
    var count = parseInt(this.value, 10),
        addedRows = document.querySelectorAll('.js-addedRow'),
        counter = addedRows.length + 1;

    if (addedRows.length > count) {
        
        for (var i = 0; i < addedRows.length; i++) {
            if (i >= count) {
                addedRows[i].innerHTML = '';
            }
        }
    } else if (addedRows.length < count) {
        var list = [];

        for (var k = addedRows.length; k < count; k++, counter++) {
            list.push({
                "label" : "text" + (10 + counter),
                "counter": counter
            });
        }
        
        var html = Mustache.render(template, {
            list: list
        });

        if (addedRows.length > 0) {
            addedRows[addedRows.length - 1].insertAdjacentHTML('afterend', html);
        } else {
            // Когда ни одна строка до этого не была вставлена
            document.querySelector('.js-countTravelers').insertAdjacentHTML('afterend', html);  
        }   

        // conteiner.innerHTML = conteiner.innerHTML + html;
    }

   
});


// var btnAdd = document.querySelector('.js-pepe');

//         btnAdd.addEventListener("click", function(){
//             console.log("gy");

//             var template = document.querySelector("#input-template").innerHTML;

//             var conteiner = form.querySelector(".same-row");
//             var count = parseInt(this.value, 10),
//             addedRows = document.querySelectorAll('.js-addedRow'),
//             counter = addedRows.length + 1;

//             var html = Mustache.render(template, {
//                 "label" : "text" + (10 + counter),
//                 "counter": counter
//             });

//             if (addedRows.length > 0) {
//                 addedRows[addedRows.length - 1].insertAdjacentHTML('afterend', html);
//                 console.log("gy1");
//             } else {
//                 // Когда ни одна строка до этого не была вставлена
//                 document.querySelector('.js-countTravelers').insertAdjacentHTML('afterend', html); 
//                 conteiner.innerHTML = conteiner.innerHTML + html; 
//                 console.log("gy2");
//             }   


//             console.log("gy3");
//         });

// var form = document.querySelector(".response");
// var conteiner = form.querySelector(".same-row");
// var btnMinus = document.querySelectorAll(".counter-action");

// for (var i = 0; i<btnMinus.length; i++) {
//  var btnMin = btnMinus[i];

//  btnMin.addEventListener("click", function(){
//      var counterParent = this.parentNode;
//      var input = counterParent.querySelector('.counter-input');
//      var div1 = document.createElement("div");
//      div1.classList.add("row");
//      var div2 = document.createElement("div");
//      div2.classList.add("col");
//      div2.classList.add("s-4");
//      var label = document.createElement("label");
//      var input = document.createElement("input");
//      // input.type = "text";

//      if (this.dataset.action  == 'plus' ) {
//          div2.appendChild(label);
//          div2.appendChild(input);
//          div1.appendChild(div2);
            

//          conteiner.appendChild(div1);


//          console.log(counterParent);
//       } 

//  });
// }






})();


// Фильтр числового поля 

// (function() {

// function filter_input(e,regexp)
// {
//   e=e || window.event;
//   var target=e.target || e.srcElement;
//   var isIE=document.all;

//   if (target.tagName.toUpperCase()=='INPUT')
//   {
//     var code=isIE ? e.keyCode : e.which;
//     if (code<32 || e.ctrlKey || e.altKey) return true;

//     var char=String.fromCharCode(code);
//     if (!regexp.test(char)) return false;
//   }
//   return true;
// }

// })();