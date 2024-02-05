import requests from './request.js'


export const reqC = ()=>requests(
{
	url:'/product/getBaseCategoryList',
	method:'get'
}
);


export const searchReq = (params)=>requests({url:'/list',method:'post',data:params})