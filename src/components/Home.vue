<template>
  <div class="flex--menu">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>
<script>
import FakeMe from "fakeme";
import Sidebar from "./Sidebar.vue";
import { useStore } from "vuex";
export default {
  components: { Sidebar },
  setup() {
    const fm = new FakeMe({ lang: "en" });
    const name = fm.name({ count: 100 });
    const email = fm.email({ count: 100 });
    const title = fm.random(
      [
        "Dear valued member",
        "Dear account holder",
        "Dear customer",
        "Dear Zahra",
      ],
      100
    );
    const message = fm.random(
      [
        "this is a test message1",
        "this is a test message2",
        "this is a test message3",
        "this is a test message4",
      ],
      100
    );

    const date = fm.random(
      [
        "January 25",
        "February 11",
        "March 3",
        "April 8",
        "May 20",
        "June 11",
        "July 9",
        "August 7",
        "September 5",
        "October 2",
      ],
      100
    );
    const receivedEmails = () => {
      let result = [];
      for (let i = 0; i < email.length; i++) {
        result.push({
          name: name[i],
          email: email[i],
          title: title[i],
          message: message[i],
          date: date[i],
          id: i,
          checked: false,
          isRead: false,
        });
      }

      const final = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      result.length = final;
      return result;
    };
    const sendEmails = () => {
      let result = [];
      for (let i = 10; i < email.length; i++) {
        result.push({
          email: email[i],
          name: name[i],
          title: title[i],
          date: date[i],
          message: message[i],
          id: i,
          checked: false,
          isRead: false,
        });
      }
      const final = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      result.length = final;
      return result;
    };

    const store = useStore();
    store.commit("setReceivedEmails", receivedEmails());
    store.commit("setSentEmails", sendEmails());
  },
};
</script>

<style>
body {
  margin: 0;
}
table {
  margin: auto;
  margin-top: 5%;
  font-size: 23px;
  border: 3px solid #d7e568;
  border-collapse: collapse;
  border-collapse: collapse;
}
tr {
  padding: 10px;
  border: 3px solid #d7e568;
}
td {
  border: 3px solid #d7e568;
}
.flex--menu {
  display: flex;
  flex-direction: row;
}
</style>
