"use client";

import { Toaster } from "./ui/sonner";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (

        <>
        
         {children}
            <Toaster richColors position="top-right" />
        </>


        // <ThemeProvider
        //     attribute="class"
        //     defaultTheme="light"
        //     enableSystem
        //     disableTransitionOnChange
        // >
           
        // </ThemeProvider>
    );
};

export default Providers;