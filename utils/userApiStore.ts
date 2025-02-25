import { apiPaths } from '@/constants/apiUrl'

export default function userApiStore() {
  type typeAddUserPost = {
    name: string
    age: number
    email?: string
  }

  type typeDeleteUserDelete = {
    name: string
  }

  const func_AddUserPost = async (params: typeAddUserPost) => {
    const _apiUrl = apiPaths.AddUserPost
    console.log(_apiUrl, '_apiUrl ')
    const _params = params
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'POST',
        body: _params,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return _result
    } catch (error) {
      console.error(error)
      return error
    }
  }

  const func_DeleteProfileDelete = async (params: typeDeleteUserDelete) => {
    const _apiUrl = apiPaths.DeleteUserDelete
    const _params = params
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'DELETE',
        body: _params,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return _result
    } catch (error) {
      console.error('api', error)
      return error
    }
  }

  const func_DeleteAllDelete = async () => {
    const _apiUrl = apiPaths.DeleteUserAllDelete
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return _result
    } catch (error) {
      console.error('api', error)
      return error
    }
  }

  const func_CheckUserAllGet = async () => {
    const _apiUrl = apiPaths.CheckUserAllGet
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return _result
    } catch (error) {
      console.error('api', error)
      return error
    }
  }

  const func_CheckUserPersonalPost = async (_params: string) => {
    const _apiUrl = apiPaths.CheckUserPersonalPost
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'POST',
        body: { account: _params },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return _result
    } catch (error) {
      console.error('api', error)
      return error
    }
  }

  return {
    func_AddUserPost,
    func_DeleteProfileDelete,
    func_DeleteAllDelete,
    func_CheckUserAllGet,
    func_CheckUserPersonalPost,
  }
}
