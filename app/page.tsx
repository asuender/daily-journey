'use client';

import { useEffect, useState } from 'react';
import { LOCATIONS, Location } from '@/app/lib/definitions';

// import Departure from '@/app/components/Departure';
// import { getDepartures } from '@/app/lib/data';

export default function Home() {
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const location = LOCATIONS.find(
        (bbox) =>
          latitude >= bbox.ax &&
          latitude <= bbox.bx &&
          longitude >= bbox.ay &&
          longitude <= bbox.by
      );
      setUserLocation(location || null);
    });
  }, []);

  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        {userLocation && (
          <h1 className="text-5xl font-bold">
            {userLocation.icon && userLocation.icon} Willkommen
            {userLocation.prefix ? ` ${userLocation.prefix} ` : ' in '}
            {userLocation.name}.
          </h1>
        )}
      </div>
    </main>
  );
}
