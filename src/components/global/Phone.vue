<script setup>
    import { onMounted, reactive, computed } from 'vue'
    import Icon from './Icon.vue'
    import useClipboard from 'vue-clipboard3'
    import { useStore } from "vuex"

    const store = useStore();

    const props = defineProps({
        iPhones: Array
    });

    const { toClipboard } = useClipboard();

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
    const incrementLikes = (product) => {
        store.commit('incrementCount', product)
    }   
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
                <a :href="`/#catalogue/${phone.image}`" @click="copyLink(`/#catalogue/${phone.image}`)"><icon name="copy" /></a>
                <span class="count-wrap">
                    {{ phone.likes }}
                    <icon name="heart" :id="phone.id" @click="incrementLikes(index)"/>
                </span>
            </div>
        </div>
    </div>
</template>