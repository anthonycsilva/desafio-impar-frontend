import * as yup from "yup";

const postSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório."),
    status: yup.string().required("O Status é obrigatório"),
})

export default postSchema;