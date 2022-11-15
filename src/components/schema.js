import { string, schema } from '../plugins/helpers/validation'
const validateSchema = schema({
    username: string().required().min(5).max(10),
    email: string().required()
})

export default validateSchema