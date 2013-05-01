$(document).ready(function() {
	$('#new_todo_item').on('submit', function(event){
		event.preventDefault();
		// {todo_item: {name: "milk the cow"}}
		var form = $(this);
		var name = $('#todo_item_name').val();
		$.ajax({
			url: form.attr('action'),
			method: form.attr('method'),
			data: {
				"todo_item": {
					"name": name,
					"due_at": "May 1, 2013"
				}
			},
			dataType: "json",
			success: function(asdf) {
				var table = $('table');
				var row = $('<tr><td>' + asdf.id + '</td><td>' + asdf.name + '</td><td>' + asdf.due_at + '</td></tr>');
				row.appendTo(table);
			},
			error: function(){
				alert("Couldn't add a todo because the server was broken :(");
			}
		});
	});

});
