<script setup>
    import { onMounted, reactive, computed } from 'vue';
    import Icon from './Icon.vue';
    import useClipboard from 'vue-clipboard3'

    const props = defineProps({
        iPhones: Array
    });

    const { toClipboard } = useClipboard();
    const state = reactive({
        incrementLikes: 0,
        share: ""
    });


    // A link to be shared
    const copyLink = async(link) => {
        try {
            await toClipboard(link)
            console.log('Copied to clipboard!')
        } catch (e) {
            console.error(e)
        }
    }


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

        <div class="description">
            <dl>
                <dt class="title">{{ phone.title }}</dt>
                <dd class="price">{{ phone.price }} ZAR</dd> 
            </dl>
            <div class="interact">
                <a :href="`/#catalogue/${phone.image}`" @click="copyLink(`/#catalogue/${phone.image}`)"><icon name="share" /></a>
                <span class="count-wrap"><icon name="heart" />{{ CountLikes }}</span>
            </div>
        </div>
    </div>
</template>