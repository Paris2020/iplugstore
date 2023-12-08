<script setup>
    const props = defineProps({
        rows: {
            type: Number,
            default: 4,
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
        <VTextArea :name="name" v-slot="{ field, meta, errors }">
            <textarea v-bind="field" class="form-textarea" :placeholder="placeholder"
                :class="{
                    'is-success': meta.valid && meta.touched,
                    'is-danger': !meta.valid && meta.touched,
                }" />
            <VErrorMessage :name="name" as="div" class="error" />
        </VTextArea>
     </label>
</template>