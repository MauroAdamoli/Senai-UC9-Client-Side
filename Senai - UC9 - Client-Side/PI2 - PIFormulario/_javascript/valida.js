$(function() {
    $( "#acordeon" ).accordion({
        active: false, 
        collapsible: true
    });


  $( "#form" ).validate({   	debug: true,
	rules: {
	   nome: {        required: true,        minlength: 10    }		
	},
	messages: {
	    nome: {
        	required: "<li>Por favor entre com seu nome.</li>",
	        minlength: "<li>Seu nome deve ser maior.</li>"
    		}
		
	}
    });


   $('.mask-cpf').mask('999.999.999-99'); 

   $('#tel').mask("(99)9999-9999");
   
   $("#cel").mask("(99)9999-9999?9");

  });