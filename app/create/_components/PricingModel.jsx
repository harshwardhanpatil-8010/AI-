'use client'
import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { Button } from '@/components/ui/button'

function PricingModel() {
  useEffect(() =>{
    if(formData?.title && typeof window!=='undefined'){
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  },[formData])
  return (
    <div>
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
                            <h2 className='text-lg mt-3' key={index}>{feature}</h2>
                        ))}
                    </div>
                    <Button className="mt-3">{pricing.button}</Button>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default PricingModel