import { Inter, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '500', '400', '300', '200'],
  variable: '--montserrat-font',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '400', '300'],
  variable: '--inter-font',
});
