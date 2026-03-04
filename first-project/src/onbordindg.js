import React, { useState } from "react";
import{
  ChevronRight, 
  ChevronLeft, 
  Scale, 
  Ruler, 
  Target, 
  User,
  CheckCircle2,
  Zap,
  ArrowRight,
  TrendingUp,
  Activity
} from 'lucide-react';

const App = () => {
    const[step,setStep]=useState(1);
    const[formData,setFormData]=useState({
        gender: 'rather-not-say',
        age: 25,
        weight: 70,
        height: 175,
        gool: 'maintenance'
    });

const nextStep = () => setStep(s=>Math.min(s + 1, 4));
const prevStep = () => setStep(s=>Math.max(s - 1, 1));

const goals = [
    { id: 'weight-loss', label: 'lose Weight', desc: 'Build Fat & improve heart health', icon: <Activity className="text-rose-500" /> },
    { id: 'mass-gain', label: 'Gain Muscule', desc: 'Build strength & muscule mass', icon: <TrendingUp className="text-indigo-500" /> },
    { id: 'maintenance', label: 'Stay Fit', decs: 'Maintain current shape and energy', icon: <Target className="text-emerald-500" /> },
];

const renderStep = () => {
    switch(step){
        case 1:
            return(
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-indigo-100/50 shadow-sm">
                          <User size={32} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Personal Details</h2>
                        <p className="text-slate-500 text-sm mt-2">Help Us Customize Your Experience.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white border border-slate-200 p-6 rounded-[2.5rem] shadow-sm">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2rem] black mb-4">Your Age</label>
                            <div className="flex items-center justify-between">
                                <button onClick={() => setFormData({...formData, age: Math.max(1,formData.age - 1)})} className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all active:scale-90">-</button>
                                <span className="text-5xl font-black text-slate-900 tracking-tighter">{formData.age}</span>
                                <button onClick={() => setFormData({...formData, age: formData.age + 1})} className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all active:scale-90">+</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {['Male','Female'].map((g) => (
                                <button
                                  key={g}
                                  onClick={() => setFormData({...formData, gender: g.toLowerCase()})}
                                  className={`p-5 rounded-[2rem] border-2 transition-all text-sm font-bold ${formData.gender === g.toLowerCase() ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100' : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'}`}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case 2:
            return(
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-blue-100/50 shadow-sm">
                           <Scale size={32}/>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Body Vitals</h2>
                        <p className="text-slate-500 text-sm mt-2">Precision drives your results.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white border border-slate-200 p-7 rounded-[2.5rem] shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-all">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Weight (kg)</p>
                                <input
                                  type="number"
                                  value={formData.weight}
                                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                                  className="text-4xl font-black text-slate-900 bg-transparent w-28 outline-none"
                                />  
                            </div>
                            <div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-slate-300 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                                    <Scale size={28} />
                                </div>
                            </div>

                            <div className="bg-white border-slate-200 p-7 rounded-[2.5rem] shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-all">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Height (cm)</p>
                                    <input
                                      type="number"
                                      value={formData.height}
                                      onChange={(e) => setFormData({...formData, height: e.target.value})}
                                      className="text-4xl font-black text-slate-900 bg-transparent w-28 outline-none"
                                    />
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2x1 text-slate-900 group-hover:text-purple-500 group-hover:bg-purple-50 transition-colors">
                                    <Ruler size={28} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return(
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-3x1 flex items-center justify-center mx-auto mb-4 border border-purple-100/50 shadow-sm">
                          <Target size={32} />
                        </div>
                        <h2 className="text-2x1 font-black text-slate-900 tracking-tight">Fitness Goal</h2>
                        <p className="text-slate-500 text-sm mt-2">Where should you focus</p>
                    </div>
                    <div className="space-y-3">
                        {goals.map((g) => (
                <button 
                  key={g.id}
                  onClick={() => setFormData({...formData, goal: g.id})}
                  className={`w-full flex items-center gap-5 p-6 rounded-[2.5rem] border-2 transition-all ${formData.goal === g.id ? 'border-indigo-600 bg-indigo-50/50 shadow-md translate-y-[-2px]' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-3 rounded-2x1 bg-white shadow-sm border border-slate-100`}>
                    {g.icon}
                  </div>
                  <div className="text-left">
                    <p className={`font-black tracking-tight ${formData.goal === g.id ? 'text-indigo-900' : 'text-slate-700'}`}>{g.label}</p>
                    <p className="text-xs text-slate-400 font-medium">{g.desc}</p>
                  </div>
                  {formData.goal === g.id && (
                    <div className="ml-auto w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shadow-md shadow-indigo-200">
                      <CheckCircle2 className="text-white" size={14} />
                    </div>
                  )}
                </button>
              ))}
                    </div>
                </div>
            );
        case 4:
            return(
                <div className="text-center py-10 space-y-6 animate-in zoom-in duration-700">
                    <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[3rem] flex items-center justify-center mx-auto shadow-2x1 shadow-indigo-200 rotate-12 mb-8 border-[6px] border-white">
                        <Zap size={56} className="text-white fill-current" />
                    </div>
                    <h2 className="text-3x1 font-black text-slate-900 tracking-tight">Setup Complete!</h2>
                    <p className="text-slate-500 max-w-[260px] mx-auto leading-relaxed font-medium">
                      We've calculated your wellness plan based on your vitals.
                    </p>
                    <div className="bg-white p-8 rounded-[3rem] border border-slate200 shadow-sm max-w-xs mx-auto relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-3x1 -mr-12 -mt-12"></div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 relative z-10">Baseline BMI</p>
                        <p className="text-5xl font-black text-indigo-600 relative z-10 tracking-tighter">
                          {(formData.weight / Math.pow(formData.height/100, 2)).toFixed(1)}
                        </p>
                    </div>
                </div>
            );
            default:
                return null;
    }
};

return(
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans p-6 flex flex-col relative overflow-hidden">

        {/* Background Decorative Accents */}
        <div className="fixed top-[-10%] w-96 h-96 bg-indigo-400/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-5%] right-[-5%] w-72 h-72 bg-blur-400/5 rounded-full blur-[120px] pointer-events-none"></div>



        {/* Progress Indicator */}
        <div className="w-full flex justify-between gap-3 mb-10 px-2 max-w-md mx-auto">
            {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-700 ease-out ${step >= i ? 'bg-indigo-600 shadow-md shadow-indigo-100' : 'bg-slate-200'}`}
                />
            ))}
        </div>

        {/* Main Form Content */}
        <main className="flex-1 relative z-10 max-w-md mx-auto w-full">
            {renderStep()}
        </main>


        {/* Controls */}
        <footer className="mt-8 relative z-10 max-w-md mx-auto w-full flex items-center gap-4">
            {step > 1 && step < 4 && (
                <button
                  onClick={prevStep}
                  className="p-5 bg-white border border-slate-200 rounded-[2rem] text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm active:scale-90"
                >
                    <ChevronLeft size={28} />
                </button>
            )}

            <button
              onClick={nextStep}
              className={`flex-1 py-5 rounded-[2rem] font-black text-sm flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-indigo-100 ${
                step === 4 
                ? 'bg-slate-900 text-white hover:bg-black' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
            >
                {step === 4 ? 'Enter Dashboard' : step === 3 ? 'Finalize Profile' : 'Continue'}
                {step < 4 && <ArrowRight size={20} />}
            </button>
        </footer>

        {/* Helper Text */}
        {step < 4 && (
        <p className="text-center mt-6 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] select-none">
          Progress — Step {step}
        </p>
      )}
    </div>
);

};


export default App;