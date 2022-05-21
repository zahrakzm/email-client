<template>
  <div class="sidebar--menu">
    <button class="inbox-button">
      <router-link to="inbox">Inbox</router-link>
    </button>
    <button><router-link to="sent">Sent</router-link></button>
    <button><router-link to="trash">Trash</router-link></button>
  </div>
</template>
<script>
export default {
  setup() {
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.sidebar--menu {
  display: flex;
  flex-direction: column;
  width: 10%;
  background-color: peachpuff;
  height: 100vh;
  position: fixed;
}
button {
  font-size: 20px;
  border: none;
  background: none;
  padding: 15px;
}
.inbox-button {
  margin-top: 30%;
  background-color: rgb(241, 152, 34);
}
</style>
