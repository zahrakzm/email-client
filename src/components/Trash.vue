<template>
  <div v-if="$store.state.trashEmails.length">
    <Table :data="$store.state.trashEmails" />
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Title</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          Empty List
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Table from "./Table.vue";
export default {
  components: {
    Table,
  },
  setup() {},
};
</script>
<style scoped>
table {
  width: 90%;
}
div {
  margin: auto;
}
tr {
  text-align: center;
}
</style>
