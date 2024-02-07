<!--  -->
<template>
    <div class="container">
        <iframe
            class="main-iframe"
            :src="src"
            name="content"
            seamless
        ></iframe>
    </div>
</template>

<script lang=ts setup>
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter()

let src: string | undefined = undefined
const init = () => {
    console.log(router.currentRoute.value)
    const { meta: { origin, pathName } } = router.currentRoute.value
    src = `${origin}${pathName}`
}

watch(() => router.currentRoute.value.path, () => {
    init()
}, {
    immediate: true
})

</script>

<style lang="scss" scope>
.container {
    flex: 1;
    overflow: hidden;

    .main-iframe {
        position: fixed;
        inset: 0;
        top: 30px;
        left: 20%;
        z-index: 1;
        width: calc(100vw - 20%);
        height: calc(100vh - 30px * 2);
    }

}
</style>
