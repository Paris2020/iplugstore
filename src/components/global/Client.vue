<script setup>
    import { reactive } from "vue";

    const props = defineProps({
        clients: Array
    })
</script>

<template>
    <div class="client" v-for="(client, index) in props.clients">
        <img :src="`/images/clients/${client.avatar}.png`" width="200" class="avatar" alt="Client Avatar/Image">
        <div class="popup">
            <dl>
                <dt>{{ client.name }}</dt>
                <dd>{{ client.comment }}</dd>
            </dl>
            <p>{{ client.location }}</p>
        </div>
    </div>
</template>