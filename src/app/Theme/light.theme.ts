import { Theme } from './symbols';

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    '--primary-color': '#0ea5e9',
    '--overlay-color': '#bae6fd',
    '--sub-overlay-color': '#bae6fd',
    '--on-bg': '#fff',
    '--hover-text': '#0ea5e9',

    //  text
    '--text-primary': '#082f49',
    '--text-hover': '#0ea5e9',
    '--text-secondary': '#666',
    '--text-disabled': '#898989',
    '--title-primary': '#0ea5e9',

    // btn
    '--btn-primary': '#0ea5e9',
    '--btn-action-hover': '#bae6fd',
    // bg
    '--bg-primary': '#fff',
    '--bg-secondary': '#f7f9fa',
    // divider
    '--divider-primary': '#e0e0e0',
    // card
    '--card-color': '#fff',
    // box
    '--box-color': '#fff',
  },
};
