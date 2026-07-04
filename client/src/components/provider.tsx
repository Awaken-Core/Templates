"use client";

import { Toaster } from "./ui/sonner";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster position="bottom-right" />
        </ThemeProvider>
    );
};

export default Providers;