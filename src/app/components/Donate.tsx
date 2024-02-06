import React from 'react'
import { PaymentForm } from './PaymentForm'

export default function Donate() {
  return (
    <section className='h-screen pt-20 flex flex-col items-center'>
        <div className="flex justify-center" id="donate">
            <h1 className='font-bebas text-7xl text-primary'>Donate</h1>
        </div>
        <div className='w-1/2'>
            <PaymentForm />
        </div>
    </section>
  )
}
