

<script>
import { string, schema } from '../plugins/helpers/validation'
const validateSchema = schema({
    username: string().required("custom required error is added").min(5).max(10).test(value=>{
        return !value.match(/^[a-zA-Z]+$/)
    },'username should be only letters'),
    email: string().required()
    
})
export default {
  name: "TestForm",
  data() {
    return {
      form: {
        username: "",
        email: "",
      },
    };
  },
  schema:validateSchema,
  computed: {
    errors() {
      return this.$v.errors.email;
    },
  },
  methods: {
    validate(e) {
      e.preventDefault();
    },
  },
};
</script>
<template>
  <div>
    <form @submit="validate">
      <div>
        <input type="text" v-model="form.username" />
        <ul v-if="$v.errors.username.length > 0" style="color: red">
          <li v-for="(error, i) in $v.errors.username" :key="i">
            {{ error.message }}
          </li>
        </ul>
      </div>
      <input type="text" v-model="form.email" />
      <ul v-if="$v.errors.email.length > 0" style="color: red">
        <li v-for="(error, i) in $v.errors.email" :key="i">
          {{ error.message }}
        </li>
      </ul>
      <input type="submit" />
      <br />
    </form>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
