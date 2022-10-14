import React, { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'

function ClientSide ({children}: PropsWithChildren<unknown>) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => setHydrated(true), [])

  return hydrated ? <>{children}</> : null
}

export default ClientSide
