/**
 * Класс для валидации полей с помощью
 * валидатора Vuelidate.
 *
 * @see https://github.com/vuelidate/vuelidate
 */
export default class Validator {

  /**
   * Валидация email'а.
   *
   * @param $v     Валидатор Vuelidate
   * @param _email Алиас для поля email
   *
   * @returns {boolean|boolean}
   */
  static validateEmail($v, _email = 'email') {
    return ($v[_email].$dirty && !$v[_email].required) ||
      ($v[_email].$dirty && !$v[_email].email);
  }

  /**
   * Валидация пароля.
   *
   * @param $v        Валидатор Vuelidate
   * @param _password Алиас для поля password
   *
   * @returns {boolean|boolean}
   */
  static validatePassword($v, _password = 'password') {
    return ($v[_password].$dirty && !$v[_password].required) ||
      ($v[_password].$dirty && !$v[_password].minLength);
  }

  /**
   * Проверка на заполненность поля.
   *
   * @param $v     Валидатор Vuelidate
   * @param _field Алиас поля
   *
   * @returns {*}
   */
  static validateRequired($v, _field) {
    return $v[_field].$dirty && !$v[_field].required;
  }

  /**
   * Проверка на checkbox[checked].
   * Необходимо использование функции валидации sameAs
   *
   * @param $v     Валидатор Vuelidate
   * @param _field Алиас поля
   *
   * @returns {boolean|boolean}
   */
  static validateCheckbox($v, _field) {
    return $v[_field].$dirty && !$v[_field].sameAs
  }

}