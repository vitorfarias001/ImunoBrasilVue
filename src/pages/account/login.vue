<template>
    <v-container style="height: 100%">
        <v-row style="height: 100%" >
            <v-col style="height: 100%" class="d-flex" cols="12">
                <v-form ref="form" lazy-validation v-model="IsValidForm" style="width: 400px; height: 450px;" class="ma-auto">
                    <div class="d-flex">
                        <span class="text-primary font-weight-bold mx-auto">LOGIN</span>
                    </div>
                    <div class="mt-4">
                        <span class="text-primary caption">Usuário</span><span class="ml-1 text-red">*</span>
                        <v-text-field label="usuário"  v-model="LoginForm.usuario" :rules="EmptyRule" class="primary mt-2" variant="outlined" ></v-text-field>
                    </div>
                    <div class="mt-1">
                        <span class="text-primary caption">Senha</span><span class="ml-1 text-red">*</span>
                        <v-text-field
                            v-model="LoginForm.senha" 
                            :rules="EmptyRule" 
                            class="primary mt-2" 
                            variant="outlined" 
                            id="password"
                            name="password"
                            label="senha" 
                            :type="showPassword ?'text': 
                            'password'"
                            :append-inner-icon="showPassword ?'mdi-eye':'mdi-eye-off'"   
                            @click:append-inner="(showPassword=!showPassword)">
                        </v-text-field>
                        <div class="d-flex">
                            <span class="ml-auto text-primary text-caption">Esqueci minha senha</span>
                        </div>
                        <v-btn class="mt-2" @click="login" :loading="LoadingLogin" style="color: white !important; width: 100%; height: 50px" color="secondary">Login</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import ApiServices from '../../api'
import { defineComponent, ref } from 'vue'
import { IUserLoginData } from '../../api/types/usuario'

export default defineComponent({
    setup() {
        const LoadingLogin = ref(false)
        const LoginForm = ref({usuario: '', senha: ''} as IUserLoginData)        
        const IsValidForm = ref(false)
        const showPassword = ref(false)
        return{
            LoadingLogin,
            LoginForm,
            IsValidForm,
            showPassword
        }
    },
    data() {
        return {
            EmptyRule: [
                (v:string) => (v != null && v.length > 0)  || 'O campo é obrigatório'
            ]
        }
    },
    methods:{
        async login(){
            if(!this.IsValidForm){
                await (this.$refs?.form as any).validate()
                return;
            }
            this.LoadingLogin = true;
            try
            {
                
            var LoginResponse = await ApiServices.ContasApi.Login(this.LoginForm);
            this.LoadingLogin = false;
                if(!LoginResponse.sucesso){
                    this.$moshaToast(LoginResponse.mensagem, { type: 'danger' });
                }
                else
                {
                    localStorage.setItem("IMB:User", JSON.stringify(LoginResponse.corpo.data || {}))
                    localStorage.setItem("IMB:Token", LoginResponse.corpo.token || "")
                    localStorage.setItem("IMB:Profile", LoginResponse.corpo.perfilAutenticado.toString())
                    await this.$store.dispatch("account/SetLoggedUser", LoginResponse.corpo.data);
                    await this.$store.dispatch("account/SetProfile", LoginResponse.corpo.perfilAutenticado);
                    this.$moshaToast("Autenticado com sucesso", { type: 'success' });
                    this.$nextTick(() => {
                        this.$router.push("/tratamento");
                    })
                }
            }
            catch (ex){
                
                this.LoadingLogin = false;
                this.$moshaToast("Falha de comunicação com o serviço de autenticação", { type: 'danger' });
            }

        }
    }
})
</script>
