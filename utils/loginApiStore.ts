import { apiPaths } from '@/constants/apiUrl'

export default function registerApiStore() {
  type LoginPost = {
    account?: string
    password: string
    email?: string
  }

  const func_loginPost = async (params: LoginPost) => {
    const _apiUrl = apiPaths.LoginPost
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

  return {
    func_loginPost,
  }
}
