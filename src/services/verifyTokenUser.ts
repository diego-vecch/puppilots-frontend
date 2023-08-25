import { USER } from '../types/userSession'
// getInfoUserFromToken
export const verifyTokenUser = async (token: string, linkUserVerifyToken: string): Promise<USER> => {
  return await fetch(`${linkUserVerifyToken}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({})
  }).then(
    async (res) => {
      const data = await res.json()
      return data as USER
    }
  )
}
