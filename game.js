function fix_width(i, size){
	i = String(i);
	size = String(size);
	while(i.length < size.length){
		i = "0" + i;
	}
	return i;
}
exist = false;
function new_game(){
	var ordered = $("#ordered").is(':checked');

	var size = $("#size").val();
	var x = 0;
	var increase_factor = Math.floor( Math.random() * 3+1);
	$("#placeholder_for_buttons").html("");
	$("#x_value").html(String(Math.floor( Math.random() * increase_factor * size)));
	exist = false;
	for (var i = 1; i <= size; i++) {
		if (ordered) x += Math.floor( Math.random() * (increase_factor *1.85));
		else x = Math.floor( Math.random() * increase_factor * size);
		if (x == $("#x_value").text()) exist = true;


		$("#placeholder_for_buttons").append(
			'<button type="button" data-value="'
				+ x
				+ '" class="btn btn-primary btn-lg mt-1 buttonbox">'
				+'<br/><span class=""><kbd>'
				+ fix_width(i, increase_factor * size)
				+'</samp></kbd>'
				+'</button> ' //There HAVE TO BE ONE SPACE after button tag otherwise bootstrap will mess up the spacing
		);
	}

	$("#not_exist").click(function(){
		if(exist){
			$(".modal-title").html("WRONG");
			$(".modal-body ").html("That value is in there somewhere")
			$('#myModal').modal()
		} else {
			$(".modal-title").html("Congratulation");
			$(".modal-body ").html("That value indeed DOES NOT appear in any box")
			$('#myModal').modal()
		}
	});

	$(".buttonbox").click(function(){
		if ($(this).hasClass('active')) return ;

		$("#score").text( parseInt($("#score").text()) + 1);
		var a = $("button.active");
		console.log(a);
		$("button > span.badge-pill").remove();
		a.removeClass('active');
		console.log(a);
		$(this).addClass('active');
		$(this).prepend('<span class="badge badge-pill badge-danger">' +  $(this).data('value') + '</span>' );

		if ($(this).data('value') == $("#x_value").text()){
			$(".modal-title").html("Congratulation");
			$(".modal-body ").html("You have found the box contain that special value")
			$('#myModal').modal()
		}
	});
}
$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
    });

	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})

	$("#ordered").change(new_game);
	$("#size").change(new_game);
	new_game();
	//$("#placeholder_for_buttons").append('<button type="button" class="btn btn-lg btn-primary">Primary</button> <button type="button" class="btn btn-lg btn-secondary">Secondary</button> <button type="button" class="btn btn-lg btn-success">Success</button><button type="button" class="btn btn-lg btn-danger">Danger</button>');

});
