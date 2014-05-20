/**
 * 目标区域外点击隐藏
 */
function checkExternalClick(event) {
	var node = event.target;
	var test = $('#test')[0];
	while (node && node != test) {
		node = node.parentNode;
	}
	if (!node) {
		// hide
	}
};