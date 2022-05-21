<template>
  <Modal v-show="modalActive">
    <div class="modal-content">
      <label> To :</label>
      <input v-model="receiver" type="text" />
      <label>Title : </label>
      <input v-model="title" type="text" />
      <br />
      <label>Message : </label>
      <textarea
        v-model="message"
        style="font-size: 18px"
        cols="30"
        rows="10"
      ></textarea>
      <button @click="sendEmail" class="send__button">Send</button>
    </div>
  </Modal>
  <button @click="sendEmail" class="create__modal" type="button">
    <span>+</span> Compose
  </button>
  <Table
    :data="$store.state.receivedEmail"
    @emitSelectedToRemove="emitReceiveEmails"
  ></Table>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
import Modal from "./Modal.vue";
import Table from "./Table.vue";
export default {
  methods: {
    emitReceiveEmails(selected) {
      this.$store.commit("removeRow", {
        selectedRows: selected,
        status: "inbox",
      });
      console.log("selected :>> ", selected);
    },
  },
  components: {
    Table,
    Modal,
  },
  setup() {
    const receiver = ref("");
    const title = ref("");
    const message = ref("");
    const modalActive = ref(false);
    const store = useStore();
    const sendEmail = () => {
      modalActive.value = !modalActive.value;
      if (receiver.value && title.value && message.value) {
        let result = {
          email: receiver.value,
          title: title.value,
          message: message.value,
          name: "",
          date: "",
          id: store.state.sentEmails.length,
          checked: false,
          isRead: false,
        };
        store.commit("pushEmails", result);
        console.log("result :>> ", result);
        receiver.value = "";
        title.value = "";
        message.value = "";
      }
    };
    return {
      modalActive,
      sendEmail,
      title,
      message,
      receiver,
    };
  },
};
</script>
<style scoped>
label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  width: 400px;
  line-height: 26px;
  margin-bottom: 10px;
}

input {
  height: 20px;
  flex: 0 0 40px;
  margin-left: 10px;
  font-size: 18px;
}
.modal-content {
  position: absolute;
  margin: auto;
  top: 8%;
  left: 20%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
}
div {
  margin: auto;
}
.send__button {
  border: none;
  background: none;
  font-size: 20px;
  font-family: sans-serif;
  background-color: antiquewhite;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  color: blue;
  margin-top: 5%;
}
</style>
