addEvent(window,"load",function () {
	var signIn = document.getElementById('sign-in'),
		username = document.getElementById('username'),
		password = document.getElementById('password'),
		passwordAgain = document.getElementById('password-again'),
		email = document.getElementById('email'),
		cellPhoneNumber = document.getElementById('cell-phone-number'),
		submit = document.getElementById('submit');
	var usernameTip = document.getElementById('username-tip'),
		passwordTip = document.getElementById('password-tip'),
		passwordAgainTip = document.getElementById('password-again-tip'),
		emailTip = document.getElementById('email-tip'),
		cellPhoneNumberTip = document.getElementById('cell-phone-number-tip');

	//名称输入框
	addEvent(username,"focus",function () {
		if (usernameTip.innerHTML===null || usernameTip.innerHTML==="") {
			usernameTip.innerHTML = "必填,长度为4-16个字符";
		}
	});
	addEvent(username,"blur",function () {
		toggleClass(username,validateUsername());
	});

	//密码输入框
	addEvent(password,"focus",function () {
		if (passwordTip.innerHTML===null || passwordTip.innerHTML==="") {
			passwordTip.innerHTML = "必填,格式为4-16位字母、数字";
		}
	});
	addEvent(password,"blur",function () {
		toggleClass(password,validatePassword());
	});

	//密码二次输入框
	addEvent(passwordAgain,"focus",function () {
		if (passwordAgainTip.innerHTML===null || passwordAgainTip.innerHTML==="") {
			passwordAgainTip.innerHTML = "再次输入密码";
		}
	});
	addEvent(passwordAgain,"blur",function () {
		toggleClass(passwordAgain,validatePasswordAgain());
	});

	//邮箱输入宽框
	addEvent(email,"focus",function () {
		if (emailTip.innerHTML===null || emailTip.innerHTML==="") {
			emailTip.innerHTML = "必填,请输入正确格式的邮箱地址";
		}
	});
	addEvent(email,"blur",function () {
		toggleClass(email,validateEmail());
	});

	//手机号码输入框
	addEvent(cellPhoneNumber,"focus",function () {
		if (cellPhoneNumberTip.innerHTML===null || cellPhoneNumberTip.innerHTML==="") {
			cellPhoneNumberTip.innerHTML = "必填,请输入正确的11位手机号码";
		}
	});
	addEvent(cellPhoneNumber,"blur",function () {
		toggleClass(cellPhoneNumber,validateCellPhoneNumber());
	});

	//表单提交前进行全局验证
	addEvent(signIn,"submit",function () {
		/*var result = validateUsername() && validatePassword() && validatePasswordAgain() && validateEmail() && validateCellPhoneNumber();
		if (result) {
			alert("提交成功");
		} else {
			alert("输入有误");
		}
		return result;*/
		return check();
	});

	function toggleClass(element,boolean) {
		if (boolean) {
			element.className = "correctness";
			element.parentNode.getElementsByTagName('p')[0].className = "correctness";
		} else {
			element.className = "error";
			element.parentNode.getElementsByTagName('p')[0].className = "error";
		}	
	}	

	function validateUsername() {
		if (username.value===null || username.value==="") {
			usernameTip.innerHTML = "名称不能为空";
			return false;
		} else if (username.value.length<4 || username.value.length>16) {
			usernameTip.innerHTML = "名称长度为4-16个字符";
			return false;
		} else {
			usernameTip.innerHTML = "名称格式正确";
			return true;
		}
	}

	function validatePassword() {
		if (password.value===null || password.value==="") {
			passwordTip.innerHTML = "密码不能为空";
			return false;
		} else if (password.value.length<4 || password.value.length>16 || password.value.match(/[^a-zA-Z0-9]/)!=null){
			passwordTip.innerHTML = "密码为4-16位字母、数字";
			return false;
		} else {
			passwordTip.innerHTML = "密码格式正确";
			return true;
		}
	}

	function validatePasswordAgain() {
		if (passwordAgain.value === password.value) {
			passwordAgainTip.innerHTML = "密码一致";
			return true;
		} else {
			passwordAgainTip.innerHTML = "密码不一致";
			return false;
		}
	}

	function validateEmail() {
		if (email.value===null || email.value==="") {
			emailTip.innerHTML = "邮箱不能为空";
			return false;
		} else if (email.value.indexOf('@')<1 || email.value.lastIndexOf('.')-email.value.indexOf('@')<2) {
			emailTip.innerHTML = "邮箱格式错误";
			return false;
		} else {
			emailTip.innerHTML = "邮箱格式正确";
			return true;
		}
	}

	function validateCellPhoneNumber() {
		if (cellPhoneNumber.value===null || cellPhoneNumber.value==="") {
			cellPhoneNumberTip.innerHTML = "手机号不能为空";
			return false;
		} else if (cellPhoneNumber.value.length!=11
					|| cellPhoneNumber.value.match(/[^0-9]/)!=null) {
			cellPhoneNumberTip.innerHTML = "手机号格式错误";
			return false;
		} else {
			cellPhoneNumberTip.innerHTML = "手机号格式正确";
			return true;
		}
	}

	function check() {
		var result = validateUsername() && validatePassword() && validatePasswordAgain() && validateEmail() && validateCellPhoneNumber();
		if (result) {
			alert("提交成功");
		} else {
			alert("输入有误");
		}
		return result;
	}
});