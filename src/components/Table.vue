<template>
  <span v-if="checked.length" @click="removeRow(selectedRows)">
    <img src="@/assets/trash-can.svg" />
  </span>
  <span v-if="checked.length" @click="readable()">
    <img src="@/assets/close-envelop.svg" class="open-envelope" />
  </span>
  <span v-if="checked.length" @click="notReadable()">
    <img src="@/assets/open-envelope.svg" class="close-envelope" />
  </span>

  <table>
    <thead>
      <tr>
        <th>check</th>
        <th>Name</th>
        <th>Email Address</th>
        <th>Title</th>
        <th>Message</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in data"
        :key="index"
        :class="[
          { checkedTr: checked.includes(index) },
          { 'read--text': item.isRead },
        ]"
      >
        <td>
          <input
            class="checked--email"
            type="checkbox"
            v-model="item.checked"
            @change="select(index, item.id)"
          />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.message }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  emits: ["emitSelectedToRemove"],
  //props: ['data']
  /*
    props: {
      data: {
        type: String,
        default: '',
        required: true
      }
    }
  */
  data() {
    return {
      checked: [],
      showRemoveIcon: false,
      selectedRows: [],
      isRead: [],
    };
  },
  methods: {
    select(rowId, id) {
      const _index = this.checked.indexOf(rowId);
      _index > -1 ? this.checked.splice(_index, 1) : this.checked.push(rowId);

      const _id = this.selectedRows.indexOf(id);
      _id > -1 ? this.selectedRows.splice(_id, 1) : this.selectedRows.push(id);
    },
    // ...mapMutations({
    //   removeRow: "removeRow",
    // }),
    removeRow() {
      // this.$store.commit("removeRow", this.selectedRows);
      this.$emit("emitSelectedToRemove", this.selectedRows);
      this.selectedRows = [];
      this.checked = [];
    },

    readable() {
      // this.$store.commit('saveReadEmails' , this.checked )
      console.log(this.checked);
      // this.$store.commit('setIsRead', {listOfEmail: this.checked, status: true})
      this.data.forEach((item, index) => {
        if (this.checked.indexOf(index) > -1) item.isRead = true;
      });
    },
    notReadable() {
      // this.$store.commit('saveUnreadEmail' , this.checked)
      this.data.forEach((item, index) => {
        if (this.checked.indexOf(index) > -1) item.isRead = false;
      });
    },
  },

  setup() {
    return {};
  },
};
</script>

<style>
.create__modal {
  position: absolute;
  text-align: center;
  align-items: center;
  border: none;
  background: none;
  font-size: 21px;
  left: 78%;
  top: 3%;
  background-color: #91a0e7;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
  font-family: sans-serif;
}
table {
  width: 70%;
}
td {
  padding: 10px;
  text-align: center;
}
.checked--email {
  width: 20px;
  margin: 10px;
  height: 20px;
  margin-left: 30px;
}
.checkedTr {
  background-color: #ede2e2;
}
img {
  width: 70px;
  height: 50px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 1%;
}
.open-envelope {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 16px;
  left: 28%;
}
.close-envelope {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 23%;
}
.read--text {
  font-weight: 900;
}
</style>
