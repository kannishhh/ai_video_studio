import { Beaker, Brain, Cpu, Wand2 } from "lucide-react";

const experiments = [
    { icon: Brain, title: "Emotional Sync", desc: "Sync cuts to the emotional peaks of the soundtrack.", status: "Beta" },
    { icon: Cpu, title: "Neural Upscaling", desc: "Enhance low-res footage to 4K using AI.", status: "Alpha" },
    { icon: Wand2, title: "Auto-Color Grade", desc: "AI-driven color matching based on cinematic references.", status: "Beta" },
];


export default function AILab({ onAction }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl ai-pulse flex items-center justify-center">
                    <Beaker className="text-on-primary w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">AI Lab</h2>
                    <p className="text-on-surface-variant">Experimental features from our synthesis engine.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experiments.map((exp) => (
                    <div key={exp.title} className="glass-panel p-8 rounded-2xl border border-outline-variant/10 flex flex-col gap-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <exp.icon className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-xl">{exp.title}</h3>
                                <span className="px-2 py-0.5 rounded bg-surface-bright text-[10px] font-bold text-primary uppercase">
                                    {exp.status}
                                </span>
                            </div>
                            <p className="text-on-surface-variant text-sm leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                        <button
                            onClick={() => onAction(`${exp.title} experiment enabled!`)}
                            className="mt-auto w-full py-3 rounded-lg border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-all"
                        >
                            Enable Experiment
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10">
                <h3 className="text-xl font-bold mb-4">Research Sandbox</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Temporal Consistency</label>
                            <input type="range" className="w-full accent-primary" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Style Intensity</label>
                            <input type="range" className="w-full accent-secondary" />
                        </div>
                    </div>
                    <div className="aspect-video bg-black rounded-xl flex items-center justify-center border border-outline-variant/20">
                        <p className="text-on-surface-variant text-sm font-mono italic">Preview Sandbox Active...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
