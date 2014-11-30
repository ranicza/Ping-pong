$(document).ready(function() {
	$("#start-game").submit(function(event){

		var n = parseInt($('#num').val());
		if(n <= 0 || n == null){
			confirm("Введите положительное число!");
		}
		else{
			$("#for-user").hide();

			for (var i= 1; i <= n; i ++){
				var element_to_append = "<p>" + i + "</p>";

				if(i % 3 == 0 && i % 5 == 0){
					$("#quote").append('<p>ping-pong</p>');
				}
				else if(i % 3 == 0){
					$("#quote").append('<p>ping</p>');
				}
				else if(i % 5 == 0){
					$("#quote").append('<p>pong</p>');
				} else {
					$("#quote").append(element_to_append);
				}
				setTimeout(function stub(){},500);
			}
		$('#result').show();
		}

		$("#btn-two").click(function(event) {
			$("#for-user").show();
			$("#result").hide();
			$("#quote").empty();
		});

		event.preventDefault();
	});

});