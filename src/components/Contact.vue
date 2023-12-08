<script setup>
    import { reactive } from "vue"
    import { object, string, ref as yupRef } from "yup"
    import { configure } from "vee-validate"
    import VInputField from "./global/VInputField.vue"
import VTextArea from "./global/VTextArea.vue";
    
    const state = reactive({
        success: false,
    });

    /*const existingEmail = async (value) => {
        const result = await $fetch("/api/checkemail?email=" + value);
        return result ? true : false;
    }; */

    const handleSubmit = (values, actions) => {

        let fullName = values.name;
        let emailAddress = values.email;
        let subject = values.subject
        let cellNumber = values.contact;
        let commentMsg = values.message;

        let messageBody = `Full name: ${fullName} <br />
                           Email: ${emailAddress} <br />
                           Email: ${subject} <br />
                           Cell no.: ${cellNumber} <br />
                           Message: ${commentMsg}`;

        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "dineo06.moseki@gmail.com",
            Password : `${runtimeConfig.public.MAPBOX_PASSWORD}`,
            To : 'llebohang600@gmail.com',
            From : "dineo06.moseki@gmail.com",
            Subject : `${subject}`,
            Body : messageBody }).then(message => {
        
            if(message == 'OK') {
                state.success = true;
                actions.resetForm();
            }
            return
        });
    };

    configure({
        validateOnBlur: true, 
        validateOnChange: true, 
        validateOnInput: false, 
        validateOnModelUpdate: true, 
    });

    const schema = object({

        name: string().required(),
        contact: string().required(),
        email: string().required().email(),
        subject: string().required(),
        message: string().required()
    });

    const initialValues = { name: "", email: "", contact: "", subject: "", message: "" };
</script>

<template>
    <section class="contact">
        <div class="wrapper">
            <h2>Get in touch with us!</h2>
            <VForm class="form" :validation-schema="schema" :initial-values="initialValues" v-slot="{ meta: formMeta, errors: formErrors }" @submit="handleSubmit">
                <VInputField name="name" type="text" placeholder="Full name" />
                <VInputField name="email" type="email" placeholder="Email address" />
                <VInputField name="contact" type="text" placeholder="Contact number" />
                <VInputField name="subject" type="text" placeholder="Subject" />
                <VTextArea name="message" :rows="8" placeholder="Message"/>

                <div class="success" v-if="state.success"> 
                    <h3 class="black">Message sent!</h3>
                </div>

                <button class="btn large unclear" type="submit">Submit</button>
            </VForm>
        </div>
    </section>
</template>