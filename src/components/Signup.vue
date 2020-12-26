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
import {auth} from "../firebase/config"
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");

        let error=ref(null);//The email address is already in use by another account
        let signUp=async()=>{
         try{
              let res=await auth.createUserWithEmailAndPassword(email.value,password.value)
              if(!res){
                  throw new Error("could not create new user")
              }
            res.user.updateProfile({displayName:displayName.value})
            console.log(res.user);
         }catch(err){
             error.value=err.message;
             console.log(error.value);
         }
  
        }
        return {displayName,email,password,signUp};
    }
}
</script>

<style>

</style>