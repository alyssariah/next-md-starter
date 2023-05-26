import './styles/globals.scss';
import { ManagedUIContext, useUI } from '@context/managed-ui';
import { ModalUI } from '@components/modal/Modal';
import { SidebarUI } from '@/app/components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';

export const metadata = {
  title: 'Next.js Markdown CMS Starter Code',
  description: 'Create Template with Next pages connected to Markdown',
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
          <main className="flex flex-col items-center w-[100%] relative overscroll-none">
            <Navbar links={links} logo="/vercel.svg" />
            {children}
            {/* Footer Component */}
            <ModalUI />
            <SidebarUI />
          </main>
        </ManagedUIContext>
      </body>
    </html>
  );
}
