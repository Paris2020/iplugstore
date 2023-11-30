<script setup>
    import { reactive } from "vue";
    import Icon from "../components/global/Icon.vue";

    const state = reactive({
        date: new Date()
    })
</script>


<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="socials">
                <ul>
                    <li><a href="https://facebook.com/iPlugStore" target="_blank"><icon name="facebook" /></a></li>
                    <li><a href="https://www.tiktok.com/@_iplugstore" target="_blank"><icon name="tiktok" /></a></li>
                    <li><a href="tel:+27-76-389-9908" target="_blank"><icon name="whatsapp" /></a></li>
                    <li><a href="https://www.instagram.com/_iplugstore" target="_blank"><icon name="instagram" /></a></li>
                </ul>
            </div>
            <a href="http://mosekiwebagency.co.za/" target="_blank" class="agency">
                <strong>Moseki Web Agency</strong> &copy; {{ state.date.getFullYear() }} All Rights Reserved
            </a>
        </div>
    </footer>
</template>