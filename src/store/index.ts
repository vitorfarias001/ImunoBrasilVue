import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';
import getters from './getters';
import { State } from './state';

import { AccountModule } from './modules/account';



export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    modules: {
      menu: AccountModule
    },
    mutations: {
      ...AccountModule.mutations
    },
    actions: {
      ...AccountModule.action
    },
    state: {
      account: {
        ...AccountModule.state
      }
    } as State,
    getters: getters
})



export function useStoreTyped() {
  return baseUseStore(key);
}


// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules:Array<Object> = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: modules
// })