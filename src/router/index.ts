import { IUsuarioDto } from './../api/types/usuario.d';
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'




const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {


  
  var LoggedUser:IUsuarioDto | null;

  LoggedUser = localStorage.getItem("IMB:User") != null ? JSON.parse(localStorage.getItem("IMB:User") || "{}") : null
  var token = localStorage.getItem("IMB:Token")
  
  if(to.meta.needsAuth && (LoggedUser == null 
    || LoggedUser.nome == null 
    || LoggedUser.id == null 
    || token == null
    || token == "")){

      localStorage.removeItem("IMB:User")
      localStorage.removeItem("IMB:Token")
    next({ path: '/account/login',
        query: {
          reason: 'notfound',
        }
      })    
  }
  else
  {
    next();
  }
})

export default router
