"use client"
import { useSession } from 'next-auth/react';
import React from 'react'

export function User() {
    const { data: session } = useSession();
  return (
    <div>
        test
        <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
