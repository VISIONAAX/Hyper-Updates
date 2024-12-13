import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { features } from 'process';
import { SiNextdotjs } from "react-icons/si";


type feature = {
  key: number;
  name: string;
  description: string;
  icon: string;
}
export default function Home() {
  const features: feature[] = [
    {
      key: 1,
      name: "Private Blockchain ",
      description: "Created a private blockchain using Avalanche HyperSDK",
      icon: "SiNextdotjs"
    },
    {
      key: 1,
      name: "Updates CLI",
      description: "Oragsations can use the Updates CLI to create project and add new updates",
      icon: "SiNextdotjs"
    }, {
      key: 1,
      name: "Blockchain calls from microcontrollers",
      description: "We have created a hyperVM without a wallet.",
      icon: "SiNextdotjs"
    }, {
      key: 1,
      name: "Secure And Immutable",
      description: "Leavering Blockchain's immutablity and security",
      icon: "SiNextdotjs"
    }, {
      key: 1,
      name: "User Friendly Frontend",
      description: "Created hyper updates UI where new projects can be created and updates can be pushed",
      icon: "SiNextdotjs"
    },
  ]
  return (

    <main className=''>
      <div className='flex flex-row px-40 h-screen'>
        <Image src='/image.png' alt='' fill className='-z-0 opacity-30' />
        <div className='flex flex-col mt-auto mb-14 z-30'>
          <div className='flex flex-col gap-4'>
            <button className='bg-slate-200 w-fit -mb-2 px-4 py-1 text-sm rounded-full'>Like our project on devpost</button>
            <p className='text-5xl font-semibold'>Decentralized Powers</p>
            <p className='text-5xl font-semibold'>Effortless Update</p>
            <p className='text-xl flex flex-col'><span>Revolutionize your software experience with decentralized updates.</span> <span>Trust, security, and seamless evolution — all in one platform.</span></p>
          </div>
          <Button className='w-fit mt-5'>New Project</Button>
        </div>
        <div className='relative w-[70vh] ml-auto'>
          {/* <Image src='/blockchain_doodle_cricle-removebg-preview.png' alt='' fill
            quality={100}
            style={{
              objectFit: 'contain',
            }}
            className='' /> */}
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-10 lg:px-60 py-40 bg-[#181c2e] text-white' style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 90%, 0 100%)' }}>

        <div className='w-80'>
          <p className='text-4xl font-bold leading-relaxed'>Explore What <span className='text-[#E84142]'>Hyper Updates</span> Provides</p>
        </div>
        {features.map((data) => (
          <div key={data.key} className='drop-shadow-[0_20px_20px_rgba(0,0,0,0.40)] transition-all duration-500 hover:scale-[1.02]'>
            <div className='flex flex-col z-10  w-80 h-60 rounded p-5 bg-[#181c2e]' style={{ clipPath: 'polygon(0 0,calc(100% - 80.00px) 0,100% 80.00px,100% 100%,0 100%)' }}>
              <div className='text-5xl pb-5'>
                <SiNextdotjs />
              </div>
              <p className='font-bold text-2xl pb-6'>{data.name}</p>
              <p>{data.description}</p>
            </div>
          </div>
        ))}

      </div>
      <div className='py-20 flex flex-row px-40 items-center'>
        <div className='lg:w-1/3'>
          <p className='text-lg mb-2'>Create A New Project to get started!</p>
          <p className='text-4xl font-semibold'>
            Secure Your Updates, Unleash Innovation!
          </p>
          <p className='my-5 text-base'>
            Lock in confidence with secure updates. Unleash innovation without compromise, ensuring your software evolution is both cutting-edge and secure.
          </p>
          <Button>New Project</Button>
        </div>
        <div className='relative w-[80vh] h-[40vh] ml-auto '>
          <Image src="/ss site.jpg" alt='' fill style={{ objectFit: "contain" }} className='rounded-2xl' />
        </div>
      </div>
      <div className=' px-40 flex flex-row gap-10 items-center justify-center py-20 bg-neutral-100'>
        <p className='text-5xl font-bold'>Built on</p>
        <div className='relative w-40 h-40'>
          <Image src="/avalanche-avax-logo.png" alt="" fill style={{ objectFit: "contain" }} />
        </div>
      </div>


    </main>
  )
}
