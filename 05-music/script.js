var oTxt1 =document.getElementById('txt1');//var 变量 选中输入框
	var oTxt2 =document.getElementById('txt2');//var 变量 选中按钮

	oTxt2.onclick = function(){//匿名函数 点击 执行 开始
		//var 变量 选中 结构 开始
			var cMajor = document.getElementById('cMajor');//选中    结构  大三和弦
			var dMinor = document.getElementById('dMinor');//选中    结构  大三和弦
			var eMinor = document.getElementById('eMinor');//选中    结构  大三和弦
			var fMajor = document.getElementById('fMajor');//选中    结构  大三和弦
			var gMajor = document.getElementById('gMajor');//选中    结构  大三和弦
			var aMinor = document.getElementById('aMinor');//选中    结构  大三和弦
			var bBdim = document.getElementById('bBdim');//选中    结构  大三和弦
		//var 变量 选中结构 结束

		var oVal1 = parseFloat(oTxt1.value);//var 变量  输入框内容 改变
	//00判断开始
		if(oTxt1.value == 1){
			cMajor.style.display= 'block';
		}else if(oTxt1.value == 2){
			dMinor.style.display= 'block';
		}else if(oTxt1.value == 3){
			eMinor.style.display= 'block';
		}else if(oTxt1.value == 4){
			fMajor.style.display= 'block';
		}else if(oTxt1.value == 5){
			gMajor.style.display= 'block';
		}else if(oTxt1.value == 6){
			aMinor.style.display= 'block';
		}else if(oTxt1.value == 7){
			bBdim.style.display= 'block';
		}else{
			alert('您的输入有误');//如果条件都不符合 弹窗
		}
	//00判断结束
	}//匿名函数 点击 结束