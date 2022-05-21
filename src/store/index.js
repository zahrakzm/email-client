import { createStore } from "vuex";

const store = createStore({
  state: {
    receivedEmail: [],
    sentEmails: [],
    trashEmails: [],
    readEmails: [],
  },
  mutations: {
    setReceivedEmails(state, listOfEmails) {
      state.receivedEmail = listOfEmails;
    },
    setSentEmails(state, listOfEmails) {
      state.sentEmails = listOfEmails;
    },
    removeRow(state, { selectedRows, status }) {
      for (let id of selectedRows) {
        if (status == "inbox") {
          let index = state.receivedEmail.findIndex((el) => el.id == id);
          let _trash = state.receivedEmail.splice(index, 1); //remove tr here
          // const trash = state.receivedEmail.filter((el) =>
          //   selectedRows.includes(el.id) );
          // state.trashEmails = state.trashEmails.concat(...trash);
          // _trash[0].checked = false
          state.trashEmails.push({ ..._trash[0], checked: false }); //equal to three above lines
        } else if (status == "sent") {
          let index = state.sentEmails.findIndex((el) => el.id == id);
          let _trash = state.sentEmails.splice(index, 1);
          state.trashEmails.push({ ..._trash[0], checked: false });
        }
      }
    },
    saveReadEmails(state, listOfEmails) {
      state.readEmails = listOfEmails.concat(...state.readEmails);
    },
    saveUnreadEmail(state, listOfEmails) {
      state.readEmails = state.readEmails.filter(
        (el) => !listOfEmails.includes(el)
      );
    },
    setIsRead(state, { listOfEmail, status }) {
      console.log(listOfEmail, status);
      for (let i = 0; i < state.receivedEmail.length; i++) {
        if (listOfEmail.indexOf(i) > -1)
          state.receivedEmail[i]["isRead"] = status;
      }
    },
    pushEmails(state, email) {
      state.sentEmails.unshift(email);
    },
  },
  actions: {},
  modules: {},
});
export default store;
