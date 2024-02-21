<script setup>
    import { ref, reactive, onMounted } from "vue"

    const state = reactive({
        isExpanded: false,
        scrollPos: null
    })

    const toggle = () => {
		state.isExpanded = !state.isExpanded;
	}

    const updateScroll = () => {
        state.scrollPos = window.scrollY;
    }

    onMounted(() => {
        window.addEventListener('scroll', updateScroll)
    });
</script>


<template>
    <nav class="navigation" :class="[{'isExpanded': state.isExpanded}, {'sticky': state.scrollPos > 70}]">
        <div class="wrapper">
            <a href="/" class="logo"><img class="logo" src="images/logo.png" width="40" alt="iPlugStore logo"></a>
            <ul class="menu">
                <li><a href="#" v-scroll-to="'.about'">About us</a></li>
                <li><a href="#" v-scroll-to="'.clients'">Clients</a></li>
                <li><a href="#" v-scroll-to="'.catalog'">Catalog</a></li>
                <li><a href="#" v-scroll-to="'.contact'">Contact us</a></li>
            </ul>
            <div class="burger" @click="toggle()"><span></span></div>
        </div>
    </nav>
</template>
