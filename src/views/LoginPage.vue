<script lang="ts">
import { reactive, computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import api from '@/services/api'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'

export default {
  setup() {
    const router = useRouter()

    const $loading = useLoading()

    const state = reactive({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    })
    const rules = computed(() => {
      return {
        email: { required, email, minLength: minLength(3) },
        password: { required, minLength: minLength(2) }
      }
    })
    const v$ = useVuelidate(rules, state)

    const submitLogin = async (e: Event) => {
      e.preventDefault()
      const loader = $loading.show()

      console.log('state', state)

      const data = {
        email: state.email,
        password: state.password
      }
      const loginRequest = await api('https://reqres.in/api/login', 'POST', data)
      const response = await loginRequest.json()
      console.log('loginRequest', loginRequest)
      console.log('response', response)
      if (loginRequest.status == 200) {
        localStorage.setItem('token', response.token)
        Swal.fire('Success', 'You are successfully logged in', 'success')
        router.push({ path: '/', replace: true })
      } else {
        Swal.fire('Error', response.error, 'error')
      }
      loader.hide()
    }

    return {
      v$,
      submitLogin
    }
  }
}
</script>
<template>
  <div class="container mt-5 pt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-4 col-lg-6 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="text-center my-4">
              <img src="@/assets/vue-logo.svg" alt="Logo" width="72" height="57" />
              <img src="@/assets/bootstrap-logo.svg" alt="Logo" width="72" height="57" />
            </div>

            <h1 class="card-title h3 mb-3 text-center">Please sign in</h1>

            <form @submit="submitLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  :class="{
                    'form-control': !v$.email.$dirty,
                    'form-control is-invalid': v$.email.$errors.length,
                    'form-control is-valid': !v$.email.$errors.length && v$.email.$dirty
                  }"
                  id="email"
                  v-model="v$.email.$model"
                />
                <div class="invalid-feedback" v-for="error of v$.email.$errors" :key="error.$uid">
                  {{ error.$message }}
                </div>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  :class="{
                    'form-control': !v$.password.$dirty,
                    'form-control is-invalid': v$.password.$errors.length,
                    'form-control is-valid': !v$.password.$errors.length && v$.password.$dirty
                  }"
                  id="password"
                  autocomplete="on"
                  v-model="v$.password.$model"
                />
                <div
                  class="invalid-feedback"
                  v-for="error of v$.password.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </div>
              </div>

              <button type="submit" class="btn btn-secondary w-100 py-2" :disabled="v$.$invalid">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
