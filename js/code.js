$("#log").on("click", function() {

			var inputCode = $("#msg").val().toUpperCase();

			if(inputCode.length <= 0) { //若输入的验证码长度为0  
				alert("请输入验证码！"); //则弹出请输入验证码  
			} else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时  

				alert("验证码输入错误！@_@");

				createCode(); //刷新验证码  

				$("#msg").val("");
			} else { //输入正确时  
				alert("输入正确");
			}
		})

		//在全局定义验证码
		var code;

		//产生验证码

		window.onload = function createCode() {
			code = "";
			var codeLength = 4; //验证码的长度  
			var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
				'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
			];
			for(var i = 0; i < codeLength; i++) { //循环操作  
				var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
				code += random[index]; //根据索引取得随机数加到code上  
			}

			$("#code").val(code)
		}

		//当点击看不清换一张的时候 改变验证码
		$("#change").on("click", function() {
			code = "";
			var codeLength = 4; //验证码的长度  

			var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
				'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
			];

			for(var i = 0; i < codeLength; i++) { //循环操作  
				var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
				code += random[index]; //根据索引取得随机数加到code上  
			}

			$("#code").val(code); //把code值赋给验证码  

		})