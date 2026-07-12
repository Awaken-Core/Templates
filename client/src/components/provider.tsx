"use client";

import { Toaster } from "./ui/sonner";

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