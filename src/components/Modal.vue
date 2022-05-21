<template>
  <transition name="modal-animation">
    <div class="modal">
      <transition name="modal-animation-inner">
        <div class="modal-inner">
          <!-- modal content -->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  setup() {},
};
</script>
<style scoped>
.modal {
  width: 40%;
  position: absolute;
  top: 10%;
  left: 30%;
  background-color: #aeb5d7;
  height: 600px;
}
</style>
