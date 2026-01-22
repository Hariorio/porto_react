import { Link } from "react-router-dom";
import FormLabel from "../../components/ui/FormLabel";

export default function Login() {
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
              type="email"
              placeholder="contoh@email.com"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900
                         outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition"
            />
          </div>
          
          <div className="space-y-1 text-left">
            <FormLabel htmlFor="password" required>
              Password
            </FormLabel>

            <input
              id="password"
              type="email"
              placeholder="******"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900
                         outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition"
            />
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
