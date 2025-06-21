import { Suspense } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface MenuItem {
  href: string;
  isSignUp?: boolean;
  children?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { href: '#', children: 'Welcome!' },
  { href: '#', children: 'Features' },
  { href: '#', children: 'Pricing' },
  { href: '#', children: 'Get started', isSignUp: true },
];

function MenuLink({ item }: { item: MenuItem }) {
  if (item.isSignUp) {
    return (
      <Button asChild className="text-lg">
        <Link href={item.href}>{item.children}</Link>
      </Button>
    );
  }
  return (
    <Button
      asChild
      variant="noShadow"
      className="hidden border-none bg-transparent text-lg md:inline-flex"
    >
      <Link href={item.href}>{item.children}</Link>
    </Button>
  );
}

function WelcomeMenu() {
  return (
    <nav className="flex items-center space-x-4">
      {menuItems.map((item, i) => (
        <MenuLink key={i} item={item} />
      ))}
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-xl font-semibold">KYMA</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="border-b-4 bg-secondary-background">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        <Logo />
        <Suspense fallback={<div />}>
          <WelcomeMenu />
        </Suspense>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
