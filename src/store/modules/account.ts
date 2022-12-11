import { Commit, Mutation } from "vuex";
import { State } from '../state'
import { IUsuarioDto } from "../../api/types/usuario";

export interface AccountState  {
    LoggedUser: IUsuarioDto,
    CurrentProfile: number
  }

  export const AccountModule = {
    namespaced: true,
    namespace: 'account',
    state: (): AccountState => ({
        LoggedUser: {} as IUsuarioDto,
        CurrentProfile: 0
    }),
    mutations: {
        'account/setUser'(state: State, user: IUsuarioDto){            
            state.account.LoggedUser = user;
          },
          'account/setCurrentProfile'(state: State, profile: number){            
            state.account.CurrentProfile = profile;
          }
    },
    action: {
        'account/SetLoggedUser'({ commit }, user: IUsuarioDto): void{            
            commit('account/setUser', user);
        },
        'account/SetProfile'({ commit }, profile: number): void{            
            commit('account/setCurrentProfile', profile);
        },
    }
  }
