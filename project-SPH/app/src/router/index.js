// 配置路由的地方

import vue from 'vue';
import VueRouter from 'vue-router';

//引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
//使用插件
vue.use(VueRouter);

// 重写push方法，避免连续跳转报错
let originPush = VueRouter.prototype.push;
let originreplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location,resolve, reject){
	if(resolve && reject){
		console.log("success");
		originPush.call(this,location,resolve,reject);
		
	}else {
	console.log(this);
		originPush.call(this,location,(s)=>{
			console.log("success");
		},(e)=>{
			console.log("error");
		});
	}
}

VueRouter.prototype.replace = function (location,resolve, reject){
	if(resolve && reject){
		originreplace.call(this,location,resolve,reject);
		
	}else {
		originreplace.call(this,location,()=>{},()=>{});
	}
}

export default new VueRouter({
	routes:[
		{
			name:'home',
			path:'/Home',
			component:Home
		},
		{
			name:'login',
			path:'/Login',
			component:Login
		},
		{
			path:'/Search',
			component:Search,
			meta:{show:true},
			name:'search'
		},
		{
			path:'/Register',
			component:Register
		},
		{
			path:'*',
			redirect:'/Home'
		}
	]
}
)