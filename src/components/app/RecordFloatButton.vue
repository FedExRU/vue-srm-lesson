<template>
  <div>
    <template v-if="recordButtonVisible">
      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </template>
  </div>
</template>


<script>
  export default {
    name: 'recordFloatButton',
    computed: {
      recordButtonVisible() {
        return '/record' !== this.$route.path;
      }
    }
  }
</script>