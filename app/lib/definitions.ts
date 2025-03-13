export const LOCATIONS: Location[] = [
  {
    name: 'Gröbenzell',
    icon: '🏠',
    boundingBox: {
      ax: 48.180051,
      ay: 11.344225,
      bx: 48.211661,
      by: 11.406367,
    },
  },
  {
    name: 'LMU',
    icon: '🎓',
    prefix: 'an der',
    boundingBox: {
      ax: 48.143877,
      ay: 11.567811,
      bx: 48.156681,
      by: 11.585566,
    },
  },
];

export type Location = {
  name: string;
  icon?: string;
  prefix?: string;
  nearestStationId?: number;
  boundingBox?: {
    ax: number;
    ay: number;
    bx: number;
    by: number;
  };
};

export type Departure = {
  canceledStopsAfterActualDestination: Array<any>;
  direction: string;
  id: string;
  timeSchedule: string;
  timeDelayed: string;
  delayed: boolean;
  platform: string;
  platformSchedule: string;
  timeType: string;
  canceled: boolean;
  administrationID: string;
  virtual: boolean;
  lineName: string;
  type: string;
  kind: string;
  journeyID: string;
  stopPlace: {
    evaNumber: string;
    name: string;
    canceled: boolean;
  };
  arrivalOrDepartureId: string;
  destination: {
    evaNumber: string;
    name: string;
    canceled: boolean;
    slug: string;
    nameParts: Array<{
      type: string;
      value: string;
    }>;
  };
  viaStops: Array<{
    evaNumber: string;
    name: string;
    canceled: boolean;
    additional: boolean;
    displayPriority: number;
    separation: boolean;
    slug: string;
    nameParts: Array<{
      type: string;
      value: string;
      valueSpeech?: string;
    }>;
  }>;
  additionalStops: Array<any>;
  canceledStops: Array<any>;
  messages: {
    common: Array<{
      text: string;
      locale: string;
      type: string;
      change: boolean;
      important: boolean;
      open: boolean;
      links: Array<any>;
    }>;
    delay: Array<any>;
    cancelation: Array<any>;
    destination: Array<any>;
    via: Array<any>;
  };
  providesVehicleSequence: boolean;
};
