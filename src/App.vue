<template>
  <v-app>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      
    };
  },
  mounted(){
    this.setStates();
  },
  methods:{
    async setStates(){
      await this.$store.dispatch("account/SetLoggedUser", JSON.parse(localStorage.getItem("IMB:User") || "{}"));
      await this.$store.dispatch("account/SetProfile", localStorage.getItem("IMB:Profile"));
    }
  }
});
</script>
<style lang="sass">
$color-pack: false

@import '../node_modules/vuetify/lib/styles/main.sass'

.main
  background-color: #EFF6F5
</style>
