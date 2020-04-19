<template>
   <form class="card auth-card" @submit.prevent="onSubmit">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
            <input
                id="email"
                type="text"
                v-model.trim="email"
                :class="{invalid: validateEmail($v)}"
            >
            <label for="email">Email</label>
            <small
              class="helper-text invalid"
              v-if="validateEmail($v)"
            >
              Некорректный Email!
            </small>
            </div>
            <div class="input-field">
            <input
                id="password"
                type="password"
                v-model="password"
                :class="{invalid: validatePassword($v)}"
            >
            <label for="password">Пароль</label>
            <small
              class="helper-text invalid"
              v-if="validatePassword($v)"
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
  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      onSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        const formData = {
          email: this.email,
          password: this.password
        };
        console.log(formData);
        this.$router.push('/');
      },
      validateEmail($v) {
        return ($v.email.$dirty && !$v.email.required) ||
          ($v.email.$dirty && !$v.email.email);
      },
      validatePassword($v) {
        return ($v.password.$dirty && !$v.password.required) ||
          ($v.password.$dirty && !$v.password.minLength);
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