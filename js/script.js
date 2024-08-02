//

//

$(document).ready(function () {
	// POST GET

	// list user
	$.ajax({
		url: "https://reqres.in/api/users?page=2",
		success: function (response) {
			for (let user in response.data) {
				var email = response.data[user].email;
				var ime = response.data[user].first_name;
				$("#imeLista").append("<p>" + ime + ":" + email + "</p>");
			}
		},
	});

	// single user
	$.ajax({
		url: "https://reqres.in/api/users/2",
		success: function (response) {
			var ime = response.data.first_name;
			var prezime = response.data.last_name;
			var email = response.data.email;

			console.log(ime, prezime);
			$("#singleUser").append(
				"<p>" + ime + " " + prezime + " : " + email + "</p>"
			);
		},
	});

	// single user not found
	$.ajax({
		url: "https://reqres.in/api/users/23",
		success: function (response) {
			console.log(response);
		},
	});

	// list <resource>
	$.ajax({
		url: "https://reqres.in/api/unknown",
		success: function (response) {
			let boja = response.data[3].name;
			let godina = response.data[0].year;
			let pantone = response.data[4].pantone_value;

			// console.log(boja);
			$("#singleUser").append(
				"<p>" + boja + " " + godina + " " + pantone + "</p>"
			);
		},
	});

	// single <resource>
	$.ajax({
		url: "https://reqres.in/api/unknown/2",
		success: function (response) {
			console.log(response.data.color, response.data.name, response.data.id);
		},
	});

	//  single <resource> not found
	$.ajax({
		url: "https://reqres.in/api/unknown/23",
		success: function (response) {
			console.log(response);
		},
	});

	// create
	$.ajax({
		url: "https://reqres.in/api/users",
		type: "POST",
		data: {
			name: "Toma",
			job: "programer",
		},
		success: function (response) {
			// console.log(response);
		},
	});

	// update
	$.ajax({
		url: "https://reqres.in/api/users/2",
		type: "PUT",
		data: {
			name: "Milos",
			job: "webDev",
		},
		success: function (response) {
			console.log(response);
		},
	});

	// patch
	$.ajax({
		url: "https://reqres.in/api/users/2",
		type: "PATCH",
		data: {
			name: "Marko",
			job: "Graphic Designer",
		},
		success: function (response) {
			console.log(response);
		},
	});

	// delete
	$("#delete").click(function () {
		$.ajax({
			url: "https://reqres.in/api/users/2",
			type: "DELETE",
			success: function (response) {
				console.log("test");
				response;
			},
		});
	});

	// regiter successuful
	$.ajax({
		url: "https://reqres.in/api/register",
		type: "POST",
		data: {
			email: "eve.holt@reqres.in",
			password: "pistol",
		},
		success: function (response) {
			console.log(response);
		},
	});

	// register unsuccessuful
	$.ajax({
		url: "https://reqres.in/api/register",
		type: "POST",
		data: {
			email: "sydney@fife",
		},
		success: function (response) {
			console.log(response);
		},
	});

	// login successuful
	$.ajax({
		url: "https://reqres.in/api/login",
		type: "POST",
		data: {
			email: "eve.holt@reqres.in",
			password: "cityslicka",
		},
		success: function (response) {
			console.log(response);
		},
	});

	// login unsuccessuful

	$.ajax({
		url: "https://reqres.in/api/login",
		type: "POST",
		data: {
			email: "peter@klaven",
		},
		success: function (response) {
			console.log(response);
		},
	});

	// delayed response
	$.ajax({
		url: "https://reqres.in/api/users?delay=3",
		success: function (response) {
			$("#singleUser").append("<p>" + response.data[2].last_name + "</p>");
		},
	});
	console.log("test");

	//
	$("#registracija").click(function () {
		var ime = $("#name").val();
		var imejl = $("#email").val();
		$.ajax({
			url: "https://reqres.in/api/users",
			type: "POST",
			data: {
				name: ime,
				email: imejl,
			},
			success: function (response) {
				console.log(response);
			},
		});
	});
});
