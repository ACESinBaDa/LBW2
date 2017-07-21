//Angular控制器部分
var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "index-show.html"
	}).when("/index", {
		//首页
		templateUrl: "index-show.html"
	}).when("/severser", {
		//同城服务
		templateUrl: "severser.html"
	}).when("/libaiwu", {
		//礼拜五
		templateUrl: "libaiwu.html"
	}).when("/integral-shop", {
		//积分商城
		templateUrl: "integral-shop.html"
	}).when("/shopcar", {
		//购物车
		templateUrl: "shopcar.html"
	}).when("/center", {
		//个人中心
		templateUrl: "center.html",
	}).when("/my-count", {
		//我的账户
		templateUrl: "my-count.html",
	}).when("/my-order", {
		//我的订单
		templateUrl: "my-order-none.html",
	}).when("/my-integral", {
		//我的积分
		templateUrl: "my-integral.html",
	}).when("/integral-order", {
		//积分订单
		templateUrl: "integral-order.html",
	}).when("/my-wallet", {
		//我的钱包
		templateUrl: "my-wallet.html",
	}).when("/user-information", {
		//个人资料
		templateUrl: "user-information.html",
	}).when("/address-manger", {
		//地址管理
		templateUrl: "address-manger.html",
	}).when("/my-fav", {
		//我的收藏
		templateUrl: "my-fav.html",
	}).when("/recent", {
		//最近浏览
		templateUrl: "recent.html",
	}).when("/psd-edit", {
		//修改密码
		templateUrl: "psd-edit.html",
	}).when("/change-step1", {
		//换绑第一步
		templateUrl: "change-step1.html",
	}).when("/change-step2", {
		//换绑第二步
		templateUrl: "change-step2.html",
	}).when("/change-step3", {
		//换绑第三步
		templateUrl: "change-step3.html",
	}).when("/my-msg", {
		//我的消息
		templateUrl: "my-msg.html",
	}).when("/feedback", {
		//意见反馈
		templateUrl: "feedback.html",
	}).when("/logoIn", {
		//登录
		templateUrl: "phone-logoin.html",
	}).when("/forget", {
		//忘记密码
		templateUrl: "forget.html",
	}).when("/signUp", {
		//注册
		templateUrl: "phone-logoin.html",
	}).when("/exchange", {
		//充值卡兑换
		templateUrl: "exchange.html",
	}).when("/goods-intro", {
		//物品详情
		templateUrl: "goods-intro.html"
	}).when("/goods-class", {
		//商品分类
		templateUrl: "goods-class.html"
	}).when("/order-information", {
		//确认订单商品信息
		templateUrl: "order-information.html"
	}).when("/success-shopcar", {
		//成功提交订单
		templateUrl: "success-shopcar.html"
	});
	$routeProvider.otherwise({
		templateUrl: "error.html",
		controller: "errorCtrl"
	});
})
//路径错误404控制器
app.controller("errorCtrl", function($scope) {
	window.location.replace("error.html");
	document.body.scrollTop = 0;
})
////个人中心控制器 || 中间内容部分控制器
//app.controller("centerCtrl", function($scope, $location) {
//
//})
////头部导航控制器
//app.controller("headCtrl", function($scope, $location, $http) {
//
//});
////底部控制器
//app.controller("footCtrl", function($scope, $location) {
//
//});
app.controller("appCtrl", function($scope, $location, $http) {
//	$http({
//		url:"http://localhost/LBW2/php/all.php",
//		method:"get",
//		dataType:"json",
//		success:function(data) {
//			console.log(data);
//		}
//	})
	$http.get("http://localhost/LBW2/php/all.php").success(function(data) {
		//console.log(data);
		$scope.goodsArr = data.list;
		$scope.IndexArr1 = data.list;
	})
	
//	$scope.goodsArr = [{
//		shopName: "爱果果水果店",
//		showImgUrl: "img/芒果.jpg",
//		goodsName: "澳芒",
//		standard: "无",
//		price: "100",
//		num: "1"
//	}, {
//		shopName: "爱果果水果店",
//		showImgUrl: "img/椰子.jpg",
//		goodsName: "澳芒",
//		standard: "无",
//		price: "500",
//		num: "1"
//	}, {
//		shopName: "爱果果水果店",
//		showImgUrl: "img/芒果.jpg",
//		goodsName: "澳芒",
//		standard: "无",
//		price: "1000",
//		num: "1"
//	}];

//	$scope.IndexArr1 = [{
//		shopName: "礼拜五",
//		showImgUrl: "img/图层 22.png",
//		goodsName: "新西兰佳沛黄金奇异果",
//		intro: "果肉绵蜜、花蜜般的甘甜百吃不厌",
//		standard: "6个装",
//		oldPrice: "28.80",
//		nowPrice: "10.00",
//		num: 1
//	}, {
//		shopName: "礼拜五",
//		showImgUrl: "img/图层 29.png",
//		goodsName: "天宫特供大蟠桃",
//		intro: "则是当年齐天大圣才能吃的到的蟠桃哦则是当年齐天大圣才能吃的到的蟠桃哦则是当年齐天大圣才能吃的到的蟠桃哦",
//		standard: "6个装",
//		oldPrice: "288.80",
//		nowPrice: "99.00",
//		num: 1
//	}, {
//		shopName: "礼拜五",
//		showImgUrl: "img/图层 30.png",
//		goodsName: "新西兰佳沛黄金奇异果",
//		intro: "果肉绵蜜、花蜜般的甘甜百吃不厌",
//		standard: "3个装",
//		oldPrice: "28.80",
//		nowPrice: "6.00",
//		num: 1
//	}, {
//		shopName: "礼拜五",
//		showImgUrl: "img/图层 28.png",
//		goodsName: "新西兰佳沛黄金奇异果",
//		intro: "果肉绵蜜、花蜜般的甘甜百吃不厌",
//		standard: "6个装",
//		oldPrice: "28.80",
//		nowPrice: "10.00",
//		num: 1
//	}];
	//定义购物车数组
	$scope.shopCarArr = [];
	//定义详情页对象
	$scope.introObj = "";
	//头部部分控制
	$scope.bol = true;
	$scope.shopCar = function() {
		$scope.bol = false;
		$location.path("/shopcar");
		document.body.scrollTop = 0;
	}
	$scope.toIndex = function() {
		$location.path("/index");
		$scope.bol = true;
		window.location.reload();
	}
	$scope.toWhere = function(path) {
		$location.path(path);
		$scope.bol = true;
		document.body.scrollTop = 0;
	}
	//首页分类
	$scope.allClassArr = [{
		name: "新鲜水果",
		classes: ["水果礼盒", "进口水果", "有机水果", "国产水果"]
	}, {
		name: "田园蔬菜",
		classes: ["蔬菜礼篮", "有机蔬菜", "地产蔬菜", "进口蔬菜"]
	}, {
		name: "肉类家禽",
		classes: ["羊肉", "牛肉", "鸡鸭肉", "鱼肉"]
	}, {
		name: "海鲜水产",
		classes: ["海鲜礼盒", "国产海鲜", "进口海鲜", "干货其他"]
	}, {
		name: "优选食材",
		classes: ["优选米面", "优选杂粮", "粮油调味", "其他食材"]
	}, {
		name: "零食酒水",
		classes: ["零食", "特色干果", "休闲冲饮", "茶叶", "白酒", "啤酒", "葡萄酒", "其他酒品"]
	}, {
		name: "蛋奶速食",
		classes: ["方便速食", "奶制品", "面包甜点", "蛋品"]
	}, {
		name: "全球代购",
		classes: ["保健品", "洗护用品", "农副产品", "母婴用品"]
	}];
	$scope.indexClass = function(index) {
		console.log(index);
		$location.path('/goods-class');
		document.body.scrollTop = 0;
	}
	$scope.indexClasses = function(index) {
		console.log(index);
		$location.path('/goods-class');
		document.body.scrollTop = 0;
	}

	//购物车部分控制

	$scope.toShopCar = function(index) {
		$scope.shopCarArr.push($scope.IndexArr1[index]);
		var arr = [];
		for(var i = 0; i < $scope.shopCarArr.length; i++) {
			if(arr.indexOf($scope.shopCarArr[i]) < 0) {
				arr.push($scope.shopCarArr[i]);
			} else {
				arr[arr.indexOf($scope.shopCarArr[i])].num++;
			}
		}
		$scope.shopCarArr = arr;
	};
	//详情页进入购物车
	$scope.addToShopCar = function(obj) {
		$scope.shopCarArr.push(obj);
	};

	//首页加载部分控制
	$scope.to = function(path) {
		$location.path(path);
		document.body.scrollTop = 0;
	}
	$scope.intro = function(index) {
		$location.path('/goods-intro');
		$scope.introObj = $scope.IndexArr1[index];
		//		console.log($scope.introObj)
//		console.log(angular.element(".clearfix li img").eq(0).attr("ng-src"));
		document.body.scrollTop = 0;
	}
	$scope.del = function(index) {
		$scope.shopCarArr[index].num--;
		if($scope.shopCarArr[index].num <= 1) {
			$scope.shopCarArr[index].num = 1;
		}
	};
	$scope.add = function(index) {
		$scope.shopCarArr[index].num++;
	};
	$scope.introDel = function() {
		$scope.introObj.num--;
		if($scope.introObj.num <= 1) {
			$scope.introObj.num = 1;
		}
	};
	$scope.introAdd = function() {
		$scope.introObj.num++;
	};
	$scope.remove = function(index) {
		$scope.shopCarArr.splice(index, 1);
	};
	$scope.sum = function() {
		var sum = 0;
		for(var i = 0; i < $scope.shopCarArr.length; i++) {
			sum += $scope.shopCarArr[i].nowPrice * $scope.shopCarArr[i].num;
		}
		return sum;
	};

	//底部部分控制器
	$scope.toWhere = function(path) {
		$location.path(path);
		$scope.bol = true;
		document.body.scrollTop = 0;
	}

})