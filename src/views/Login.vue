<template>
   <form class="card auth-card" @submit.prevent="onSubmit">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
            <input
                id="email"
                type="text"
                v-model.trim="email"
                :class="{invalid: validator.validateEmail($v)}"
            >
            <label for="email">Email</label>
            <small
              class="helper-text invalid"
              v-if="validator.validateEmail($v)"
            >
              Некорректный Email!
            </small>
            </div>
            <div class="input-field">
            <input
                id="password"
                type="password"
                v-model="password"
                :class="{invalid: validator.validatePassword($v)}"
            >
            <label for="password">Пароль</label>
            <small
              class="helper-text invalid"
              v-if="validator.validatePassword($v)"
            >
              Пароль не должен быть пустым и быть не менее {{$v.password.$params.minLength.min}} символов
            </small>
            </div>
        </div>
        <div class="card-action">
            <div>
            <button
                class="btn waves-effect waves-light auth-submit"
                type="submit"
            >
                Войти
                <i class="material-icons right">send</i>
            </button>
            </div>

            <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators'
  import Validator from '../scripts/validator'
  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: '',
      validator: null
    }),
    beforeDestroy() {
      delete this.validator;
    },
    beforeMount() {
      this.validator = Validator;
    },
    methods: {
      async onSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }

        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
          this.flash().destroyAll();
          this.flash('Выполнена авторизация', 'success');
          await this.$router.push('/');
        } catch (e) {
          this.flash(e.message, 'error');
        }
      }
    },
    validations: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  }
</script>