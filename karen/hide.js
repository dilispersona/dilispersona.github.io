 (function(){
     $(document).ready(function(){
            $(".o365cs-notifications-toastControl").hide();
            var myDivLoader = document.getElementById("card_0_loader");
            var myDiv = document.getElementById("card_0_pack");            

            show = function(){
                myDivLoader.style.display = "block";
                setTimeout(hide, 2000); 
            };

            hide = function(){
                myDivLoader.remove();
            };

            hideLoader = function(){
                myDiv.style.display = "none";
                setTimeout(showDiv, 2000); 
            };
            showDiv = function(){
                myDiv.style.display = "block";
            };

            show();
            hideLoader();



            var myDivLoader1 = document.getElementById("card_1_loader");
            var myDiv1 = document.getElementById("card_1_pack");            

            show1 = function(){
                myDivLoader1.style.display = "block";
                setTimeout(hide1, 2500);
            };

            hide1 = function(){
                myDivLoader1.remove();
            };

            hideLoader1 = function(){
                myDiv1.style.display = "none";
                setTimeout(showDiv1, 2500); 
            };
            showDiv1 = function(){
                myDiv1.style.display = "block";
            };

            show1();
            hideLoader1();

            var myDivLoader2 = document.getElementById("card_2_loader");
            var myDiv2 = document.getElementById("card_2_pack");            

            show2 = function(){
                myDivLoader2.style.display = "block";
                setTimeout(hide2, 3000);
            };

            hide2 = function(){
                myDivLoader2.remove();
            };

            hideLoader2 = function(){
                myDiv2.style.display = "none";
                setTimeout(showDiv2, 3000); 
            };
            showDiv2 = function(){
                myDiv2.style.display = "block";
            };

            show2();
            hideLoader2();

            var myDivLoader3 = document.getElementById("card_3_loader");
            var myDiv3 = document.getElementById("card_3_pack");            

            show3 = function(){
                myDivLoader3.style.display = "block";
                setTimeout(hide3, 4000);
            };

            hide3 = function(){
                myDivLoader3.remove();
            };

            hideLoader3 = function(){
                myDiv3.style.display = "none";
                setTimeout(showDiv3, 4000); 
            };
            showDiv3 = function(){
                myDiv3.style.display = "block";
            };

            show3();
            hideLoader3();

            var myDivLoader4 = document.getElementById("card_4_loader");
            var myDiv4 = document.getElementById("card_4_pack");            

            show4 = function(){
                myDivLoader4.style.display = "block";
                setTimeout(hide4, 5000);
            };

            hide4 = function(){
                myDivLoader4.remove();
            };

            hideLoader4 = function(){
                myDiv4.style.display = "none";
                setTimeout(showDiv4, 5000); 
            };
            showDiv4 = function(){
                myDiv4.style.display = "block";
            };

            show4();
            hideLoader4();

            // hide banner


            $("#dismissInfoBoxButton").click(function(){
                $("#infoBoxContainer").hide();
            })


        
          



     })
  
  })();