<script setup>
    const props = defineProps({
        error: Boolean,
        message: String
    })
</script>

<template>
    <span class="error">
        {{ !props.error ? '' : props.message }}
    </span>
</template>