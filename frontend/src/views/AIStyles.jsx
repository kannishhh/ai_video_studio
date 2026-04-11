import { Sparkles, Zap, Palette, Layers } from "lucide-react";

const styles = [
    { name: "Cinematic", desc: "High contrast, deep shadows, and anamorphic flares.", preview: "https://picsum.photos/seed/cinema_style/400/300" },
    { name: "Glitch Art", desc: "Digital artifacts, chromatic aberration, and scanlines.", preview: "https://picsum.photos/seed/glitch_style/400/300" },
    { name: "Cyberpunk", desc: "Neon highlights, rainy textures, and high saturation.", preview: "https://picsum.photos/seed/cyber_style/400/300" },
    { name: "Minimalist", desc: "Clean lines, muted colors, and smooth transitions.", preview: "https://picsum.photos/seed/minimal_style/400/300" },
    { name: "Vaporwave", desc: "Pastel gradients, retro-futurism, and 80s aesthetics.", preview: "https://picsum.photos/seed/vapor_style/400/300" },
    { name: "Noir", desc: "Classic black and white with high-key lighting.", preview: "https://picsum.photos/seed/noir_style/400/300" },
];

export default function AIStyles({ onSelect }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl ai-pulse flex items-center justify-center">
                    <Sparkles className="text-on-primary w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">AI Styles</h2>
                    <p className="text-on-surface-variant">Fine-tune the visual identity of your reels.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {styles.map((style) => (
                    <div key={style.name} className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 group">
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src={style.preview}
                                alt={style.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-xl font-bold">{style.name}</h3>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {style.desc}
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={onSelect}
                                    className="flex-grow py-2 rounded-lg bg-surface-bright text-xs font-bold text-primary hover:bg-surface-container-highest transition-all"
                                >
                                    Apply Style
                                </button>
                                <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all">
                                    <Palette className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
