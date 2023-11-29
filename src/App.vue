<script setup>
    import HeaderSection from "./components/Header.vue";
    import ContactSection from "./components/Contact.vue";
    import FooterSection from "./components/Footer.vue";
    import IconSymbols from "./components/global/IconSymbols.vue";
</script>

<template>
    <div class="container">
        <header-section />
        <contact-section />
        <footer-section />
        <icon-symbols />
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/style.scss"
</style>
