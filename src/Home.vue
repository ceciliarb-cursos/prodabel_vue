<template>
    <div id='app'>
        <app-menu></app-menu>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {
            idTela: 1,
            token: '',
        }
    },

}
</script>

<style>

</style>
