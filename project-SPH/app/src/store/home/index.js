import {
	reqC
} from '@/api'
// home vuex仓库
//state :仓库存储数据的地方
const state = {
	catList: [],
};

// mutations:修改state的唯一手段
const mutations = {
	CATELIST(state, catList) {
		console.log(12312312);
		state.catList = catList;
		console.log(catList);
	}
};

// action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {

	async categoryList(commit) {
		let res = await reqC();
			console.log(res);
		if (res.code == 200) {
				console.log(res.data);
			commit.commit('CATELIST', res.data);
			console.log(res.data);
		}
	}

};

// getters:类似计算属性，用于简化仓库数据
const getters = {};

export default {
	state,
	mutations,
	actions,
	getters
}