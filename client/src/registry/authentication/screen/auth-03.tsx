import { LoginForm } from "@/components/modules/authentication/auth-form-03"
import Image from "next/image"

export default function Auth03() {
    return (
        <div className="flex rounded-[26px] items-cente justify-center min-h-svh p-3 bg-zinc-50 dark:bg-zinc-950">
            <div className="flex w-full min-h-[750px] rounded-[20px] overflow-hidden bg-background">


                <div className="relative w-full bg-zinc-100">
                    <Image
                        src="/images/auth03.png"
                        alt="Authentication Background"
                        width={20}
                        height={20}
                        unoptimized
                        className="object-cover w-full h-full"
                    />

                    <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 bg-background absolute top-2 right-2 bottom-2 z-10 w-1/2 rounded-[20px]">
                        <div className="w-full max-w-[380px]">
                            <LoginForm />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}3