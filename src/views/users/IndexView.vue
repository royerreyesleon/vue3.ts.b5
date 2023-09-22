<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { User } from '@/types/User'
import Users from '@/services/Users'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'

const router = useRouter()
const $loading = useLoading()

const users = ref<User[]>([])

onMounted(() => {
  getAllUsers()
})

const getAllUsers = async () => {
  const loader = $loading.show()

  const request = await Users.getAllService()
  const response = await request.json()
  console.log('request', request)
  console.log('response', response)

  if (request.status != 200) {
    loader.hide()
    Swal.fire('Error', request.error, 'error')
    return
  }
  loader.hide()
  users.value = response.data
}

const detailUser = (id: number) => {
  console.log('detailUser', id)
  router.push({ name: 'user-detail', params: { id: id } })
}
const updateUser = (id: number) => {
  console.log('updateUser', id)
  router.push({ name: 'user-update', params: { id: id } })
}
const deleteUser = (id: number) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      const loader = $loading.show()
      const request = await Users.deleteService(id)
      console.log('request', request)

      if (request.status != 204) {
        loader.hide()
        Swal.fire('Error', request.error, 'error')
        return
      }
      loader.hide()
      users.value = users.value.filter((el) => el.id != id)
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success')
    }
  })
}
</script>

<template>
  <h1 class="text-start">Users</h1>

  <p class="text-start">
    <RouterLink to="/users/create" class="btn btn-success"> Create </RouterLink>
  </p>

  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Email</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>
            <img :src="user.avatar" class="rounded-circle" width="100" />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-secondary mt-1 me-1"
              @click="detailUser(user.id)"
            >
              Detail
            </button>
            <button
              type="button"
              class="btn btn-sm btn-primary mt-1 me-1"
              @click="updateUser(user.id)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-sm btn-danger mt-1 me-1"
              @click="deleteUser(user.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
