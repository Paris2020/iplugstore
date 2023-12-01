<script setup>
    import { onMounted, reactive, computed } from 'vue';
    import Icon from './Icon.vue';

    const props = defineProps({
        iPhones: Array
    });

    const state = reactive({
        incrementLikes: 0
    })

    // A link to be shared
    const shareProduct = computed(() => {

    });


    // Increment likes
    const CountLikes = computed(() => {

    });


</script>

<template>
    <div class="iphone" v-for="(phone, index) in props.iPhones">
        <picture>
            <source media="(min-width: 601px)" :srcset="`/images/iphones/${phone.image}.jpeg`">
            <img :src="`/images/iphones/${phone.image}.jpeg`" :alt="`iPhone Image ${phone.index}`" />
        </picture>

        <dl>
            <dt class="title">{{ phone.title }}</dt>
            <dd class="price">{{ phone.price }} ZAR</dd> 
        </dl>
        
        <div class="interact">
            <a :href="`/#catalogue/${shareProduct}`"><icon name="share" /></a>
            <span class="count-wrap"><icon name="heart" />{{ CountLikes }}</span>
        </div>
    </div>
</template>