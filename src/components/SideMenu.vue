<template>
    <v-navigation-drawer
    permanent
    :floating="true"
    :disable-resize-watcher="true"
       >
       <div style="width: 100%; height: 70px; background-color: #004346 !important" class="d-flex">
            <v-img style="width: 50px; height: 50px" class="ma-auto" src="/assets/img/logo.svg">
            
            </v-img>
         </div>
         
         <div class="bg-primary" style="width: 100%; height: calc(100% - 70px)">
            <router-link :active-class="'ActiveRoute'" :to="item" v-for="(item, index) in MenuRoutes" 
            style="width: 100%; justify-content: normal; text-decoration: none;" class="Route text-white px-5 py-3 d-flex menuitem">

              <img class="ml-0" style="width: 25px" :src="'/assets/svg/MenuIcons/'+item.meta?.icon"/>
              <span style="font-size: 14px" class="mr-auto mt-1 ml-2">{{item.meta?.displayText}}</span>
            </router-link>
         </div>
         <!-- <v-list style="height: calc(100% - 70px)" class="bg-primary" density="comfortable" nav>
          
           <v-list-item  :to="'/'+item.path" v-for="(item, index) in MenuRoutes" :key="index" 
           :title="item.meta?.displayText" :value="item.name">
           
            <template v-slot:prepend>
              
            </template>
          </v-list-item>
         </v-list> -->
         {{prof}}
       </v-navigation-drawer>
 </template>
 <script lang="ts">
 import { computed, defineComponent } from 'vue'
 import { routes } from '../router/routes'
 import { IUsuarioDto } from '../api/types/usuario';
import { mapGetters } from 'vuex';
 
 
 export default defineComponent({
     setup() {
         return {
         }
     },    
     computed:{
      ...mapGetters([ 'LoggedUser', 'CurrentProfile' ])
     },
     data() {
         return {
          MenuRoutes: routes?.find(p => p.name == 'main-layout')?.children?.filter(p => p.meta?.showInMenu == true && ((p.meta?.roles as number[]).length == 0 || (p.meta?.roles as number[]).indexOf(parseInt(this.$store.getters.CurrentProfile, 10)) != -1)),
             items: [
           { title: 'Home', icon: 'mdi-view-dashboard' },
           { title: 'About', icon: 'mdi-forum' },
         ],
         links: ['Home', 'Contacts', 'Settings']
         }
     },
     methods:{
       SignOut(){
         localStorage.removeItem("User");
         this.$router.push("/account/login");
       }
     },
     watch:{
      CurrentProfile(val){
        this.MenuRoutes = routes?.find(p => p.name == 'main-layout')?.children?.filter(p => p.meta?.showInMenu == true && ((p.meta?.roles as number[]).length == 0 || (p.meta?.roles as number[]).indexOf(parseInt(this.$store.getters.CurrentProfile, 10)) != -1))

        if(this.MenuRoutes?.find(x => x.path == this.$route.path) == null){
          this.$router.push((this.MenuRoutes[0].path))
        }

      }
     }
 })
 </script>
 <style>
 .menuitem > div.v-list-item-header{
   margin-left: 20px;
 }

.ActiveRoute {
  border-left: 5px solid #80C340 !important;
  background-color: rgb(0, 67, 70) !important;
}

.Route {
  border-left: 5px solid transparent;
}

 </style>
 