$(document).ready(function(){
	$("button").click(function(){
		var tel=$("#tel");
		var code_1=$("#code_1");
		var code_2=$("#code_2");
		var name=$("#name");
		var pwd_1=$("#pwd_1");
		var pwd_2=$("#pwd_2");
		var re_tel=/^1[34578]\d{9}$/;
		var re_pwd=/^[\w]{4,10}$/;
		var re_code=/^[\w]{4}$/;
		var re_name=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
		if(re_tel.test(tel.val())){
			
		}else{
			alert("请填写正确的手机号！");
			return false;
		}
		if(re_code.test(code_1.val())){
			
		}else{
			alert("请输入4位正确的图片验证码！");
			return false;
		}
		if(re_code.test(code_2.val())){
			
		}else{
			alert("请输入4位正确的手机验证码！");
			return false;
		}
		if(re_name.test(name.val())){
			
		}else{
			alert("用户名由英文字母和数字组成的4-16位字符，以字母开头！");
			return false;
		}
		if(re_pwd.test(pwd_1.val())){
			
		}else{
			alert("密码由英文字母和数字组成的4-10位字符");
			return false;
		}
		if(pwd_1.val()==pwd_2.val()){
			alert("注册成功！");
			return true;
		}else{
			alert("两次密码输入不一致！");
			return false;
		}
	})
})