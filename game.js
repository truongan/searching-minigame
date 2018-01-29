function fix_width(i, size){
	i = String(i);
	size = String(size);
	while(i.length < size.length){
		i = "0" + i;
	}
	return i;
}
function new_game(){
	var ordered = $("#ordered").is(':checked');
	console.log(ordered);
	var size = $("#size").val();
	var x = 0;
	var increase_factor = Math.floor( Math.random() * 4+1);
	//$("#placeholder_for_buttons").html("");
	$("#x_value").html(String(Math.floor( Math.random() * increase_factor * size)));
	var exist = false;
	for (var i = 1; i <= size; i++) {
		if (ordered) x += Math.floor( Math.random() * (increase_factor *1.85));
		else x = Math.floor( Math.random() * increase_factor * size);
		if (x == $("#x_value").text()) exist = true;
		$("#placeholder_for_buttons").append(
			'<button type="button" data-value="' 
				+ x 
				+ '" class="btn btn-primary btn-lg buttonbox">'
				+'<br/><span class="badge badge-secondary">' 
				+ fix_width(i, increase_factor * size) 
				+'</span>'
				+'</button>'
		);
	}

	$("#not_exist").click(function(exist){
		if(exist){
			$(".modal-title").html("WRONG");
			$(".modal-body > p").html("That value is in there somewhere")
			$('#myModal').modal(options)
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


});
