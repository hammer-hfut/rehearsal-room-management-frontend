<template>
    <div class="Logo-container">
        <canvas id="logo" :height="props.size" :width="props.size"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps<{ size: number }>()

onMounted(() => {
    const size = props.size * 0.8
    const circleRadius = size / 1.95
    const lineStart = circleRadius + circleRadius / 4
    const lineWidth = (circleRadius / 4) * 3
    const blueColor = 'rgba(8, 60, 240, 0.8)'
    const canvas = document.getElementById('logo') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (ctx) {
        ctx.rotate(-Math.PI / 4)
        ctx.translate(-size / 2.05, size / 2.5)
        ctx.beginPath()
        ctx.arc(circleRadius, circleRadius, circleRadius, 0, 2 * Math.PI)
        ctx.fillStyle = '#12d2ac'
        ctx.fill()
        ctx.closePath()

        ctx.lineWidth = lineWidth
        ctx.strokeStyle = blueColor

        ctx.beginPath()
        ctx.arc(circleRadius, lineStart * 1.05, lineWidth / 2, -Math.PI, 0)
        ctx.fillStyle = blueColor
        ctx.arc(circleRadius, circleRadius * 2.05, lineWidth / 2, 0, -Math.PI)
        ctx.fill()
        ctx.closePath()
    }
})
</script>
