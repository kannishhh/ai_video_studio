import { Download, Share2, Globe, Lock, CheckCircle2 } from "lucide-react";

export default function Export({ onAction, onReset }) {
    return (
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-secondary w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black tracking-tight">Reel Ready for Export</h2>
                <p className="text-on-surface-variant text-lg">Your cinematic masterpiece has been synthesized successfully.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-surface-container-lowest rounded-3xl overflow-hidden aspect-[9/16] relative border border-outline-variant/10 shadow-2xl">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfW0P7aYAV1JAf-dxbtfdaZoNddErOmcFkNdZCcGKlDhlEL3zjLeGynS3c7BJCi9N2iGZrHhtvD_jqHQgHqUXsgWC0GXbPqv4TryKnMO2MVJZN_oE5JNhcmf15CZKqTfaC8C-roEZ2blsyruSqRJzK_zSgPy-Jyoqb5HXJILoQoxLUVP8MLHPcKnYvXMT6iw669A2_LfybNToIwrgNd_GaX7NAwvQNzlpYsdWE-Qw2P7tWDIlNke_67MOUgxR3HqR0pkMaeJEm9xV-"
                        alt="Final Reel"
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="space-y-8">
                    <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 space-y-6">
                        <h3 className="text-xl font-bold">Export Settings</h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <Globe className="text-primary w-5 h-5" />
                                    <div>
                                        <p className="font-bold">Public Link</p>
                                        <p className="text-xs text-on-surface-variant">Anyone with the link can view</p>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <Lock className="text-on-surface-variant w-5 h-5" />
                                    <div>
                                        <p className="font-bold">Watermark</p>
                                        <p className="text-xs text-on-surface-variant">Remove Cinematic Flux branding</p>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-surface-bright rounded-full relative">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 space-y-4">
                            <button
                                onClick={() => onAction("Downloading high quality reel...")}
                                className="w-full primary-gradient py-5 rounded-2xl text-on-primary-container font-black text-lg shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                            >
                                <Download className="w-6 h-6" /> Download 4K (H.265)
                            </button>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => onAction("Share link copied!")}
                                    className="w-full bg-surface-bright py-5 rounded-2xl font-bold text-lg hover:bg-surface-container-highest transition-all flex items-center justify-center gap-3"
                                >
                                    <Share2 className="w-6 h-6" /> Share
                                </button>
                                <button
                                    onClick={onReset}
                                    className="w-full bg-surface-bright py-5 rounded-2xl font-bold text-lg hover:bg-surface-container-highest transition-all flex items-center justify-center gap-3"
                                >
                                    New Reel
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-surface-container-high/30 rounded-2xl border border-outline-variant/10">
                        <p className="text-xs text-on-surface-variant leading-relaxed italic text-center">
                            "This reel was generated using the Cinematic Flux Synthesis Engine V0.4 Beta.
                            Neural upscaling and motion vectors were applied to enhance visual fidelity."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
