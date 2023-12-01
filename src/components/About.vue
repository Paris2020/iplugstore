<script setup>
    import { reactive } from "vue";
    import CardBox from "../components/global/Card.vue";

    const state = reactive({
        cards: [
            {
                id: 0,
                count: 450,
                icon: "mobile",
                description: "Sold"
            },
            {
                id: 1,
                count: 100 + "%",
                icon: "delivery",
                description: "Delivery"
            },
            {
                id: 2,
                count: 750,
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
            
            <div class="more-info">
                <h2>What have you heard about us?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam 
                    nesciunt fugiat porro vitae iusto ea ullam nostrum, optio tempora itaque 
                    accusamus incidunt ipsa at officiis recusandae. Reprehenderit, perferendis illo.</p>
            </div>

            <div class="video-reel">
                <h3>Video here...</h3>
            </div>
        </div>
    </section>
</template>