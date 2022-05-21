<template>
  <Table
    :data="$store.state.sentEmails"
    @emitSelectedToRemove="emitSentEmails"
  ></Table>
</template>

<script>
import Table from "./Table.vue";
export default {
  data() {
    return {};
  },
  methods: {
    emitSentEmails(selected) {
      this.$store.commit("removeRow", {
        selectedRows: selected,
        status: "sent",
      });
    },
  },
  components: {
    Table,
  },
  setup() {},
};
</script>
<style scoped>
div {
  margin: auto;
}
</style>
