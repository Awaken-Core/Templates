import { testimonialRegister } from '@/registry';

const Testimonial = () => {
  return (
      <div className='flex w-full flex-col items-center justify-center gap-4'>
        {testimonialRegister.map((Component, key) => (
          <div key={key} className='w-full'>
            <Component />
          </div>
        ))}
      </div>
    )
}

export default Testimonial;