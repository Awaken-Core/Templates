"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";

const Button03 = () => {
    const [animationKey, setAnimationKey] = useState(0);

    return (
        <Button className="p-4 text-[14px] tracking-tight">
            <motion.span
                className="inline-flex h-6 cursor-pointer items-center overflow-hidden"
                onHoverStart={() => setAnimationKey((key) => key + 1)}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={animationKey}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        Hello
                    </motion.span>
                </AnimatePresence>
            </motion.span>
        </Button>
    );
};

export default Button03;