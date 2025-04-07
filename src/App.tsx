import { DarkThemeToggle } from "flowbite-react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router";
import AuthProvider from "./hooks/AuthProvider";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <div className="absolute inset-0 size-full">
        <div className="relative h-full w-full select-none">
          <img
            className="absolute right-0 min-w-dvh dark:hidden"
            alt="Pattern Light"
            src="/pattern-light.svg"
          />
          <img
            className="absolute right-0 hidden min-w-dvh dark:block"
            alt="Pattern Dark"
            src="/pattern-dark.svg"
          />
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <DarkThemeToggle />
      </div>

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12">
        <div className="relative flex flex-col items-center gap-6">
          <h1 className="relative text-center text-4xl leading-[125%] font-bold text-gray-900 dark:text-gray-200">
            User authenticate demo
          </h1>
        </div>

        <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"></div>
          <BrowserRouter>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </BrowserRouter>
        </div>
      </div>
    </main>
  );
}
