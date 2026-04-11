import { Search, Bell, Settings as SettingsIcon } from "lucide-react";

export default function TopNav({ currentView, onViewChange }) {
    const navLinks = [
        { label: "Dashboard", view: "dashboard" },
        { label: "Templates", view: "templates" },
        { label: "Library", view: "library" },
        { label: "AI Lab", view: "ai-lab" },
    ];

    return (
        <header className="bg-background w-full z-50 sticky top-0">
            <nav className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto font-sans tracking-tight">
                <div className="flex items-center gap-12">
                    <span className="text-2xl font-black tracking-tighter text-on-background cursor-pointer" onClick={() => onViewChange("dashboard")}>
                        Cinematic Flux
                    </span>
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.view}
                                onClick={() => onViewChange(link.view)}
                                className={`transition-colors font-bold ${currentView === link.view
                                    ? "text-primary border-b-2 border-primary pb-1"
                                    : "text-on-surface-variant hover:text-on-surface"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/10">
                        <Search className="text-on-surface-variant w-4 h-4 mr-2" />
                        <input
                            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-on-surface placeholder-on-surface-variant w-48"
                            placeholder="Search projects..."
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="text-on-surface-variant hover:text-on-surface cursor-pointer w-5 h-5" />
                        <SettingsIcon
                            className="text-on-surface-variant hover:text-on-surface cursor-pointer w-5 h-5"
                            onClick={() => onViewChange("settings")}
                        />
                        <button
                            onClick={() => onViewChange("export")}
                            className="primary-gradient text-on-primary-container px-5 py-2.5 rounded-lg font-bold text-sm active:scale-95 duration-200 cursor-pointer"
                        >
                            Create Reel
                        </button>
                        <img
                            alt="User Profile"
                            className="w-10 h-10 rounded-full border-2 border-primary/20 cursor-pointer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACYMfyzpEs0ithTcHo8PsiBC9JsUX0c7ctkgO92A1u36bh962PYGkbu10KrmBVxKmOPm8IDiPU79oyOCScEgNAGzmOl8hLc5ZqvgIHUb3Hj7MxyDBM1ekLU390h7mQFNbjzkjYHMn4lN7Q9DubWPV0OhAW-laiebXTw3xX7YGwSaXK4ToOkdjXOyIbqxTWKSmGOiJ0CpnYm1GMM1KldH14OqiTOdg2TY_EMT1tkAiI0tY_sxDD4a9SLyCNVwW7_8l8H599TNTdGUvJ"
                            referrerPolicy="no-referrer"
                            onClick={() => onViewChange("settings")}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
}
