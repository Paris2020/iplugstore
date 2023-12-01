<script setup>
    import Icon from "./global/Icon.vue";
    import ClientComment from "./global/Client.vue";
import { reactive } from "vue";

    const state = reactive({
        clients: [
            {
                id: 0,
                name: "Lisa M",
                avatar: "anonymous",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                location: "Johannesburg, GP"
            },
            {
                id: 1,
                name: "Nombulelo D",
                avatar: "anonymous",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                location: "Durban, KZN"
            },
            {
                id: 2,
                name: "Tania K",
                avatar: "anonymous",
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                location: "Cape Town, WC"
            },
        ]
    })
</script>

<template>
    <section class="clients">
        <div class="wrapper">
            <div class="big-circle"></div>
            <div class="clients-wrap">
                <client-comment :clients="state.clients"/>
            </div>
        </div>
    </section>
</template>