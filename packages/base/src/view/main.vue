<template>
    <section>
        <main-menu />
        <router-view />
    </section>
</template>

<script lang=ts setup>
import MainMenu from '../components/mainMenu/index.vue'

</script>
<style scoped lang=scss>
section {
    display: flex;
}
</style>