import { motion } from "motion/react";

export default function ProgressBar({ progress, isGenerating }) {
    return (
        <div className="bg-surface-container-low p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={
                            isGenerating ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }
                        }
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className={`w-4 h-4 rounded-full ${isGenerating ? "ai-pulse" : "bg-on-surface-variant/20"
                            }`}
                    />
                    <span className="text-sm font-bold">
                        {isGenerating ? "Processing Engine..." : "Engine Idle"}
                    </span>
                </div>
                <span className="text-xs text-on-surface-variant font-mono">
                    {Math.round(progress)}%
                </span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-linear-to-r from-primary to-secondary relative overflow-hidden"
                >
                    {isGenerating && (
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                    )}
                </motion.div>
            </div>
            <div className="mt-4 flex gap-4">
                <p className="text-[10px] text-on-surface-variant font-mono uppercase">
                    {isGenerating
                        ? "Status: Analyzing motion vectors..."
                        : "Status: Ready for synthesis"}
                </p>
            </div>
        </div>
    );
}
