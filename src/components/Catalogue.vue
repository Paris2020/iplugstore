<script setup>
    import { reactive } from "vue";
    import PhoneCard from "./global/Phone.vue";

    const state = reactive({
        catalogue: [
            {
                id: 0,
                title: "iPhone 11",
                price: "8,500.00",
                likes: 0,
                inStore: true,
                image: "iphone-11-cpo",
            },
            {
                id: 1,
                title: "iPhone 11 Pro Max",
                price: "10,000.00",
                likes: 0,
                inStore: true,
                image: "iphone-11-pro-max-cpo",
            },
            {
                id: 2,
                title: "iPhone 12",
                price: "10,500.00",
                likes: 0,
                inStore: true,
                image: "iphone-12-cpo",
            },
            {
                id: 3,
                title: "iPhone 12 Pro Max",
                price: "12,000.00",
                likes: 0,
                inStore: true,
                image: "iphone-12-pro-max-cpo",
            },
            {
                id: 4,
                title: "iPhone 13",
                price: "13,500.00",
                likes: 0,
                inStore: true,
                image: "iphone-13-cpo",
            },
            {
                id: 5,
                title: "iPhone 14",
                price: "18,500.00",
                likes: 0,
                inStore: true,
                image: "iphone-14-cpo",
            },
            {
                id: 6,
                title: "iPhone 14 Pro Max",
                price: "24,500.00",
                likes: 0,
                inStore: true,
                image: "iphone-14-pro-max-cpo",
            },
            {
                id: 7,
                title: "iPhone X",
                price: "6,900.00",
                likes: 0,
                inStore: true,
                image: "iphone-x-cpo",
            },
            {
                id: 8,
                title: "iPhone XS",
                price: "8,000.00",
                likes: 0,
                inStore: true,
                image: "iphone-xs-cpo",
            },
        ],
    })
</script>

<template>
    <section class="catalog">
        <div class="wrapper">
            <h2>All Products - CPO</h2>
            
            <div class="products">
                <phone-card :iPhones="state.catalogue"/>
            </div>
            <a href="/files/product-list.pdf" target="_blank" class="btn small unclear">view more</a>
        </div>
    </section>
</template>