<template>
    <div class="role-tree-container">
        <div class="mermaid">
            {{ ref }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import mermaid from 'mermaid'
import { onMounted } from 'vue'

const ref = `flowchart TD
    A[leader] --> B(announcement) & C(hrm) & D(appointment) & E(equipment)
  `
onMounted(() => {

    mermaid.initialize({
        startOnLoad: true,
        securityLevel: 'loose'
    })
    mermaid.init(undefined, document.querySelectorAll('.mermaid'))
})
</script>

<style lang="scss" scoped>
.mermaid {
    width: 500px;
    height: 500px;
    margin-top: 40px;
}
</style>
