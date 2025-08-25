import { ComponentType, SVGProps } from 'react';

declare module 'lucide-react' {
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = ComponentType<LucideProps>;
  
  // Add individual icon exports here as needed
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  // Add other icons as needed
}
