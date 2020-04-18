<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="toggleMenu">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | dateFilter('datetime')}}</span>
      </div>

      <Dropdown />
    </div>
  </nav>
</template>

<script>
  import Dropdown from "./Dropdown";
  export default {
    name: 'Navbar',
    components: {
      Dropdown
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    data: () => ({
      date: new Date(),
      interval: null
    }),
    methods: {
      toggleMenu() {
        this.$emit('toggle-menu');
      }
    },
    mounted() {
      this.interval = setInterval(() => {
        this.date = new Date();
      }, 1000)
    }

  }
</script>