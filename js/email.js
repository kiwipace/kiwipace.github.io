console.log( "ready!" );

var contactForm = $("form[name='contact']");

var fullname =  $("#fullname");
var email = $("#email");
var note =  $("#note");

contactForm.validate({

	rules:{
	 fullname:{
		required:true
	},  
	 email:{
		required:true,
		email:true
	 },
	 note:{
		required:true,
	 },
	},
	message:{
		name:"Please enter your name.",
		email:"Please enter a valid mail address.",
		message:"Please enter a message."
	},
	submitHandler: function(form) {
	
        if(!email.val() && !note.val()){return false};
      	sendEmail();

    	},
        onsubmit:true,
	invalidHandler:function(){}
});



//$("#submit").click(contactForm.valid());


 function sendEmail(){

	toastr.options = {"positionClass": "toast-bottom-right"}

        var data = {
                   name:fullname.val(),
                   email:email.val(),
                   note:note.val()
                };

        var url = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/kiwipace-web-ppmfh/service/kiwipace-messenger/incoming_webhook/send";

        $.ajax({
                url:url,
                dataType:"json",
                type:"POST",
                contentType: 'application/json',
                data:JSON.stringify(data),
                success: function(data){

                        Command: toastr["success"]("Message sent!")
			contactForm.trigger("reset");
                },
                error:function(data){

                        console.log(data);

                },

             });


}
