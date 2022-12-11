<template>
    
    <side-menu></side-menu>
    <app-bar></app-bar>
    <RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideMenu from '../components/SideMenu.vue'
import AppBar from '../components/AppBar.vue'

export default defineComponent({
    components: { SideMenu, AppBar },
    setup() {
        return{

        }
    },
})
</script>
