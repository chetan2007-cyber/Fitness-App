import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Chrome, 
  Zap, 
  UserPlus, 
  LogIn,
  Eye,
  EyeOff
} from 'lucide-react';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const toggleMode = () => setIsLogin(!isLogin);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-md z-10 transition-all duration-300">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/40 mb-4 transform rotate-12">
            <Zap size={40} className="text-white fill-current" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            FITNESS<span className="text-indigo-500">PRO</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium italic">Transform your vitals into victories.</p>
        </div>

        {/* Auth Card */}
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-slate-400 text-sm mt-1">
              {isLogin ? 'Enter your details to track your progress.' : 'Join the elite community today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <UserPlus size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-slate-800 transition-all placeholder:text-slate-600"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-slate-800 transition-all placeholder:text-slate-600"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-slate-800 transition-all placeholder:text-slate-600"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
            >
              {isLogin ? 'Sign In' : 'Get Started'}
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-white/5"></div>
            <span className="px-4 text-xs text-slate-500 font-bold uppercase tracking-widest">Or continue with</span>
            <div className="flex-1 h-[1px] bg-white/5"></div>
          </div>

          {/* Social Logins */}
          <button className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-2xl font-semibold transition-all group">
            <div className="bg-white rounded-full p-1 group-hover:scale-110 transition-transform">
              <Chrome size={16} className="text-slate-900" />
            </div>
            Google
          </button>
        </div>

        {/* Footer Toggle */}
        <p className="text-center mt-8 text-slate-400 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={toggleMode}
            className="text-indigo-400 font-bold hover:underline underline-offset-4 ml-1"
          >
            {isLogin ? 'Create Account' : 'Sign In Now'}
          </button>
        </p>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none opacity-[0.02] pointer-events-none">
        <h1 className="text-[15rem] font-black">FIT</h1>
      </div>
    </div>
  );
};

export default App;