"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const Button02 = () => {
    return (
        <motion.button
            initial="rest"
            whileHover="hover"
            variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#29194d]"
        >
            <motion.div
                variants={{
                    rest: {
                        scale: 0,
                        x: "-100%",
                    },
                    hover: {
                        scale: 1.2,
                        x: 0,
                    },
                }}
                transition={{
                    duration: 0.3,
                    bounce: 2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 rounded-full bg-[#29194d]"
            />

            <motion.div
                variants={{
                    rest: { color: "#3d2b67" },
                    hover: { color: "#fff" },
                }}
                transition={{ duration: 0.25 }}
                className="relative z-10"
            >
                <ArrowLeft size={22} />
            </motion.div>
        </motion.button>

    )
};

export default Button02;