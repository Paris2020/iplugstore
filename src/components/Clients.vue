<script setup>
    import Icon from "./global/Icon.vue";
    import ClientComment from "./global/Client.vue";
import { reactive } from "vue";

    const state = reactive({
        clients: [
            {
                id: 0,
                name: "Nombulelo D",
                avatar: "avatar-female-dark",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                location: "Johannesburg, GP"
            },
            {
                id: 1,
                name: "Lisa M",
                avatar: "avatar-female-light",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                location: "Durban, KZN"
            },
            {
                id: 2,
                name: "Derick K",
                avatar: "avatar-male-beared",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                location: "Cape Town, WC"
            },
        ]
    })
</script>

<template>
    <section class="clients">
        <div class="wrapper">
            <div class="big-circle">
                <img src="/images/iplugstore-full-logo.png" width="350" class="iplugstore-tagline" alt="iPlugStore">
            </div>
            <div class="clients-wrap">
                <client-comment :clients="state.clients"/>
            </div>
        </div>
    </section>
</template>