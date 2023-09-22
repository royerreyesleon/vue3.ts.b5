<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { User } from '@/types/User'
import Users from '@/services/Users'
import Swal from 'sweetalert2'
import { useLoading } from 'vue-loading-overlay'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
// const loader = useLoading()
const $loading = useLoading()

const user = ref<User>({
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  avatar: ''
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
  user.value = response.data
}
</script>

<template>
  <h1 class="text-start">User Detail</h1>

  <p class="text-start">
    <RouterLink to="/users/index" class="btn btn-secondary"> Back </RouterLink>
  </p>

  <div class="row d-flex justify-content-center" v-if="user.avatar">
    <div class="col-md-3">
      <div class="card">
        <img :src="user.avatar" class="card-img-top" height="220" />
        <div class="card-body">
          <h5 class="card-title">Id: {{ user.id }} - {{ user.first_name }} {{ user.last_name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
