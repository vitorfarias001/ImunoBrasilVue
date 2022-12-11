<template>
    <v-app-bar
    color="white"
    density="comfortable"    
    location="top"
    height="77"
    :order="0"
    elevation="1"
    class="ml-0 pl-1 d-flex"
    >
        <!-- <font-awesome-icon @click="ChangeMenuSize" style="cursor: pointer; font-size: 32px; width: 32px; height: 32px" class="mt-1 mr-1 ml-0 text-white" 
        :icon="['fas',  'caret-'+(MenuMiniSize ? 'right' : 'left')]" /> -->
            <div class="d-flex ml-auto">
                <div class="mt-2 mr-4 d-flex">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                           <div class="d-flex" v-bind="props">
                                <div style="flex-direction: column; cursor: pointer" class="d-flex">
                                    <span style="line-height: 16px">
                                        {{ LoggedUser?.nome }}
                                    </span>
                                    <span class="text-caption">
                                        {{ PerfisUsuario.find(x => x.id == CurrentProfile)?.display }}
                                    </span>
                                </div>                            
                                <font-awesome-icon class="simpletable-edit-btn text-secondary ml-3  mb-4" 
                                style="cursor: pointer; font-size: 22px; width: 22px; height: 22px;"  :icon="['fas',  'caret-down']" />
                            </div>
                        </template>
                        <v-list>
                            <v-list-item
                              v-for="(item, index) in UserMenuItems"
                              :key="index"
                              :value="index"
                              @click="item.action"
                            >
                              <v-list-item-title >{{ item.title }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                    </v-menu>
                </div>
                <v-avatar
                    style="background-color:white"
                    >
                        {{ GetInitials(LoggedUser?.userName) }}
                    </v-avatar>
                <!-- <v-menu location="start">
                    <template v-slot:activator="{ props }">
                     <v-avatar
                    v-bind="props"
                    style="background-color:white"
                    >
                        {{ GetInitials(LoggedUser?.userName) }}
                    </v-avatar>
                    </template>
                    <v-list>
                        <v-list-item
                        color="primary"
                        variant="text"
                        v-for="(item, index) in ['Meu Pefil']"
                        :key="index"
                        :value="index"
                        >
                        <v-list-item-title>{{ item }}</v-list-item-title>                
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item
                        variant="text"
                        style="color: red"
                        >
                        <v-list-item-title>Sair</v-list-item-title>                
                        </v-list-item>
                    </v-list>
                </v-menu> -->
            </div>
            <v-dialog :persistent="true" class="dialog-page" v-model="ShowChangeProfileModal" width="300">
                <v-card>
                  <v-card-title class="text-h5 d-flex grey lighten-2">
                    <span class="mx-auto text-primary">Trocar perfil</span>
          
                    <v-btn variant="text" color="primary" @click="CloseChangeProfileModal"> Fechar </v-btn>
                  </v-card-title>
          
                  <v-card-text>
                    <v-select v-model="NovoPerfil" :items="CurrentUserProfiles" item-value="id" item-title="nome" density="compact" label="Perfil" variant="outlined"></v-select>
                  </v-card-text>
                  <div class="d-flex">
                    <v-btn :loading="LoadingTrocaPerfil" @click="TrocarPerfil" variant="outlined" class="ml-auto mr-6 mb-4" color="primary" > Trocar </v-btn>
                  </div>
                </v-card>
              </v-dialog>
    </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mapGetters } from 'vuex';
import { IIdNameDto } from '../api/types/base';
import { enPerfilUsuario } from '../api/types/enumerators/usuarioenumerators'
import { ILoginResponse, IUsuarioDto } from '../api/types/usuario';
import ApiServices from '../api'
import { AxiosPromise, AxiosResponse } from 'axios';

interface ItemMenu {
    title: string,
    action: () => void
}

export default defineComponent({
    setup() {
        const PerfisUsuario = ref(enPerfilUsuario())
        var ShowChangeProfileModal = ref(false)
        const UserMenuItems = ref([] as ItemMenu[])
        const CurrentUserProfiles = ref([] as IIdNameDto[])
        const LoadingTrocaPerfil = ref(false)
        return {
            PerfisUsuario,
            ShowChangeProfileModal,
            UserMenuItems,
            CurrentUserProfiles,
            LoadingTrocaPerfil
        }
    },
    data() {
        return {
            NovoPerfil: null
        }
    },
    mounted(){
        this.UserMenuItems = [
            {
                title: "Trocar Perfil",
                action: this.OpenChangeProfileModal
            },
            {
                title: "Sair",
                action: this.Logout
            },
        ];
        this.GetUserProfiles();
    },
    methods:{
        async Logout(){
            localStorage.removeItem("IMB:User")
            localStorage.removeItem("IMB:Token")
            localStorage.removeItem("IMB:Profile")
            await this.$store.dispatch("account/SetLoggedUser", null);
            await this.$store.dispatch("account/SetProfile", null);
            this.$nextTick(() => {
                this.$router.push("/account/login")
            })
        },
        async TrocarPerfil(){
            
            this.LoadingTrocaPerfil = true;

            var trocaPerfilResponse = await ApiServices.ContasApi.TrocaPerfil({
                            novoPerfil: this.NovoPerfil || 0
                        });

            if(trocaPerfilResponse.sucesso){
                this.$moshaToast("Perfil alterado com sucesso", { type: 'success' });

                localStorage.setItem("IMB:User", JSON.stringify(trocaPerfilResponse.corpo.data || {}))
                localStorage.setItem("IMB:Token", trocaPerfilResponse.corpo.token || "")
                localStorage.setItem("IMB:Profile", trocaPerfilResponse.corpo.perfilAutenticado.toString())
                await this.$store.dispatch("account/SetLoggedUser", trocaPerfilResponse.corpo.data);
                await this.$store.dispatch("account/SetProfile", trocaPerfilResponse.corpo.perfilAutenticado);
                this.ShowChangeProfileModal = false;
            }
            else{
                this.$moshaToast(trocaPerfilResponse.mensagem, { type: 'danger' });
            }
            
            this.LoadingTrocaPerfil = false;

        },
        GetUserProfiles(){
           this.CurrentUserProfiles = this.PerfisUsuario
           .filter(x => this.LoggedUser.perfis.find(p => p == x.id) != null)
           .map(function (val) {  
            return { id: val.id, nome: val.display } as IIdNameDto
           })
        },
        OpenChangeProfileModal(){
            this.ShowChangeProfileModal = true;
        },
        CloseChangeProfileModal(){
            this.ShowChangeProfileModal = false;
        },
        GetInitials(UserName:string | undefined){
            var initials = "";
            // if(UserName?.indexOf(" ") != -1){
            //     var Words = (UserName?.split(" ") || []);
            //     var lengthWords = (Words?.length || 0);
            //     initials = Words[0][0]+Words[lengthWords-1][0]
            // }
            // else
            // {
            //     initials = UserName[0]+UserName[1];
            // }
            return initials;
        }
    },
    computed:{
        ...mapGetters([ 'LoggedUser', 'CurrentProfile' ])
    }
})
</script>
