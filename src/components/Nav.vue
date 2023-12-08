<script setup>
    import { ref, reactive, onMounted } from "vue"

    const state = reactive({
        isExpanded: false,
        scrollPos: null
    })

    const toggle = () => {
		state.isExpanded = !state.isExpanded;
	}

    // STICKY MENU
    /*const target = ref();
    const sticky = ref(false);

    const observer = new IntersectionObserver(
        ([entry]) => { 
            sticky.value = !entry.isIntersecting; 
        },
        { threshold: 0.0 }
    );

    onMounted(() => {
        observer.observe(target.value);
    }); */

    const updateScroll = () => {
        state.scrollPos = window.scrollY;
    }

    onMounted(() => {
        window.addEventListener('scroll', updateScroll)
    });
</script>


<template>
    <nav class="navigation" :class="[{'isExpanded': state.isExpanded}, {'sticky': state.scrollPos > 70}]" ref="target">
        <div class="wrapper">
            <img class="logo" src="images/logo.png" width="40" alt="iPlugStore logo">
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