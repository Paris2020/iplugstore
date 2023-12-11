<script setup>
    import { reactive, computed, onMounted } from "vue"
    import PhoneCard from "./global/Phone.vue"
    import { useStore } from "vuex"

    const store = useStore();

    let products = computed(()=> {
        return store.state.products;
    })
</script>

<template>
    <section class="catalog">
        <div class="wrapper">
            <h2>All Products</h2>
            
            <div class="products">
                <phone-card :iPhones="products"/>
            </div>
            <a href="/files/price-list-2023.jpeg" target="_blank" class="btn small unclear">view more</a>
        </div>
    </section>
</template>