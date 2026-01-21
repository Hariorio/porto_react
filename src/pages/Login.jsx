import { Link } from "react-router-dom";
import FormLabel from "../components/ui/FormLabel";

export default function Login() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-sm p-6 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Login React Apps
        </h1>

        
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
        

        <p className="mt-2 text-slate-600 leading-relaxed">
          Ini portfolio saya. Klik tombol di bawah untuk masuk.
        </p>
    
        <Link
          to="/HomePage"
          className="inline-flex mt-6 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Masuk ke Home →
        </Link>
      </div>
    </div>
  );
}
