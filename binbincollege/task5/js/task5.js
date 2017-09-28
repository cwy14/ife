addEvent(window,"load",function () {
	var input = document.getElementById('input'),
		leftIn = document.getElementById('left-in'),
		rightIn = document.getElementById('right-in'),
		leftOut = document.getElementById('left-out'),
		rightOut = document.getElementById('right-out'),
		sortBtn = document.getElementById('sort'),
		container = document.getElementById('container'),
		deleteElement = null;

	addEvent(leftIn,"click",function () {
		if (!isNaN(Number(input.value)) && Number(input.value)>=10 && Number(input.value)<=100) {
			if (getByClass(container,"parent").length >= 60) {
				alert("最多插入60个数据");
			} else {
				container.insertBefore(creatItem(Number(input.value)),container.firstChild);
			}
		} else {
			alert("请输入10-100之间的数字");
		}
	});

	addEvent(rightIn,"click",function () {
		if (!isNaN(Number(input.value)) && Number(input.value)>=10 && Number(input.value)<=100) {
			if (getByClass(container,"parent").length >= 60) {
				alert("最多插入60个数据");
			} else {
				container.appendChild(creatItem(Number(input.value)));
			}
		} else {
			alert("请输入10-100之间的数字");
		}
	});

	addEvent(leftOut,"click",function () {
		if (getByClass(container,"parent").length > 0) {
			deleteElement = container.removeChild(container.firstChild);
			deleteElement = null;
		} else {
			alert("已全部删除");
		}
	});

	addEvent(rightOut,"click",function () {		
		if (getByClass(container,"parent").length > 0) {
			deleteElement = container.removeChild(container.lastChild);
			deleteElement = null;
		} else {
			alert("已全部删除");
		}
	});

	addEvent(container,"click",function (e) {
		e = event || window.event;
		if (e.target.className === "children") {
			deleteElement = container.removeChild(e.target.parentNode);
			deleteElement = null;
		}
	});

	addEvent(sortBtn,"click",function () {
		var parentsArr = getByClass(container,"parent");
		sortData(parentsArr);
		container.innerHTML = "";
		for (var i = 0; i < parentsArr.length; i++) {
			container.appendChild(parentsArr[i]);
		}
	});
});

function creatItem(height) {
	var newParent = document.createElement('div');
	newParent.className = "parent";
	var newChild = document.createElement('div');
	newChild.className = "children";
	newChild.style.height = height+"px";
	newParent.appendChild(newChild);
	return newParent;
}

function sortData(parents) {
	var value = 0;
	for (var i = 0; i < parents.length; i++) {
		value = parents[i].firstChild.offsetHeight;//先把当前项的高度存入变量value
		//然后从前一项开始往前遍历,如果高度大于value则向后移一位
		for (var j = i-1; j>-1 && parents[j].firstChild.offsetHeight<value; j--) {
			parents[j+1].firstChild.style.height = parents[j].firstChild.offsetHeight+"px";
		}
		//直到找到高度小于value的一项,把它后面一位赋值为value
		parents[j+1].firstChild.style.height = value+"px";
	}
}