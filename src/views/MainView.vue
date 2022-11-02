<template>
    <div>
        <signin v-if="!this.$store.getters.isLogined"/>
        <Home v-if="this.$store.getters.isLogined"/>
    </div>
</template>

<script>
import signin from "./SigninView.vue";
import Home from "./HomeView.vue";


export default {
    components:{signin, Home},
}
</script>