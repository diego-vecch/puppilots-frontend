export async function response (email: string, password: string): Promise<Response> {
  return await fetch('https://puppilots.com/api/customer/register', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  })
}
