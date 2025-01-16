import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function PricingModel() {
  return (
    <div className='my-10'>
        <HeadingDescription 
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
            {Lookup.pricingOption.map((pricing,index)=>(
               <div key={index} className='flex flex-col items-center p-5 border rounded-xl'>   
                  <Image src={pricing.icon} alt={pricing.title}
                    width={60}
                    height={60}/>
                    <h2 className='font-medium text-2xl'>{pricing.title}</h2>
                    <div>
                        {pricing.features.map((feature,index)=>(                           
                        ))}
                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default PricingModel