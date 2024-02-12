<template>
    <div class="container">
        <iframe
            ref="content"
            class="main-iframe"
            :src="src"
            name="content"
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
        width: calc(100% - 20px * 2);
        height: calc(100% - 20px * 2);
        margin: 20px;
        border: 0;
    }
}

</style>
