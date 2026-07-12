import { servicesRegister } from '@/registry';

const Service = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      {servicesRegister.map((Component, key) => (
        <div key={key} className='w-full'>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Service;