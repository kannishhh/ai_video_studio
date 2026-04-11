import { Rocket, Zap, Sparkles, Wand2, Cpu, Brain } from "lucide-react";

const features = [
    { icon: Rocket, title: "Instant Synthesis", desc: "Generate a full reel in under 60 seconds using our distributed GPU cloud." },
    { icon: Zap, title: "Motion Tracking", desc: "AI-driven object and motion tracking for dynamic text and overlay placement." },
    { icon: Sparkles, title: "Style Transfer", desc: "Apply the visual style of any reference image or video to your footage." },
    { icon: Wand2, title: "Auto-Editing", desc: "Intelligent scene detection and beat-matching for perfect rhythmic cuts." },
    { icon: Cpu, title: "Super Resolution", desc: "Upscale low-quality clips to crisp 4K using advanced neural networks." },
    { icon: Brain, title: "Semantic Analysis", desc: "Auto-generate captions and tags based on the visual content of your clips." },
];

export default function AIFeatures({ onLaunch }) {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">The Power of Flux Engine</h2>
                <p className="text-on-surface-variant text-xl">
                    Our deep-learning synthesis engine is designed to push the boundaries of cinematic content creation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 hover:bg-surface-bright/20 transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                            <feature.icon className="text-primary w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-on-surface-variant leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="glass-panel p-12 rounded-[3rem] border border-outline-variant/10 text-center space-y-8">
                <h3 className="text-3xl font-bold">Ready to start creating?</h3>
                <button
                    onClick={onLaunch}
                    className="primary-gradient px-12 py-5 rounded-2xl text-on-primary-container font-black text-xl tracking-tight shadow-2xl hover:scale-105 transition-all"
                >
                    Launch Generator
                </button>
            </div>
        </div>
    );
}
