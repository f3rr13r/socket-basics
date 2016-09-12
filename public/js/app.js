
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();


console.log(name + ' wants to join ' + room);


var $chatRoom = jQuery('.chat-room');

$chatRoom.append('<h1 class="text-center"><strong>' + room + '</strong</h1>');


socket.on('connect', function () {

	console.log('User connected to socket.io server');

	socket.emit('joinRoom', {

		name: name,
		room: room

	});

});


socket.on('message', function (message) {

	var momentTimestamp = moment.utc(message.timestamp);
	var $messages = jQuery('.messages');
	var $message = jQuery('<li class="list-group-item"></li>');




	console.log('New message:');
	console.log(message.text);

	$message.append('<p><strong>' + momentTimestamp.local().format('h:mm a') + ' ' + message.name + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');


	// Add it to div.
	$messages.append($message);

});





// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {

	event.preventDefault();

	var $message = $form.find('input[name=message]')

	socket.emit('message', {

		name: name,
		text: $message.val()

	});

	// Clear the text input field.
	$message.val("");

});