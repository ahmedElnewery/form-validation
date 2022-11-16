import { string, schema } from '../plugins/helpers/validation'
const validateSchema = schema({
    username: string().required("custom required error is added").min(5).max(10).test(value=>{
        return !value.match(/^[a-zA-Z]+$/)
    },'username should be only letters'),
    email: string().required()
 
    
})

export default validateSchema