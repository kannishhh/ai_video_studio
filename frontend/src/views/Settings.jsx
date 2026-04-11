import { User, Shield, Bell, HardDrive, Globe } from "lucide-react";

export default function Settings({ onAction }) {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">Settings</h2>
                <p className="text-on-surface-variant">Manage your account and app preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1 space-y-2">
                    {[
                        { icon: User, label: "Profile" },
                        { icon: Shield, label: "Security" },
                        { icon: Bell, label: "Notifications" },
                        { icon: HardDrive, label: "Storage" },
                        { icon: Globe, label: "Language" },
                    ].map((item, i) => (
                        <button
                            key={item.label}
                            onClick={() => onAction(`${item.label} settings loaded`)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-all ${i === 0 ? "bg-surface-bright text-primary" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="md:col-span-3 space-y-8">
                    <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 space-y-6">
                        <h3 className="text-xl font-bold">Profile Information</h3>
                        <div className="flex items-center gap-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACYMfyzpEs0ithTcHo8PsiBC9JsUX0c7ctkgO92A1u36bh962PYGkbu10KrmBVxKmOPm8IDiPU79oyOCScEgNAGzmOl8hLc5ZqvgIHUb3Hj7MxyDBM1ekLU390h7mQFNbjzkjYHMn4lN7Q9DubWPV0OhAW-laiebXTw3xX7YGwSaXK4ToOkdjXOyIbqxTWKSmGOiJ0CpnYm1GMM1KldH14OqiTOdg2TY_EMT1tkAiI0tY_sxDD4a9SLyCNVwW7_8l8H599TNTdGUvJ"
                                alt="Avatar"
                                className="w-20 h-20 rounded-full border-4 border-primary/20"
                                referrerPolicy="no-referrer"
                            />
                            <button
                                onClick={() => onAction("Avatar upload triggered")}
                                className="px-4 py-2 rounded-lg bg-surface-bright text-xs font-bold text-primary hover:bg-surface-container-highest transition-all"
                            >
                                Change Avatar
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Display Name</label>
                                <input type="text" defaultValue="Neon Artist" className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                                <input type="email" defaultValue="artist@cinematicflux.ai" className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary outline-none" />
                            </div>
                        </div>
                        <button
                            onClick={() => onAction("Profile updated!")}
                            className="primary-gradient px-6 py-2 rounded-lg text-xs font-bold"
                        >
                            Save Changes
                        </button>
                    </div>

                    <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 space-y-6">
                        <h3 className="text-xl font-bold">Preferences</h3>
                        <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-xl">
                            <div>
                                <p className="font-bold">Hardware Acceleration</p>
                                <p className="text-xs text-on-surface-variant">Use GPU for faster reel synthesis</p>
                            </div>
                            <div className="w-12 h-6 bg-primary rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-xl">
                            <div>
                                <p className="font-bold">Auto-Save Projects</p>
                                <p className="text-xs text-on-surface-variant">Automatically save changes every 5 minutes</p>
                            </div>
                            <div className="w-12 h-6 bg-surface-bright rounded-full relative">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
