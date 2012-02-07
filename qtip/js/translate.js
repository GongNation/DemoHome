// Initialize google API
google.load("language", "1");
 
// Define our text selection grabber method
function getSelected()
{
	if(window.getSelection) { txt = window.getSelection().toString(); }
	else if(document.getSelection) { txt = document.getSelection().toString(); }
	else if(document.selection) { txt = document.selection.createRange().text; }
 
	return txt || '';
}
 
// Setup a single tooltip on the document body element
$(document.body).qtip(
{
	content: 'Translating...', // Set an initial loading message...
	position: {
		my: 'bottom right',
		at: 'top left',
		viewport: $(window), // Keep it on screen if possible
		target: 'mouse', // Position it where the mouse up event happens...
		adjust: { mouse: false } // ... but don't follow the mouse
	},
	show: false, // Disable the default show event
	hide: 'unfocus', // Hide the tooltip when it loses focus
	//style: 'ui-tooltip-translate ui-tooltip-shadow' // Make it look nice... :)
	style: 'ui-tooltip-translate ui-tooltip-shadow ui-tooltip-tipsy' // Make it look nice... :)
})
 
.bind('mouseup', function(event) {
	var text;
	
	// Grab the text that is selected and check it has length
	if((text = getSelected()).length)
	{
		// Retrieve qTip's API
		var api = $(this).qtip();
 
		// Set translating... as translation loads and show the tooltip
		api.set('content.text', 'Translating...');
		api.show(event); // ..make sure to pass the event object os it positions properly!
 
		// Translate the text using the google language API
		google.language.translate(text, "ja", "zh", function(result){
			// Set the new tooltip content using the qTip API
			api.set('content.text', result.translation);
		});
	}
});