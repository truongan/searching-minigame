function fix_width(i, size){
	i = String(i);
	size = String(size);
	while(i.length < size.length){
		i = "0" + i;
	}
	return i;
}
$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
    });
	$("#new_game").click(function(){
		var size = $("#size").val();
		var max_value = size * 3;
		for (var i = 1; i <= size; i++) {
			var x = Math.floor( Math.random() * max_value);
			$("#placeholder_for_buttons").append(
				'<button type="button" data-value="' + x + '" class="btn btn-default btn-lg buttonbox"><br/><span class="badge">' + fix_width(i, max_value) +'</span>'
			);
		}
		$(".buttonbox").click(function(btn){
			console.log($(this));
			console.log(btn);
			console.log($(this).value);
			$(this).prepend($(this).data('value'));
		})
	})
});