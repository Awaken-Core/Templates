import { LoginForm } from "@/components/modules/authentication/auth-form-03"
import Image from "next/image"

export default function Auth03() {
    return (
        <div className="flex items-cente justify-center min-h-svh p-4 bg-zinc-50 dark:bg-zinc-950">
            <div className="relative w-full max-w-[1100px] rounded-[32px] p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-400/40 to-pink-500/40 shadow-2xl">
                <div className="grid w-full min-h-[750px] lg:grid-cols-2 rounded-[31px] overflow-hidden bg-background">
                    
            
                    <div className="relative hidden lg:block w-full h-full bg-zinc-100">
                        <Image 
                            src="/images/auth03.jpg" 
                            alt="Authentication Background" 
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 h-full w-full bg-background relative z-10">
                        <div className="w-full max-w-[380px]">
                            <LoginForm />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
