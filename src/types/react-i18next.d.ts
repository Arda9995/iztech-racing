import 'i18next';
import { UseTranslationResponse } from 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        contact: {
          title: string;
          titleHighlight: string;
          subtitle: string;
          info: {
            emailTitle: string;
            emailDescription: string;
            visitTitle: string;
            address: string;
            visitDescription: string;
          };
        };
        // Add other translation keys as needed
      };
    };
  }

  // Extend the useTranslation hook return type if needed
  export function useTranslation(
    ns?: string | string[],
    options?: { keyPrefix?: string }
  ): UseTranslationResponse<string, string>;
}
