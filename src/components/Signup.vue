<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composables/useSignup"
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");

        let  {error,createAccount}=useSignup()
        let signUp=async()=>{
           let res=await createAccount(email.value,password.value,displayName.value);
            console.log(res.user)
        }
        return {displayName,email,password,signUp};
    }
}
</script>

<style>

</style>