import { faqRegister } from '@/registry';
import React from 'react'

const Faq = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      {faqRegister.map((Component, key) => (
        <div key={key} className='w-full'>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Faq;