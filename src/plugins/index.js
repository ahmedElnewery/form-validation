const validationPlugin = {
    install (Vue) {
      Vue.mixin({
        computed: {
          $v() {
            let valid = true
            let errors = {}
            // errorObject = {
            //     username: {
            //         type:"max",
            //         message:""
            //     }

            // }

            
            const schema = this.$options.schema
            if (schema) {
                if(this.form){
                errors =  schema.validate(this.form)
                if( Object.keys(errors).length === 0){
                       valid =true
                } else {
                    valid =false
                }
            }
            }
  
            return {
              valid,
              errors
            }
          }
        }
      })
    }
  }
  

export default validationPlugin
