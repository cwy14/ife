addEvent(window,"load",function () {
	var input = document.getElementById('input'),
		valBtn = document.getElementById('validate'),
		tip = document.getElementById('tip');

	addEvent(valBtn,"click",function () {
		toggleClass(validateUsername());
	});

	function validateUsername() {
		var text = input.value;
		var bytes = 0;
		for (var i = 0; i < text.length; i++) {
			if (text.charCodeAt(i)>=0 && text.charCodeAt(i)<=255) {
				bytes += 1;
			} else {
				bytes +=2;
			}
		}
		if (text===null || text==="") {
			tip.innerHTML = "姓名不能为空";
			input.focus();
			return false;
		}else if (text.length<4 || text.length>16) {
			tip.innerHTML = "姓名长度为4-16个字符";
			input.focus();
			return false;
		} else if (bytes<3 || bytes>32) {
			tip.innerHTML = "格式错误";
			input.focus();
			return false;
		} else {
			tip.innerHTML = "格式正确";
			return true;
		}
	}
	function toggleClass(boolean) {
		if (boolean) {
			tip.className = "correct";
			input.className = "correct";
		} else {
			tip.className = "error";
			input.className = "error";
		}
	}
});