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
          bbox.boundingBox &&
          latitude >= bbox.boundingBox.ax &&
          latitude <= bbox.boundingBox.bx &&
          longitude >= bbox.boundingBox.ay &&
          longitude <= bbox.boundingBox.by
      );
      setUserLocation(location || null);
    });
  }, []);

  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl font-bold">
          {userLocation ? (
            <>
              {userLocation.icon && userLocation.icon} Willkommen
              {userLocation.prefix ? ` ${userLocation.prefix} ` : ' in '}
              {userLocation.name}.
            </>
          ) : (
            '🚀 Gerade unterwegs?'
          )}
        </h1>

        {!userLocation && (
            <p className="font-semibold mt-2">
              Oder aktiviere die Standortbestimmung, um deine Abfahrtszeiten zu sehen.
            </p>
          )}
      </div>
    </main>
  );
}
