<template>
    <v-container class="pa-0 ma-0" fluid>
        <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0" cols="6">
                <v-img cover style="height: 100vh; width: 100%" class="pa-0 ma-0" src="/assets/img/login_bg.png" />
            </v-col>
            <v-col cols="6">
                <RouterView></RouterView>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
