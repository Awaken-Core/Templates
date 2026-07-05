import { LoginForm } from "@/components/modules/authentication/auth-form-02"
import LineWaves from "@/components/modules/dashboard/line-waves"

export default function Auth02() {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden rounded-[20px] border p-6 md:p-10 bg-[#240000]">
            <div className="absolute inset-0">
                <LineWaves
                    speed={0.3}
                    innerLineCount={32}
                    outerLineCount={36}
                    warpIntensity={1}
                    rotation={-45}
                    edgeFadeWidth={0}
                    colorCycleSpeed={1}
                    brightness={0.2}
                    color1="#ff0000"
                    color2="#ff7e7e"
                    color3="#ffffff"
                    enableMouseInteraction
                    mouseInfluence={2}
                />
            </div>
            <div className="relative z-10 w-full max-w-sm md:max-w-3xl">
                <LoginForm />
            </div>
        </div>
    )
}
