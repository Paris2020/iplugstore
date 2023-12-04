<script setup>
    import Icon from "./Icon.vue";
    const props = defineProps({
        cards: Array
    })
</script>

<template>
    <div class="card" v-for="(card, index) in props.cards">
        <!-- <span class="count">{{ card.count }}</span> -->
        <div class="count-wrap">
            <AnimatedCounter :value="card.count" :duration="1000" class="count"/>
            <span>%</span>
        </div>
        <p>{{ card.description }}</p>
        <icon :name="card.icon" />
    </div>
</template>