addEvent(window,"load",function () {
	var input = document.getElementById('input'),
		leftIn = document.getElementById('left-in'),
		rightIn = document.getElementById('right-in'),
		leftOut = document.getElementById('left-out'),
		rightOut = document.getElementById('right-out'),
		container = document.getElementById('container'),
		newElement = null,
		deleteElement = null;

	addEvent(leftIn,"click",function () {
		if (isNaN(Number(input.value))) {
			alert("请输入数字");
		} else {
			newElement = document.createElement('div');
			newElement.innerHTML = input.value;
			newElement.className = "children";
			container.insertBefore(newElement,container.firstChild);
		}
	});

	addEvent(rightIn,"click",function () {
		if (isNaN(Number(input.value))) {
			alert("请输入数字");
		} else {
			newElement = document.createElement('div');
			newElement.innerHTML = input.value;
			newElement.className = "children";
			container.appendChild(newElement);
		}
	});

	addEvent(leftOut,"click",function () {
		deleteElement = container.removeChild(container.firstChild);
		alert("删除的数字:"+deleteElement.innerHTML);
		deleteElement = null;
	});

	addEvent(rightOut,"click",function () {
		deleteElement = container.removeChild(container.lastChild);
		alert("删除的数字:"+deleteElement.innerHTML);
		deleteElement = null;
	});

	addEvent(container,"click",function (e) {
		e = event || window.event;
		if (e.target.className === "children") {
			deleteElement = container.removeChild(e.target);
			alert("删除的数字:"+deleteElement.innerHTML);
			deleteElement = null;
		}
	});
})