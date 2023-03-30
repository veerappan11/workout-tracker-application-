document.querySelector('form').addEventListener('submit', function(e) {
	// Prevent the form from submitting and reloading the page
	e.preventDefault();

	// Get the values of the form inputs
	var exerciseName = document.querySelector('#exercise-name').value;
	var exerciseType = document.querySelector('#exercise-type').value;
	var exerciseDuration = document.querySelector('#exercise-duration').value;

	// Create a new table row with the exercise details
	var tableRow = document.createElement('tr');
	tableRow.innerHTML = '<td>' + exerciseName + '</td>' +
	                      '<td>' + exerciseType + '</td>' +
	                      '<td>' + exerciseDuration + '</td>';

	// Add the new row to the table
	document.querySelector('tbody').appendChild(tableRow);

	// Clear the form inputs
	document.querySelector('#exercise-name').value = '';
	document.querySelector('#exercise-duration').value = '';
});