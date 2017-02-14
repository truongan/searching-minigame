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
	var increase_factor = 3;
	$("#placeholder_for_buttons").html("");
	for (var i = 1; i <= size; i++) {
		if (ordered) x += Math.floor( Math.random() * (increase_factor *1.5));
		else x = Math.floor( Math.random() * increase_factor * size);
		$("#placeholder_for_buttons").append(
			'<button type="button" data-value="' + x + '" class="btn btn-default btn-lg buttonbox"><br/><span class="badge">' + fix_width(i, increase_factor * size) +'</span>'
		);
	}
	$("#x_value").html(String(Math.floor( Math.random() * increase_factor * size)));
	$(".buttonbox").click(function(btn){
		if ($(this).hasClass('active')) return ;

		$("#score").text( parseInt($("#score").text()) + 1);
		var a = $("button.active");
		console.log(a);
		$("button > span.label").remove();
		a.removeClass('active');
		console.log(a);
		$(this).addClass('active');
		$(this).prepend('<span class="label label-primary">' +  $(this).data('value') + '</span>' );
	});
}
$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
    });
	$("#ordered").change(new_game);
	$("#size").change(new_game);
	new_game();
});
