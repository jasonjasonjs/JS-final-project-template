$(document).ready(function() {
	$("#btn").on("click",showmodal);
})
 

$(document).ready(function (){
	$(#"button").on("click",showmodal);
	$(#"check").on("click",);
}
 
function ff(){
	$("body").on("click","#button", function(){
		var fruit= "";

		var name = $("name").val();
		var age = $("age").val();   
		

        if( $("#one ").prop("checked") ){ 
         	 fruit += $("#one").val(); + ", ";
        }
         if( $("#two ").prop("checked") ){  
         	 fruit += $("#two ").val(); + ", ";
        }              
          if( $("#three ").prop("checked") ){  
         	 fruit += $("#three ").val(); + ", ";
        }      
          if( $("#four ").prop("checked") ){  
         	 fruit += $("#four ").val(); + ", ";
        }
        if (fruit.length-2){
        	fruit = fruit.substr(0,fruit.length-2);
        }

        var message = "hello," + age + "歲的" + name + ",原來你愛吃:" + fruit;

        alert(message + fruit);

        $(name).val("");
		$(age).val("");	
		$("#one").prop("checked,false");
		$("#two").prop("checked,false");
		$("#three").prop("checked,false");
		$("#four").prop("checked,false");
    });
}
 

