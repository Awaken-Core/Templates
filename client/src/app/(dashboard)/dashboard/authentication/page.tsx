import { authRegsiter } from '@/registry/authentication/register/auth-register';

const Authentication = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      {authRegsiter.map((Component, key) => (
        <div key={key} className='w-full'>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Authentication;