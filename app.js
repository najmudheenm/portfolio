
$.validator.addMethod("alpha", function(value, element) {
    console.log(element)
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    // --                                    or leave a space here ^^
});

jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim(' ').length >=4;  
  }, "At leest four charecters");

//email
$.validator.addMethod("isEmail", function(value, element) {
    console.log(element)
    return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
   
});
//ajax call


$(document).ready(function (e) {
   

        $("#form").validate({
            rules:{
                name:{
                    
                    required:true,
                    minlength:4,
                    alpha: true,
                    noSpace: true,
                },
                email:{
                    required:true,
                    isEmail:true
                },
                
                
            },
            messages:{
                name:{
                    alpha:"Please enter letters only"
                },
                email:{
                    isEmail:"Email not valid"
                }
                
                
            }, 
            submitHandler:function(){
                alert ("success fully")
            }
        })
        
    })
    $("#form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwF_a8MuUKGIDrojcrbYKEkkb4zYomfeM1BnKRCLEwiEN6O6UCn9_78GWAMrgF8ap3Lfg/exec",
            data:$("#form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })