<template>
  <div class="welcome container">
    <Signup></Signup>
    <Login></Login>
  </div>
</template>

<script>
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup },

}
</script>

<style>
     .welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>