<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.clear()
  router.push({ name: 'login', replace: true })
}
</script>

<template>
  <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/users/index">
        <img
          src="@/assets/vue-logo.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        <img
          src="@/assets/bootstrap-logo.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <RouterLink class="nav-link" to="/users/index">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/page1">Page 1</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/page2">Page 2</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/page3">Page 3</RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-danger" type="button" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
