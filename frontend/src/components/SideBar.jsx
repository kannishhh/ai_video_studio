import { motion } from "motion/react";
import {
    LayoutGrid,
    Video,
    CloudUpload,
    Sparkles,
    Settings,
    Zap
} from "lucide-react";

export default function Sidebar({ currentView, onViewChange }) {
    const menuItems = [
        { icon: LayoutGrid, label: "Home", view: "dashboard" },
        { icon: Video, label: "Projects", view: "projects" },
        { icon: CloudUpload, label: "Assets", view: "assets" },
        { icon: Sparkles, label: "AI Styles", view: "ai-styles" },
        { icon: Settings, label: "Settings", view: "settings" },
    ];

    return (
        <aside className="fixed left-0 top-0 hidden lg:flex flex-col h-full py-8 px-4 z-40 bg-surface-container-high w-64 rounded-r-lg shadow-2xl mt-20">
            <div className="flex flex-col gap-2 mb-12 px-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg ai-pulse flex items-center justify-center">
                        <Zap className="w-4 h-4 text-on-primary fill-current" />
                    </div>
                    <div>
                        <p className="text-[10px] font-sans uppercase tracking-widest text-on-surface-variant">Neon Observatory</p>
                        <p className="text-[9px] font-medium text-primary/60">V0.4 Beta</p>
                    </div>
                </div>
            </div>

            <nav className="flex flex-col gap-2 flex-grow">
                {menuItems.map((item) => (
                    <motion.button
                        key={item.label}
                        onClick={() => onViewChange(item.view)}
                        whileHover={{ x: 4 }}
                        className={`flex items-center gap-4 p-3 rounded-lg transition-all group w-full text-left ${currentView === item.view
                            ? "bg-surface-bright text-primary shadow-[0_0_15px_rgba(163,166,255,0.1)]"
                            : "text-on-surface-variant hover:text-on-surface"
                            }`}
                    >
                        <item.icon className={`w-5 h-5 ${currentView === item.view ? "fill-current" : ""}`} />
                        <span className="text-[10px] font-sans uppercase tracking-widest font-bold">
                            {item.label}
                        </span>
                    </motion.button>
                ))}
            </nav>

            <div className="mt-auto px-4 pb-12">
                <div className="bg-surface-bright/40 rounded-xl p-4 border border-outline-variant/10">
                    <p className="text-xs text-on-surface-variant mb-3">Storage: 85% used</p>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mb-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            className="bg-secondary h-full"
                        />
                    </div>
                    <button className="w-full py-2 rounded-lg bg-surface-container-highest text-primary text-[10px] uppercase font-bold tracking-widest hover:bg-surface-bright transition-all">
                        Upgrade Pro
                    </button>
                </div>
            </div>
        </aside>
    );
}
