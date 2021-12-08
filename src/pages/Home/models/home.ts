import { Effect, Reducer } from 'umi';

import { queryProjectNotice } from '../service';

export interface IndexModelState {
  name?: string;
  notice?: any;
}

export interface IndexModelType {
  namespace: 'home';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'home',

  state: {
    name: '',
    notice: {},
  },

  effects: {
    *query({ payload }, { call, put }) {
      const result = yield call(queryProjectNotice, payload);
      const a = yield put({
        type: 'save',
        payload: result,
      });
      console.log(a, 'aaa');
      return result;
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        notice: action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};

export default IndexModel;
