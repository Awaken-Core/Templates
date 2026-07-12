import { animationsRegister } from '@/registry/animations/register/animate-register';

const Animations = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      {animationsRegister.map((Component, key) => (
        <div key={key} className='w-full'>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Animations;