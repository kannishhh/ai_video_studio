import { motion } from "motion/react";
import { Play } from "lucide-react";

const templates = [
    { id: 1, title: "Neon Pulse", category: "Cyberpunk", duration: "0:15", thumbnail: "https://picsum.photos/seed/neon/400/600" },
    { id: 2, title: "Minimal Flow", category: "Minimalist", duration: "0:30", thumbnail: "https://picsum.photos/seed/minimal/400/600" },
    { id: 3, title: "Glitch Storm", category: "Glitch Art", duration: "0:10", thumbnail: "https://picsum.photos/seed/glitch/400/600" },
    { id: 4, title: "Cinematic Horizon", category: "Cinematic", duration: "0:45", thumbnail: "https://picsum.photos/seed/cinema/400/600" },
    { id: 5, title: "Retro Wave", category: "Vaporwave", duration: "0:20", thumbnail: "https://picsum.photos/seed/retro/400/600" },
    { id: 6, title: "Urban Beat", category: "Dynamic", duration: "0:15", thumbnail: "https://picsum.photos/seed/urban/400/600" },
];


export default function Templates({ onSelect }) {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Reel Templates</h2>
                    <p className="text-on-surface-variant">Choose a starting point for your next masterpiece.</p>
                </div>
                <div className="flex gap-2">
                    {["All", "Cinematic", "Glitch", "Minimal"].map((cat) => (
                        <button key={cat} className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-bold hover:bg-surface-bright transition-all">
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {templates.map((template) => (
                    <motion.div
                        key={template.id}
                        onClick={onSelect}
                        whileHover={{ y: -8 }}
                        className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 group cursor-pointer"
                    >
                        <div className="aspect-[9/16] relative overflow-hidden">
                            <img
                                src={template.thumbnail}
                                alt={template.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                                    <Play className="text-white fill-current w-6 h-6 translate-x-0.5" />
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono">
                                {template.duration}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-1">{template.title}</h3>
                            <p className="text-xs text-on-surface-variant uppercase tracking-widest">{template.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
