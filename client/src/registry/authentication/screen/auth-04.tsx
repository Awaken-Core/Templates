import Image from "next/image";

const GoogleIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.02 5.02 0 0 1-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" fill="#34A853" />
    <path d="M5.84 14.09A6.6 6.6 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" fill="#EA4335" />
  </svg>
);

const AppleIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 fill-current">
    <path d="M17.05 13.92c-.03-2.9 2.37-4.32 2.48-4.39-1.35-1.97-3.44-2.24-4.18-2.28-1.77-.18-3.45 1.05-4.36 1.05-.91 0-2.31-1.02-3.8-1-1.95.03-3.75 1.14-4.75 2.88-2.03 3.52-.52 8.7 1.45 11.55.97 1.4 2.1 2.96 3.63 2.9 1.47-.05 2.04-.94 3.82-.94 1.77 0 2.29.94 3.83.91 1.58-.03 2.56-1.42 3.52-2.82 1.1-1.6 1.56-3.15 1.58-3.23-.03-.02-2.88-1.1-2.92-4.07ZM14.65 6.2c.8-1.01 1.34-2.4 1.2-3.8-1.2.05-2.65.8-3.47 1.81-.66.8-.13 2.25.13 3.65 1.35.1 2.62-.65 3.44-1.66Z" />
  </svg>
);

export default function Auth04() {
  return (
    <main className="w-full flex rounded-[26px] items-cente justify-center min-h-svh p-3 bg-zinc-100 dark:bg-zinc-950">
      <section className="grid min-h-[470px] w-full overflow-hidden bg-white lg:grid-cols-[1fr_1.04fr] rounded-2xl " >
        <div className="flex items-center justify-center px-8 py-14 sm:px-16 lg:px-20">
          <form className="w-full max-w-[500px]">
            <header className="mb-9 text-center text-[#24252a]">
              <h1 className="text-[26px] font-semibold leading-[1.12] tracking-[-0.045em] sm:text-[31px]">Scale with Your Own</h1>
              <p className="mt-1 text-[25px] font-medium leading-none tracking-[0.08em] sm:text-[30px]">AI Workforce</p>
            </header>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#dedee1] text-xs font-medium text-[#24252a] transition-colors hover:bg-zinc-50"><GoogleIcon />Continue with Google</button>
              <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#dedee1] text-xs font-medium text-[#24252a] transition-colors hover:bg-zinc-50"><AppleIcon />Continue with Apple</button>
            </div>
            <div className="my-6 flex items-center gap-3 text-[11px] text-[#3f4045] before:h-px before:flex-1 before:bg-[#e5e5e5] after:h-px after:flex-1 after:bg-[#e5e5e5]">OR</div>
            <div className="space-y-3.5">
              <label className="block text-xs font-medium text-[#26272b]"><span className="mb-1.5 block">Email</span><input type="email" placeholder="Enter your email" className="h-11 w-full rounded-md border border-[#dedee1] bg-[#fcfcfd] px-3 text-xs outline-none placeholder:text-[#68696e] focus:border-[#b8b8bc]" /></label>
              <label className="block text-xs font-medium text-[#26272b]"><span className="mb-1.5 block">Password</span><input type="password" placeholder="Enter your password" className="h-11 w-full rounded-md border border-[#dedee1] bg-[#fcfcfd] px-3 text-xs outline-none placeholder:text-[#68696e] focus:border-[#b8b8bc]" /></label>
            </div>
            <button type="submit" className="mt-6 h-11 w-full rounded-md bg-[#ffc562] text-xs font-medium text-[#28231b] transition-colors hover:bg-[#f5b950]">Create account</button>
            <p className="mt-5 text-center text-xs text-[#303136]">Already your password? <a href="#" className="font-medium hover:underline">Log in</a></p>
          </form>
        </div>
        <div className="flex items-center justify-center p-7 sm:p-10 lg:p-12">
          <div className="relative aspect-square w-full max-w-[594px] overflow-hidden rounded-[31px] border-[11px] border-[#eeeeee] bg-[#eeeeee] sm:rounded-[42px]">
            <Image src="/images/auth04.png" alt="AI workforce" fill priority className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true"><span className="h-5 w-2 rounded-sm bg-white" /><span className="h-5 w-2 rounded-sm bg-white/65" /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
