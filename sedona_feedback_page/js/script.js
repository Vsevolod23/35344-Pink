(function() {
    
    var btnIn = document.querySelectorAll(".counter-action"),
        form = document.querySelector(".response"),
        conteiner = form.querySelector(".same-row"),
        template = document.querySelector("#input-template").innerHTML,
        adultCount = document.querySelector('.js-adultCount');

    var i = 0,
        btnL = btnIn.length;

    for (i = 0; i < btnL; i++) {

        btnIn[i].addEventListener("click", function(){
            var counterParent = this.parentNode,
                input = counterParent.querySelector('.counter-input');

            if (this.dataset.action  == 'minus' && input.value > 0) {
                input.value--;
            } else if (this.dataset.action == 'plus') {
                input.value++;
            }

            if (input.classList.contains('js-adultCount')) {
                var event = document.createEvent('HTMLEvents');
                    
                event.initEvent('change', true, false);
                input.dispatchEvent(event);
            }
            
            return;
        });
    }

    adultCount.addEventListener('change', function(){   
        var count = parseInt(this.value, 10),
            addedRows = document.querySelectorAll('.js-addedRow'),
            counter = addedRows.length + 1;

        var i = 0,
            addedRowsL = addedRows.length;

        if (addedRowsL > count) {
            for (i = 0; i < addedRowsL; i++) {
                if (i >= count) {
                    addedRows[i].parentNode.removeChild(addedRows[i]);
                }
            }
        } else if (addedRowsL < count) {
            var k = addedRowsL,
                list = [];

            for (k = addedRowsL; k < count; k++, counter++) {
                list.push({
                    "label" : "text" + (10 + counter),
                    "counter": counter
                });
            }
            
            var html = Mustache.render(template, {
                list: list
            });

            if (addedRowsL > 0) {
                addedRows[addedRowsL - 1].insertAdjacentHTML('afterend', html);
            } else {
                // Когда ни одна строка до этого не была вставлена
                document.querySelector('.js-countTravelers').insertAdjacentHTML('afterend', html);  
            }
        }       
    });

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