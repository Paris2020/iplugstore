<script setup>    
    const props = defineProps({
        count: Number,
        description: String
    })
</script>

<template>
    <div class="card">
        <span class="count">{{ props.count }}</span>
        <h4>{{ props.description}}</h4>
    </div>
</template>