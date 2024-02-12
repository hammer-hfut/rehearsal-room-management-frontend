<template>
    <section>
        <main-menu />
        <template-frame />
    </section>
</template>

<script lang=ts setup>
import MainMenu from '../components/mainMenu/index.vue'
import TemplateFrame from './templateFrame.vue'

</script>
<style scoped lang=scss>
section {
    display: flex;
}
</style>