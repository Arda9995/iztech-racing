import { ComponentType, SVGProps } from 'react';
import { Icon } from 'lucide-react';

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Global type for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    VITE_APP_NAME: string;
    VITE_APP_URL: string;
  }
}

// Type for contact information
type ContactInfo = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  details: string;
  description: string;
};

// Type for team member
type TeamMember = {
  name: string;
  role: string;
  department: string;
  image: string;
  social: {
    linkedin?: string;
    email?: string;
    github?: string;
    twitter?: string;
  };
};

// Type for sponsor
type Sponsor = {
  name: string;
  logo: string;
  url: string;
  tier?: 'gold' | 'silver' | 'bronze' | 'supporter';
};

// Type for vehicle specification
type VehicleSpec = {
  power: string;
  weight: string;
  topSpeed: string;
  acceleration: string;
};

// Type for vehicle feature
type VehicleFeature = string;

// Type for vehicle
type Vehicle = {
  name: string;
  category: string;
  year: string;
  image: string;
  specs: VehicleSpec;
  features: VehicleFeature[];
};

// Type for translation function
type TranslationFunction = (key: string, options?: object) => string;
