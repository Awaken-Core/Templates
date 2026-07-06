"use client";

import { Toaster } from "./ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Toaster position="bottom-right" />
        </>
    );
};

export default Providers;