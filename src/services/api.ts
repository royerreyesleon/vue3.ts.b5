const api = async (url: string, method: string, data: object | null): Promise<any> => {
  try {
    const fetchAtributtes: any = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    if (data) {
      fetchAtributtes.body = JSON.stringify(data)
    }

    return await fetch(url, fetchAtributtes)
  } catch (error: any) {
    console.error(error)
    return error
  }
}

export default api
