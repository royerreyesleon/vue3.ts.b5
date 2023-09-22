import api from '@/services/api'
import type { UserCreate } from '@/types/User'

const getAllService = async () => {
  return await api('https://reqres.in/api/users?delay=1', 'GET', null)
}

const getOneService = async (id: number) => {
  return await api(`https://reqres.in/api/users/${id}`, 'GET', null)
}

const deleteService = async (id: number) => {
  return await api(`https://reqres.in/api/users/${id}`, 'DELETE', null)
}

const createService = async (data: UserCreate) => {
  return await api(`https://reqres.in/api/users`, 'POST', data)
}

const updateService = async (id: number, data: UserCreate) => {
  return await api(`https://reqres.in/api/users/${id}`, 'PUT', data)
}

export default {
  getAllService,
  getOneService,
  createService,
  updateService,
  deleteService
}
