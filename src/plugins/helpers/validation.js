
class ValidateString {

    required() {
        this.isRequired = true
        return this
    }
    min(minValue) {
        this.minValue = minValue
        return this
    }
    max(maxValue) {
        this.maxValue = maxValue
        return this
    }
    validate(value, key) {
        let errors = []
        if (this.isRequired && !value) {
            errors.push({
                type: "required",
                message: `the ${key} is required`
            })
        } else if (this.maxValue && value.length > this.maxValue) {
            errors.push({
                type: "max",
                message: `the ${key} should be less than ${this.maxValue}`
            })
        } else if (this.minValue && value.length < this.minValue) {
            errors.push({
                type: "min",
                message: `the ${key} should be greater than ${this.minValue}`
            })
        }
        return errors

    }

}
class Schema {
    constructor(schema) {
        this.schema = { ...schema }
        this.errors = {}
    }
    validate(form) {
        Object.entries(form).forEach(([key, value]) => {
            this.errors[key] = this.schema[key].validate(value, key)
        })
        return this.errors
    }
}
function string() {
    return new ValidateString()
}
function schema(ourSchema) {
    return new Schema(ourSchema)
}

export {
    string,
    schema
}

