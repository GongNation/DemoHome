/* SelectText
*
*/
function getSelected(flag) {
	if (document.selection) {
		var selecter = document.selection.createRange();
		var s = selecter.text;
		if (s != null && s.trim() != "") {
			SearchResult(s);
		}
	} else {
		var selecter = window.getSelection();
		if (selecter != null && selecter != "") {
			SearchResult(selecter);
		}
	}
}

function SearchResult(selecter) {
	url = 'http://www.baidu.com/s?wd=' + selecter;
	var html = '<iframe src="' + url + '" width="655px" height="650px" scrolling="auto" frameborder="0"></iframe>';
	$('body').qtip({ 
		content: {
			text: selecter
		},
		position:{
			my: 'top center',
			at: 'bottom center'
		},
		show: true,
		hide: 'click',
		style: {
			tip: true,
			classes: 'ui-tooltip-tipsy'
		}
	});
	//var result_div = document.getElementById('result_div');
//	result_div.innerHTML = html;
//	$("#search_div").show();
}

function closeSearch() {
	$("#search_div").hide();
}

/* trim
 *
*/
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

/* qtip
 *
*/
$(document).ready(function() { 
	$('a').qtip({ 
		content: {
			attr: 'title'
		},
		position: {
			my: 'top center',
			at: 'bottom center'
		},
		//show: false,
		//hide: 'click',
		style: {
			tip: true,
			classes: 'ui-tooltip-tipsy'
		}
	}); 
}); 
