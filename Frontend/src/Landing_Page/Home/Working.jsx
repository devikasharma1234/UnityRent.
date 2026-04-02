import React from 'react'

const steps = [
  { id: 1, title: 'Browse', desc: 'Browse items & services near you', icon: '🔍' },
  { id: 2, title: 'Chat', desc: 'Chat and confirm securely', icon: '💬' },
  { id: 3, title: 'Verify', desc: 'Digital agreement protects both sides', icon: '📄' },
  { id: 4, title: 'Review', desc: 'Rent → Return → Review', icon: '🔄' },
];


const Working = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 px-4 text-center">
      <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">How it works</h4>
      <h2 className="text-4xl font-extrabold text-slate-900 mb-4">First time here?</h2>
      <p className="text-slate-600 font-semibold mb-12">Renting is simple:</p>

      <div className="relative max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-0">
        {/* The Connecting Line (Hidden on mobile) */}
        <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-orange-300 z-0"></div>

        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center w-full md:w-1/4 px-4">
            {/* Circle with Icon */}
            <div className="relative w-20 h-20 bg-white border-2 border-orange-600 rounded-full flex items-center justify-center text-3xl shadow-sm mb-4">
              {step.icon}
              {/* Step Number Badge */}
              <span className="absolute bottom-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-slate-200">
                {step.id}
              </span>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 italic text-slate-500 font-medium">
        No paperwork. No awkward follow-ups. No confusion.
      </p>
    </section>
  );
};

export default Working;