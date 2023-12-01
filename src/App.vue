<script setup>
    import HeaderSection from "./components/Header.vue";
    import ContactSection from "./components/Contact.vue";
    import AboutSection from "./components/About.vue";
    import CatalogueSection from "./components/Catalogue.vue";
    import ClientSection from "./components/Clients.vue";
    import FooterSection from "./components/Footer.vue";
    import IconSymbols from "./components/global/IconSymbols.vue";
</script>

<template>
    <div class="container">
        <header-section />
        <about-section />
        <catalogue-section />
        <client-section />
        <contact-section />
        <footer-section />
        <icon-symbols />
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/style.scss"
</style>
