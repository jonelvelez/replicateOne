     /* Navbar animation */
     
     let nav = document.querySelector('.navbar');
     let navbarIcon = document.querySelector('.navbar .fa-bars')
     let navbarClose = document.querySelector('.navbar .fa-times')

     navbarIcon.addEventListener('click', () => {
         nav.style.backgroundColor = "#d8d7d7";
         navbarIcon.style.display = "none";
         navbarClose.style.display = "block";
     });

     navbarClose.addEventListener('click', () => {
      nav.style.backgroundColor = "transparent";
      navbarIcon.style.display = "block";
      navbarClose.style.display = "none";
   });

 

     // End of Navbar animation
   

     /* Intro Section Icon scrolldown */
     $('.intro .icon').click(function(e){
        e.preventDefault();
        var n = $(window).height()/1;
        $('html, body').animate({ scrollTop: n }, 500);
    });
        
    // End of Intro Section Icon scrolldown

    
    /* Float Icon Screen */

    function scrollAnimation(){

      let icon = document.querySelector('.float-wrapper .float');
      let firstposition = icon.getBoundingClientRect().bottom;
      let screenposition = window.innerHeight / 1;
 
      if(firstposition < screenposition){
         icon.style.opacity = "1";
      } 
       
    }

    window.addEventListener('scroll', scrollAnimation);

    $(".float-wrapper .float").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  
    
    // End of Float Icon Screen