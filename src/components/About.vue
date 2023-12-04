<script setup>
    import { reactive, onMounted } from "vue";
    import Icon from "./global/Icon.vue";
    import CardBox from "../components/global/Card.vue";
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed';

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
                count: 100,
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
                <LiteYouTubeEmbed 
                    id="XHTrLYShBRQ" width="952" height="500"
                    title="Introducing iPhone 15 | WOW | Apple"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </div>
        </div>
    </section>
</template>