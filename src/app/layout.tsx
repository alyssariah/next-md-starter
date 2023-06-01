import '../styles/globals.scss';
import { ManagedUIContext } from '@contexts/managed-ui';
import { ModalUI } from '@components/modal/Modal';
import { SidebarUI } from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Metadata } from 'next';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Markdown CMS Starter Code',
    template: '%s | Markdown CMS',
  },
  description: 'Create Template with Next pages connected to Markdown',
  // metadataBase: 'https://next-md-starter.pages.dev',
  openGraph: {
    title: 'Next.js Markdown CMS Starter Code',
    description: 'Create Template with Next pages connected to Markdown',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    googleBot: {
      'index': true,
      'follow': true,
      'noimageindex': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/next.svg',
    shortcut: '/next.svg',
    apple: [{ url: '/next.svg' }, { url: '/next/svg', sizes: '180x180', type: 'image/svg' }],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/next.svg',
    },
  },
  manifest: 'https://nextjs.org/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  generator: 'Next.js',
  category: 'technology',
  keywords: 'nextjs, react, markdown CMS',
  // TODO: Verfiy site through google
  // verification: {
  //   google: 'google',
  // },
};

const links = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ManagedUIContext>
          <main className="flex flex-col items-center w-[100%] bg-white-500 text-black-500 relative overscroll-none">
            <Navbar
              links={links}
              format="Center links"
              logo={{ image: '/logo.webp', alt: 'Apps for Scratch Logo', width: 250 }}
            />
            {children}
            <Footer />
            <ModalUI />
            <SidebarUI />
          </main>
        </ManagedUIContext>
      </body>
    </html>
  );
}
