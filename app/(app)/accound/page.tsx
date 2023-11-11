"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

function Accound() {

    const searchParams = useSearchParams()
    const accoundId = searchParams.get("a")

    return (
        <div>
            Accound {accoundId}
        </div>
    )
}

export default Accound;