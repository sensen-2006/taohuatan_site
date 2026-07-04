import { RouterProvider } from 'react-router';
import { router } from './routes';
import { DemoAppProvider } from './providers/DemoAppProvider';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <DemoAppProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </DemoAppProvider>
  );
}
