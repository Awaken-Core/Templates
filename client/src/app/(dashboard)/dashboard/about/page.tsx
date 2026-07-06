import { aboutRegister } from '@/registry';

const About = () => {
  return (
      <div className='flex w-full flex-col items-center justify-center gap-4'>
        {aboutRegister.map((Component, key) => (
          <div key={key} className='w-full'>
            <Component />
          </div>
        ))}
      </div>
    )
}

export default About;