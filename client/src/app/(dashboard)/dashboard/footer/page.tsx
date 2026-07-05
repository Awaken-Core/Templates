import { footerRegister } from '@/registry';
import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      {footerRegister.map((Component, key) => (
        <div key={key} className='w-full'>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Footer;
