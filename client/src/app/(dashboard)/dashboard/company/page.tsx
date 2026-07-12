import { companyRegister } from '@/registry';
import React from 'react'

const Company = () => {
  return (
      <div className='flex w-full flex-col items-center justify-center gap-4'>
        {companyRegister.map((Component, key) => (
          <div key={key} className='w-full'>
            <Component />
          </div>
        ))}
      </div>
    )
}

export default Company;