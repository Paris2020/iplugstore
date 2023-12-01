<script setup>
    import { reactive } from "vue";
    import Icon from "./Icon.vue";

    const props = defineProps({
        clients: Array
    })
</script>

<template>
    <div class="client" v-for="(client, index) in props.clients">
        <!-- <icon name="avatar" /> -->
        <span class="avatar"></span>
        <div class="popup">
            <dl>
                <dt>{{ client.name }}</dt>
                <dd>{{ client.comment }}</dd>
            </dl>
            <p>{{ client.location }}</p>
        </div>
    </div>
</template>