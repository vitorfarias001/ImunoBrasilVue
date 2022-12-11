
import { State } from './state'
const getters = {
  LoggedUser: (state:State) => state.account.LoggedUser,
  CurrentProfile: (state:State) => state.account.CurrentProfile,
}
export default getters
