import { useState } from "react";
import { motion } from "motion/react";

const styles = ["Cinematic", "Glitch Art", "Minimalist", "Cyberpunk"];


export default function StyleSelector({ onGenerate, isGenerating }) {
    const [selected, setSelected] = useState("Cinematic");

    return (
        <div className="glass-panel p-8 rounded-xl border border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex-grow w-full">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">
                        Synthesis Style
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {styles.map((style) => (
                            <button
                                key={style}
                                onClick={() => setSelected(style)}
                                disabled={isGenerating}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selected === style
                                        ? "bg-surface-bright text-primary border border-primary/20"
                                        : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-bright"
                                    } ${isGenerating ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                </div>
                <motion.button
                    whileHover={!isGenerating ? { scale: 1.02 } : {}}
                    whileTap={!isGenerating ? { scale: 0.98 } : {}}
                    onClick={onGenerate}
                    disabled={isGenerating}
                    className={`primary-gradient w-full md:w-auto px-12 py-5 rounded-lg text-on-primary-container font-black text-lg tracking-tight shadow-[0_0_30px_rgba(163,166,255,0.3)] hover:shadow-[0_0_50px_rgba(163,166,255,0.5)] transition-all ${isGenerating ? "opacity-50 cursor-not-allowed grayscale" : ""
                        }`}
                >
                    {isGenerating ? "Synthesizing..." : "Generate Reel"}
                </motion.button>
            </div>
        </div>
    );
}
