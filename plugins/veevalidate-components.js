
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    install: (app, options) => {
        app.component("VForm", Form)
        app.component("VField", Field)
        app.component("VTextArea", Field)
        app.component("VErrorMessage", ErrorMessage)
    }
}