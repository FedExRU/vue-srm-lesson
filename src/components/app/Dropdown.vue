<template>
  <ul class="right hide-on-small-and-down">
    <li>
      <a
        class="dropdown-trigger black-text"
        href="#"
        data-target="dropdown"
        ref="dropdown"
      >
        USER NAME
        <i class="material-icons right">arrow_drop_down</i>
      </a>

      <ul id='dropdown' class='dropdown-content'>
        <li>
          <router-link to="/profile" class="black-text">
            <i class="material-icons">account_circle</i>Профиль
          </router-link>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li>
          <a href="#" class="black-text" @click.prevent="logout">
            <i class="material-icons">assignment_return</i>Выйти
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Dropdown',
    beforeDestroy() {
      if (this.dropdown && this.dropdown.destroy) {
        this.dropdown.destroy();
      }
    },
    data: () => ({
      dropdown: null
    }),
    methods: {
      logout() {
        this.flash().destroyAll();
        this.flash('Выполнен выход из системы', 'success');
        this.$router.push({
          path: '/login',
          query: {
            message: 'logout'
          }
        });
      }
    },
    mounted() {
      this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: false
      });
    }
  }
</script>