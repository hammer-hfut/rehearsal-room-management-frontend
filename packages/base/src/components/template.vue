<!--  -->
<template>
    <div class="container">
        <iframe
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
