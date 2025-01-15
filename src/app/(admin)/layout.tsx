import React from 'react';
import Header from '../components/Header';
export interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  console.log('rendering layout...');
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
