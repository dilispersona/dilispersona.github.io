var myDivLoader4 = document.getElementById("card_4_loader");
            var myDiv4 = document.getElementById("card_4");            

            show4 = function(){
                myDivLoader4.style.display = "block";
                setTimeout(hide4, 1400);
            };

            hide4 = function(){
                myDivLoader4.style.display = "none";
            };

            hideLoader4 = function(){
                myDiv4.style.display = "none";
                setTimeout(showDiv4, 1400); 
            };
            showDiv4 = function(){
                myDiv4.style.display = "block";
            };

            show4();
            hideLoader4();
