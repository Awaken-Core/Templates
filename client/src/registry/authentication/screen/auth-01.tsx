import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/modules/authentication/auth-form-01"
import AppLogo from "@/components/modules/dashboard/app-logo";
import GradientBlinds from "@/components/modules/dashboard/gradient-blind";

export default function Auth01() {
    return (
        <div className="grid min-h-svh overflow-hidden rounded-[20px] border lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <div className="flex items-center gap-1.5 font-medium">
                        <AppLogo color="#00DC9E" height={32} weight={32} />
                        <span className="font-sans font-medium tracking-[-0.6px] text-[18px]">Awaken Studios</span>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block rounded-[20px]">


                <div className="relative h-full min-h-svh w-full rounded-[20px] bg-[#1c1c1c]">

                    <div className="absolute bottom-0 top-0 left-0 right-0 text-white">
                        <GradientBlinds
                            gradientColors={['#00DC9E', '#0091b6']}
                            angle={20}
                            noise={0.5}
                            blindCount={16}
                            blindMinWidth={60}
                            spotlightRadius={0.5}
                            spotlightSoftness={1}
                            spotlightOpacity={1}
                            mouseDampening={0.15}
                            distortAmount={0}
                            shineDirection="left"
                            mixBlendMode="lighten"
                        />

                    </div>

                    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-4 py-8 sm:px-6 sm:py-10">
                        <div className="flex flex-1 flex-col items-center justify-end text-center text-white mb-16">
                            <div className="flex h-16 w-16 items-center justify-center rounded-[18px] border border-white/15 bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                                <AppLogo color="#c7fff0" height={48} weight={48} />
                            </div>
                            <div className="mt-8 max-w-[470px] space-y-4">
                                <div className="space-y-1 font-sans text-[26px] font-medium leading-[1.1] tracking-[-1.2px] text-white/90 xl:text-[30px]">
                                    <p>High Convertible Designs</p>
                                    <p>With High Agency Team</p>
                                </div>
                                <div className="mx-auto max-w-[420px] text-[14px] leading-6 tracking-[-0.2px] text-white/60">
                                    <p>Awaken empowers business with cool branding</p>
                                    <p>We help founders figureout their MVP's</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {Array.from({ length: 4 }).map((_, key) => (
                                <div
                                    key={key}
                                    className={`h-1.5 rounded-full ${key < 2 ? "bg-white" : "bg-white/25"} ${key === 0 ? "w-[22%]" : "flex-1"}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
