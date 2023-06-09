import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
export const chillPixel = localFont({
  src: 'ChillPixels.otf',
  display: 'swap',
  // weight: '200',
});

export const publicPixel = localFont({
  src: 'PublicPixel.ttf',
  display: 'swap',
});