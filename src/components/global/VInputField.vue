<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
    });
    
</script>

<template>
    <label class="input-wrapper">
        <VField :name="name" v-slot="{ field, meta, errors }">
            <input v-bind="field" class="form-input" :placeholder="placeholder" :type="type"
                :class="{
                    'is-success': meta.valid && meta.touched,
                    'is-danger': !meta.valid && meta.touched,
                }"
            />
            <VErrorMessage :name="name" as="div" class="error" />
        </VField>
    </label>
</template>
