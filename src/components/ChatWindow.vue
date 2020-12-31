<template>
    <div class="chat-window">
        <div class="messages" v-for="message in messages" :key="message.id">
            <div class="single">
                <span class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase/config'
export default {
    setup(){
      let messages=ref([]);

      db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
        let results=[];//this onsnapshot run again and array empty again
        snap.docs.forEach((doc)=>{
          let document={...doc.data(),id:doc.id}
          // console.log(doc.data());
          results.push(document);
        })
          messages.value=results;
      })
      return {messages};
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>