$(document).ready(function() {

	playScenario();

	$(".frame1").animate({'opacity': "0"}, 1900, function() {
		$(".frame2").show().animate({'opacity': "1"}, 1900, function() {
			$(".frame2").animate({'opacity': "0"}, 1900);
			$(".frame3").show().animate({'opacity': "1"}, 1900, function() {
				$(".frame3").animate({'opacity': "0"}, 1900);
				$(".frame4").show().animate({'opacity': "1"}, 1900);
			});
		});
	});


	$('.ryu').mouseenter(function() {
		$(".ryu-ready").show();
		$(".ryu-standing").hide();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-standing").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate({"left": "300px"}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '-150px');
			}
		);
	})

	.mouseup(function() {
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();	
		//ryu goes back to his ready position
	});

	// $('html').keydown(function(88) {
	// });

 	$('html').keydown(function(e) {
	   if(e.keyCode == 88){
	     console.log("x down");
	  	$(".ryu-standing").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();	
		$(".ryu-cool").show();	
	   }
 	});

 	$('html').keyup(function(e) {
	   if(e.keyCode == 88){
	     console.log("x up");
		$(".ryu-standing").hide();
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();	
		$(".ryu-cool").hide();	
	   }
 	});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playScenario () {
  $('#scenario')[0].volume = 0.5;
  $('#scenario')[0].load();
  $('#scenario')[0].play();
}