// search vuex仓库
//state :仓库存储数据的地方
import {
	searchReq
} from '../../api/index.js'
const state = {
	searchList: [],
};

// mutations:修改state的唯一手段
const mutations = {
	SEARCHLIST(state, list) {
		state.searchList = list;
	}

};

// action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {

	async GetSearchList(commit, params) {
		let res = await searchReq(params);
		console.log('!!!!!!GetSearchList');
		console.log(res);
		if (res.code === 200) {
			commit.commit('SEARCHLIST', res.data);
		} else {

		}
	}
};

// getters:类似计算属性，用于简化仓库数据
const getters = {

};

export default {
	state,
	mutations, 
	actions,
	getters
}