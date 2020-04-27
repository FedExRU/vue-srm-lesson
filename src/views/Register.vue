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
          Некорректный email!
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: validator.validatePassword($v)}"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="validator.validatePassword($v)"
        >
          Пароль не должен быть пустым и быть не менее {{$v.password.$params.minLength.min}} символов!
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: validator.validateRequired($v, 'name')}"
        >
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="validator.validateRequired($v, 'name')"
        >
          Имя обязательно для заполнения!
        </small>
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            v-model="rules"
            :class="{invalid: validator.validateCheckbox($v, 'rules')}"
          />
          <span>С правилами согласен</span>
        </label>
      </p>
      <small
        class="helper-text invalid"
        v-if="validator.validateCheckbox($v, 'rules')"
      >
        Вы должны ознакомиться с правилами!
      </small>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength, sameAs} from 'vuelidate/lib/validators';
  import Validator from '../scripts/validator';
  export default {
    name: 'Register',
    data: () => ({
      email: '',
      password: '',
      name: '',
      rules: '',
      validator: '',
    }),
    beforeDestroy() {
      delete this.validator;
    },
    beforeMount() {
      this.validator = Validator;
    },
    methods: {
      onSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        this.flash().destroyAll();
        this.flash(`Выполнена регистрация! На ваш e-mail ${this.email} отправлено письмо для верификации адреса`, 'success');
        this.$router.push('/');
      }
    },
    validations: {
      email: {
        email,
        required
      },
      name: {
        required,
        minLength: minLength(2)
      },
      password: {
        required,
        minLength: minLength(5)
      },
      rules: {
        required,
        sameAs: sameAs(() => true)
      }
    }
  }
</script>