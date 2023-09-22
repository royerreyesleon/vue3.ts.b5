<script lang="ts">
import { reactive, computed, onMounted } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'
import Users from './../../services/Users'
// import Users from '@/services/Users'

export default {
  setup() {
    const router = useRouter()
    const $loading = useLoading()

    const state = reactive({
      name: '',
      job: ''
    })

    onMounted(() => {
      getOne()
    })

    const getOne = async () => {
      const loader = $loading.show()

      const request = await Users.getOneService(Number(router.currentRoute.value.params.id))
      const response = await request.json()
      console.log('request', request)
      console.log('response', response)

      if (request.status != 200) {
        loader.hide()
        Swal.fire('Error', 'Not found', 'error')
        return
      }
      loader.hide()
      state.name = response.data.first_name
      state.job = response.data.last_name
    }

    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2) },
        job: { required, minLength: minLength(2) }
      }
    })
    const v$ = useVuelidate(rules, state)

    const submitCreate = async (e: Event) => {
      e.preventDefault()
      const loader = $loading.show()

      console.log('state', state)

      const data = {
        name: state.name,
        job: state.job
      }
      const request = await Users.updateService(Number(router.currentRoute.value.params.id), data)
      const response = await request.json()
      console.log('request', request)
      console.log('response', response)

      if (request.status != 200) {
        loader.hide()
        Swal.fire('Error', request.error, 'error')
        return
      }
      loader.hide()
      Swal.fire('Updated', 'Correctly updated', 'success')
      router.push({ path: '/users/index' })
    }

    return {
      v$,
      submitCreate
    }
  }
}
</script>

<template>
  <h1 class="text-start">User Update</h1>

  <p class="text-start">
    <RouterLink to="/users/index" class="btn btn-secondary"> Back </RouterLink>
  </p>

  <div class="row d-flex justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <form @submit="submitCreate">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                :class="{
                  'form-control': !v$.name.$dirty,
                  'form-control is-invalid': v$.name.$errors.length,
                  'form-control is-valid': !v$.name.$errors.length && v$.name.$dirty
                }"
                id="name"
                v-model="v$.name.$model"
              />
              <div class="invalid-feedback" v-for="error of v$.name.$errors" :key="error.$uid">
                {{ error.$message }}
              </div>
            </div>

            <div class="mb-3">
              <label for="job" class="form-label">Job</label>
              <input
                type="job"
                :class="{
                  'form-control': !v$.job.$dirty,
                  'form-control is-invalid': v$.job.$errors.length,
                  'form-control is-valid': !v$.job.$errors.length && v$.job.$dirty
                }"
                id="job"
                autocomplete="on"
                v-model="v$.job.$model"
              />
              <div class="invalid-feedback" v-for="error of v$.job.$errors" :key="error.$uid">
                {{ error.$message }}
              </div>
            </div>

            <button type="submit" class="btn btn-primary w-100 py-2" :disabled="v$.$invalid">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
