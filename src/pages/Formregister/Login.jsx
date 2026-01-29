import { Link } from "react-router-dom";
import FormLabel from "../../components/ui/FormLabel";
import { useState } from "react";

export default function Login() {
const [show, setShow] = useState(false);
function hanleClick() {
 setShow(!show);
}

  return (
    <div className="min-h-screen grid place-items-center bg-linear-to-r/srgb from-indigo-500 to-teal-400 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white border-2 border-sky-500 shadow-lg p-6 text-center">
        <h1 className="text-2xl font-semibold text-fuchsia-900">
          Hi, Welcome Back
        </h1>
        <h6 className="text-base mt-8 text-slate-600">
          Enter your credentials to continue
        </h6>

        <h5 className="text-[12px] mt-0 font-semibold text-slate-900">
        Sign in with email & password
        </h5>

        
            {/* <FormLabel/> */}
        <form className="mt-6 space-y-4">
      
          <div className="space-y-1 text-left">
            <FormLabel htmlFor="email" required>
              Email
            </FormLabel>

            <input
              id="email"
                autoComplete="email"
              type="email"
              placeholder="contoh@email.com"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900
                         outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition"
            />
          </div>
          
          <div className="space-y-1 text-left">
                <label htmlFor="password" className="block text-sm font-medium text-slate-900">
                  Password <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={show ? "text" : "password"}
                    placeholder="••••••"
                    autoComplete="current-password"
                    className="w-full hover:bg-slate-100 rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  />

                  <button
                    type="button"
                    onClick={hanleClick}
                    className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
                    aria-label="Toggle password visibility"
                    >
                  
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
          </div>
        </form>
        <label className="mt-2 flex items-start gap-2 text-[13px] leading-relaxed">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-black hover:accent-pink-500"
          />
          <span className="flex-1 text-center">
            Dengan masuk, saya menyetujui Pernyataan Privasi dan Ketentuan Layanan. Perusahaan
          </span>
        </label>
      <Link
          to="/Dashboard"
          className="mt-6 block w-[400px] mx-auto py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition text-center"
        >
          Login
        </Link>

        <div className="w-[400px] mx-auto h-px bg-slate-300/50 my-6"></div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/Register"
            className="font-semibold text-slate-900 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
