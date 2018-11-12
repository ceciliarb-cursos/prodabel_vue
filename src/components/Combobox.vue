<template>
    <select v-bind:name="name" v-bind:id="name">
        <option value=""></option>
    </select>
</template>

<script>
export default {
    props: ['name', 'dados'],
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>

</style>
