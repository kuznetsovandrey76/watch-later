window.onload = function () {

	var todoList = [];
	if (localStorage.getItem('text') != undefined) {
		todoList = JSON.parse(localStorage.getItem('text'));
		out();
	}

	document.getElementById('add').onclick = function() {
		var text = document.getElementById('inner-text').value;
		var link = document.getElementById('inner-link').value;
		var temp = {};
		temp.text = text;
		temp.link = link;
		var i = todoList.length;
		todoList[i] = temp;
		// console.log(todoList);
		out();
		localStorage.setItem('text', JSON.stringify(todoList));
	} 

	function out() {
		var out = '<ol>';
		for (var key in todoList) {
			out += '<li><a href="' + todoList[key].link  + '">' + todoList[key].text + '</a> - <i>' + todoList[key].link + '</i>';
		}
		out += '</ol>';

		document.getElementById('outer').innerHTML = out;
	}
}