$("#my-form").submit(async function(event) {
	event.preventDefault();
	var data = new FormData(this);
	var name = $("#name").val();

	fetch($(this).attr('action'), {
		method: $(this).attr('method'),
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		$("#my-form-status").text(name + ", thanks for your submission!");
		this.reset();
	}).catch(error => {
		$("#my-form-status").text("Oops! There was a problem submitting your form.");
	});
});
