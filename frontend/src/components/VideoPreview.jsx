import { Play, Volume2, Maximize, Download, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function VideoPreview({ jobId }) {
    return (
        <div className="xl:col-span-4 flex flex-col gap-8">
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden h-[600px] relative group border border-outline-variant/10 shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfW0P7aYAV1JAf-dxbtfdaZoNddErOmcFkNdZCcGKlDhlEL3zjLeGynS3c7BJCi9N2iGZrHhtvD_jqHQgHqUXsgWC0GXbPqv4TryKnMO2MVJZN_oE5JNhcmf15CZKqTfaC8C-roEZ2blsyruSqRJzK_zSgPy-Jyoqb5HXJILoQoxLUVP8MLHPcKnYvXMT6iw669A2_LfybNToIwrgNd_GaX7NAwvQNzlpYsdWE-Qw2P7tWDIlNke_67MOUgxR3HqR0pkMaeJEm9xV-"
                        alt="Video Preview"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 rounded-full glass-panel flex items-center justify-center cursor-pointer border border-white/20"
                    >
                        <Play className="text-white w-10 h-10 fill-current translate-x-1" />
                    </motion.div>
                </div>

                <div className="absolute bottom-16 left-0 right-0 px-6 z-20">
                    <div className="w-full h-1 bg-surface-bright rounded-full relative">
                        <motion.div
                            animate={{ left: "30%" }}
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-tertiary rounded-full shadow-[0_0_10px_#ffa5d9]"
                        />
                        <motion.div
                            animate={{ width: "30%" }}
                            className="h-full bg-primary rounded-full"
                        />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel flex items-center justify-between z-20">
                    <div className="flex gap-4">
                        <Volume2 className="text-on-surface-variant hover:text-on-surface cursor-pointer w-5 h-5" />
                        <Maximize className="text-on-surface-variant hover:text-on-surface cursor-pointer w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono">00:12 / 00:30</span>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <a
                    href={`http://127.0.0.1:8000/api/v1/job-status/${jobId}`}
                    className="w-full flex items-center justify-center gap-3 bg-surface-container-high py-4 rounded-lg font-bold border border-outline-variant/20 hover:bg-surface-bright transition-all"
                >
                    <Download className="w-5 h-5" />
                    Download HD
                </a>
                <button className="w-full flex items-center justify-center gap-3 bg-transparent border border-primary/40 py-4 rounded-lg font-bold text-primary hover:bg-primary/5 transition-all">
                    <RefreshCw className="w-5 h-5" />
                    Generate Again
                </button>
            </div>

            <div className="p-6 bg-surface-container-high/50 rounded-lg">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                    Export Properties
                </h4>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                        <span className="text-on-surface-variant">Resolution</span>
                        <span className="text-on-surface font-mono">
                            1080 x 1920 (9:16)
                        </span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-on-surface-variant">Framerate</span>
                        <span className="text-on-surface font-mono">60 fps</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-on-surface-variant">Codec</span>
                        <span className="text-on-surface font-mono">
                            H.265 High Profile
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
