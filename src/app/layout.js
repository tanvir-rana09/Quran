import { Amiri, Lateef, Sen, Bebas_Neue, Solitreo,Cinzel } from "next/font/google";
import "./globals.css";
import { StoreProviders } from "./providers";

// Fonts From Google Fonts
const sen = Sen({
  subsets: ["latin"],
  variable: '--font-sen',
  weight: '400',
  display: 'swap'
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: '400',
  display: 'swap'
});
const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  variable: '--font-bebas-neue',
  weight: '400',
});

const solitreo = Solitreo({
  subsets: ['latin'],
  variable: '--font-solitreo',
  weight: '400',
});

const amiri = Amiri({
  subsets: ['arabic'],
  display: 'swap',
  weight: '400',
  variable: '--font-amiri'
})

const lateef = Lateef({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-lateef',
  weight: '400',
})

export const metadata = {
  title: {
    template: 'Quran | %s',
    default: 'Quran',
  },
  description: "The Holy Quran",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${solitreo.variable} ${bebas_neue.variable} ${sen.variable} ${amiri.variable} ${lateef.variable} ${cinzel.variable}`}>
      <body className="font-sen">
        <StoreProviders>{children}</StoreProviders>
      </body>
    </html>
  );
}
