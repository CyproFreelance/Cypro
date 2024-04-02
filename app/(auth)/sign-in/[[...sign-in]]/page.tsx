'use client'
import { SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignedIn = () => {
  const router = useRouter()
  
  return (<>{router.push('/')}</>)
}

export default SignedIn
