import { apiPaths } from '@/constants/apiUrl'

export default function registerApiStore() {
  type typeRegisterPost = {
    account: string
    password: string
    email: string
  }

  const func_RegisterPost = async (params: typeRegisterPost) => {
    const _apiUrl = apiPaths.RegisterPost
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
      console.error('api', error)
      return error
    }
  }

  const func_checkAccount = async () => {
    const _apiUrl = apiPaths.CheckRegisterAccountGet
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'GET',
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
  const func_checkEmail = async () => {
    const _apiUrl = apiPaths.CheckRegisterEmailGet
    try {
      const _result = await $fetch(_apiUrl, {
        method: 'GET',
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

  const func_DeleteRegisterAllDelete = async () => {
    const _apiUrl = apiPaths.RegisterDelete
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

  return {
    func_checkAccount,
    func_checkEmail,
    func_RegisterPost,
    func_DeleteRegisterAllDelete,
  }
}
