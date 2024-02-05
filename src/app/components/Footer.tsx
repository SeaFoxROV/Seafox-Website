"use client"
import React from 'react'
import { Divider } from '@nextui-org/react'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  return (
    <section className='pb-10 font-roboto' id='Footer'>
        <Divider orientation="horizontal" className='mb-7'/>
        <div className='flex flex-row justify-center'>
            <Link
                className='flex flex-row justify-center align-middle items-center'
                href="https://www.instagram.com/seafoxinventive?igsh=MTdkM2dhNHJ4ZHFxYg=="
            >
                <Instagram className="w-[25px] m-2" fill="white"/>
                <p className='hover:text-primary'>@seafoxinventive</p>
            </Link>
            <Link
                className='flex flex-row justify-center align-middle items-center'
                href="https://www.facebook.com/SeaFoxInventive"
            >
                <Facebook className="w-[25px] m-2" fill="white"/>
                <p className='hover:text-primary'>SeaFox Inventive</p>
            </Link>
        </div>
        <div className='flex justify-center m-7'>
            <Image
                src="/images/logo.png"
                width={250}
                height={250}
                alt="Seafox Logo"
            />
        </div>
        <h1 className='text-end pr-5'>
            Copyright © 2024
        </h1>

    </section>
  )
}