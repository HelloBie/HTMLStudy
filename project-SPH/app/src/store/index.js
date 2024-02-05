import vue from 'vue'
import vuex from 'vuex'
import home from './home/index.js' 
import search from './search/index.js' 
 
vue.use(vuex);

//state :仓库存储数据的地方
const state = {
	count:1,
};

// mutations:修改state的唯一手段
const mutations = {};

// action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {};

// getters:类似计算属性，用于简化仓库数据
const getters = {};

export default new vuex.Store({
	// state,
	// mutations,
	// actions,
	// getters
	modules:{
		home,
		search
	}
});