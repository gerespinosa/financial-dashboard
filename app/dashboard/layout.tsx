import React from 'react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside>
        <Sidebar />
      </aside>
        <main className='bg-background w-full text-black p-4'>
            {children}
        </main>
    </div>
  );
}
