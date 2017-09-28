addEvent(window,"load",function () {
	var input = document.getElementById('input'),
		query = document.getElementById('query'),
		add = document.getElementById('add'),
		queryBtn = document.getElementById('query-btn'),
		container = document.getElementById('container'),
		newElement = null,
		deleteElement = null,
		contents = [];

	addEvent(add,"click",function () {
		var inputArr = input.value.split(/[\n\s\t\\",""，""、"".""/""|"]/);
		for (var i = 0; i < inputArr.length; i++) {
			newElement = document.createElement('div');
			newElement.className = "children";
			newElement.innerHTML = inputArr[i];
			container.appendChild(newElement);
			contents.push(inputArr[i]);
		}
	});

	addEvent(queryBtn,"click",function () {
		var newContents = [];
		container.innerHTML = "";
		for (var i = 0; i < contents.length; i++) {
			if (query.value != "") {
				newContents.push("<div class='children'>"+contents[i].replace(new RegExp(query.value,'g'),'<span>'+query.value+'</span>')+"</div>");
			}else{
				newContents.push("<div class='children'>"+contents[i]+"</div>");
			}
			container.innerHTML += newContents[i];
		}
	});
});