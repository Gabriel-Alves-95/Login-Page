const inputs = document.querySelectorAll('.box > input');

inputs.forEach( function(input, index) {

    input.addEventListener('focus', function() {

        input.attributes.placeholder.value = '';
        
    });

    input.addEventListener('focusout', function(){

        if ( input.attributes.placeholder.value === '' ) {

            if ( index === 0 ) {
                input.attributes.placeholder.value = 'name@email.com';
            } else {
                input.attributes.placeholder.value = '********';
            }            
        }

    });


});

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
      let viewheight = window.outerHeight;
      let viewwidth = window.outerWidth;
      let viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);
  
  });
