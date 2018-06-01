window.onload = function () {

	var todoList = [];
	if (localStorage.getItem('todo') != undefined) {
		todoList = JSON.parse(localStorage.getItem('todo'));
		out();
	}

	document.getElementById('add').onclick = function() {
		var text = document.getElementById('inner').value;
		var temp = {};
		temp.todo = text;
		temp.check = false;
		var i = todoList.length;
		todoList[i] = temp;
		// todoList.push(text);
		console.log(todoList);
		out();
		localStorage.setItem('todo', JSON.stringify(todoList));
	} 

	function out() {
		var out = '';
		for (var key in todoList) {
			out += todoList[key].todo + '<br>';
		}
		// for (var i = 0; i < todoList.length; i++) {
		// 	out += todoList[i] + '<br>';
		// }
		document.getElementById('outer').innerHTML = out;
	}
}