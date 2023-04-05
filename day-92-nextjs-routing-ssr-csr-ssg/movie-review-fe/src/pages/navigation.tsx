import React from 'react'
import { useRouter } from 'next/router'


export default function NavigationPage(): JSX.Element {
  const [navigate, setNavigate] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    if (navigate) {
      router.push('/contacts')
    }
  }, [navigate])

  return (
    <div>
      <h1>Navigation Bar</h1>
      <button onClick={() => setNavigate(true)}>Contacts</button>
    </div>
  )
}
