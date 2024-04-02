'use client'
import DashNav from '@/components/shared/DashNav'
import { Button } from '@/components/ui/button'
import { SignInButton, SignOutButton, UserProfile, useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const router = useRouter()

  return (
    <>
      <DashNav/>
      <div className="flex h-[70vh] flex-col items-center justify-center">
        <h1 className='text-4xl text-white font-bold p-4'>Dashboard is currently Under Construction</h1>
        <p className='text-xl text-slate-300 font-regular mb-4'>Please Sign Out to Redirect to Home</p>
        <SignOutButton >
          <button onClick={() => {router.push('/')}} className='bg-white text-zinc-900 hover:bg-slate-200 rounded-[3px] px-6 py-4 text-2xl'>Sign Out</button>
        </SignOutButton>
      </div>
    </>
  )
}

export default Dashboard
