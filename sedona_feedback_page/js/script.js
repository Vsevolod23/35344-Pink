(function() {

    var btnIn = document.querySelectorAll(".counter-action"),
        form = document.querySelector(".response"),
        conteiner = form.querySelector(".same-row"),
        template = document.querySelector("#input-template").innerHTML,
        adultCount = document.querySelector('.js-adultCount');

        childCount = document.querySelector('.js-childCount');

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
//добавил проверку на кнопки числового поля "кол-во детей"
                if (input.classList.contains('js-childCount')) {
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
                    "counter": counter,
                    "age": "взрослого"
                });
            }
            
            var html = Mustache.render(template, {
                list: list
            });

            if (addedRowsL > 0) {
                addedRows[addedRowsL - 1].insertAdjacentHTML('afterend', html);
            } 
             //добавил проверку которая не работает 
            else if (document.querySelector('.js-addedRow2') > 0) {
                 document.querySelectorAll('.js-addedRow2').insertAdjacentHTML('beforebegin', html);
            }
            else {
                // Когда ни одна строка до этого не была вставлена
                document.querySelector('.js-countTravelers').insertAdjacentHTML('afterend', html);  
            }
        }       
    });

// добавил событие на эту кнопки числового поля "кол-во детей"

childCount.addEventListener('change', function(){   
        var count = parseInt(this.value, 10),
            addedRows2 = document.querySelectorAll('.js-addedRow2'),
            counter = addedRows2.length + 1;
        
        var i = 0,
            addedRowsL2 = addedRows2.length;

            if (addedRowsL2 > count) {
            for (i = 0; i < addedRowsL2; i++) {
                if (i >= count) {
                    addedRows2[i].parentNode.removeChild(addedRows2[i]);
                }
            }
        } else if (addedRowsL2 < count) {
            var k = addedRowsL2,
                list2 = [];

            for (k = addedRowsL2; k < count; k++, counter++) {
                list2.push({
                    "label" : "text" + (10 + counter),
                    "counter": counter,
                    "age": "ребенка"
                });
            }
            
            var html2 = Mustache.render(template, {
                list2: list2
            });

            if (addedRowsL2 > 0) {
                addedRows2[addedRowsL2 - 1].insertAdjacentHTML('afterend', html2);
            }  
             //добавил проверку которая не работает 
            else if (document.querySelectorAll('.js-addedRow') > 0) {
                 document.querySelectorAll('.js-addedRow').insertAdjacentHTML('afterend', html2);
            }
            else {
                // Когда ни одна строка до этого не была вставлена
                document.querySelector('.js-countTravelers').insertAdjacentHTML('afterend', html2);
            }
        }       
    });

})();