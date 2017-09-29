addEvent(window,"load",function () {
	var student = document.getElementById('student'),
		notStudent = document.getElementById('not-student'),
		city = document.getElementById('city'),
		university = document.getElementById('university');

	addEvent(student,"click",function () {
		if (student.checked === true) {
			document.getElementById('student-info').className = "show";
			document.getElementById('not-student-info').className = "hide";
		} 
	});
	addEvent(notStudent,"click",function () {
		if (notStudent.checked === true) {
			document.getElementById('student-info').className = "hide";
			document.getElementById('not-student-info').className = "show";
		} 
	});
	addEvent(city,"change",function () {
		switch(city.value){
			case "beijing":
				university.innerHTML = "<option value='tsinghua'>清华大学</option><option value='peking'>北京大学</option>";
				break;
			case "guangzhou":
				university.innerHTML = "<option value='sunyatsen'>中山大学</option><option value='scnu'>华南师范大学</option>";
				break;
		}
	});
});