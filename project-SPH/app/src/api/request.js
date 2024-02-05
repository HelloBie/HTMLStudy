/// 对axios 二次封装

import axios  from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"
// 1创建axios 实例

const requests = axios.create({
	// 配置对象
	// 基础路径，发请求，路径会拼接‘、api’
	baseURL:"/api",
	// 超时时间
	timeout:5000,
})

//请求拦截器，hook请求之前
requests.interceptors.request.use((config)=>{
	
	nprogress.start();
	
	//config:配置对象，拥有header
	return config;
});


//相应拦截器，hook相应之后
requests.interceptors.response.use((res)=>{
	nprogress.done();
	return res.data;
},(error)=>{
	nprogress.done(); 
	return Promise.reject((new Error('faile')))
})




// 对外暴露
export default requests;