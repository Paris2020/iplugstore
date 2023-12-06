<script setup>
    import Icon from "./global/Icon.vue"
</script>


<template>
    <nav class="navigation">
        <div class="wrapper">
            <img class="logo" src="images/logo.png" width="50" alt="iPlugStore logo">
            <ul class="menu">
                <li><a href="#" v-scroll-to="'.about'">About us</a></li>
                <li><a href="#" v-scroll-to="'.clients'">Clients</a></li>
                <li><a href="#" v-scroll-to="'.catalog'">Catalog</a></li>
                <li><a href="#" v-scroll-to="'.contact'">Contact us</a></li>
            </ul>
        </div>
    </nav>
</template>