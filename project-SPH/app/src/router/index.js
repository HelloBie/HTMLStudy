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

export default new VueRouter({
	routes:[
		{
			path:'/Home',
			component:Home
		},
		{
			path:'/Login',
			component:Login
		},
		{
			path:'/Search/:keyword',
			component:Search,
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