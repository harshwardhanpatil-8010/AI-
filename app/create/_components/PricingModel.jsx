// PricingModel.jsx
import React, { useEffect, useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useAuth, getSignInUrl } from '@workos-inc/authkit-nextjs';

function PricingModel() {
  const { user, isAuthenticated } = useAuth(); // Get user and authentication status
  const [signInUrl, setSignInUrl] = useState('');

  useEffect(() => {
    const fetchSignInUrl = async () => {
      const url = await getSignInUrl();
      setSignInUrl(url); // Set sign-in URL for redirect
    };

    fetchSignInUrl();
  }, []);

  return (
    <div>
      <HeadingDescription title={Lookup.LogoPricingModelTitle} description={Lookup.LogoPricingModelDesc} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {Lookup.pricingOption.map((pricing, index) => (
          <div key={index} className="flex flex-col items-center p-5 border rounded-xl">
            <Image src={pricing.icon} alt={pricing.title} width={60} height={60} />
            <h2 className="font-medium text-2xl">{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, index) => (
                <h2 className="text-lg mt-3" key={index}>
                  {feature}
                </h2>
              ))}
            </div>
            {isAuthenticated ? (
              <Button className="mt-3">{pricing.button}</Button>
            ) : (
              <Button asChild>
                <a href={`${signInUrl}?forcedRedirectUrl=/generate-logo?type=${pricing.title}`}>
                  {pricing.button}
                </a>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;
