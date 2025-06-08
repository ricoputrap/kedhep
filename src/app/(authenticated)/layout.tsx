
import Sidebar from '@/components/sidebar';

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
