<script setup>
    import { reactive } from "vue";
    import CardBox from "../components/global/Card.vue";

    const state = reactive({
        cards: [
            {
                id: 0,
                count: 0,
                icon: "mobile",
                description: "Sold"
            },
            {
                id: 1,
                count: 0,
                icon: "delivery",
                description: "Delivered"
            },
            {
                id: 2,
                count: 0,
                icon: "customer",
                description: "Customers"
            }
        ]
    })
</script>

<template>
    <section class="about">
        <div class="wrapper">
            <div class="card-numbers">
                <card-box :cards="state.cards"/>
            </div>
        </div>
    </section>
</template>