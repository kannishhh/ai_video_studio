import { Image as ImageIcon, Music, Video, FileText, Search, Filter } from "lucide-react";

const assets = [
    { id: 1, name: "city_timelapse.mp4", type: "video", size: "12.4MB", date: "Oct 12, 2023" },
    { id: 2, name: "lofi_beat_01.mp3", type: "audio", size: "3.1MB", date: "Oct 11, 2023" },
    { id: 3, name: "neon_overlay.png", type: "image", size: "850KB", date: "Oct 10, 2023" },
    { id: 4, name: "script_v1.txt", type: "doc", size: "12KB", date: "Oct 09, 2023" },
];


export default function Assets({ onAction }) {
    const getIcon = (type) => {
        switch (type) {
            case "video": return <Video className="w-5 h-5 text-primary" />;
            case "audio": return <Music className="w-5 h-5 text-secondary" />;
            case "image": return <ImageIcon className="w-5 h-5 text-tertiary" />;
            default: return <FileText className="w-5 h-5 text-on-surface-variant" />;
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Assets</h2>
                    <p className="text-on-surface-variant">Your uploaded media and project files.</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/10">
                        <Search className="text-on-surface-variant w-4 h-4 mr-2" />
                        <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder-on-surface-variant w-48" placeholder="Search assets..." type="text" />
                    </div>
                    <button
                        onClick={() => onAction("Filters applied")}
                        className="bg-surface-container-high p-2 rounded-lg border border-outline-variant/10 hover:bg-surface-bright transition-all"
                    >
                        <Filter className="w-5 h-5 text-on-surface-variant" />
                    </button>
                </div>
            </div>

            <div className="bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-bottom border-outline-variant/10">
                            <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Name</th>
                            <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Type</th>
                            <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Size</th>
                            <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset) => (
                            <tr
                                key={asset.id}
                                onClick={() => onAction(`${asset.name} selected`)}
                                className="border-t border-outline-variant/10 hover:bg-surface-bright/30 transition-all cursor-pointer group"
                            >
                                <td className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                                            {getIcon(asset.type)}
                                        </div>
                                        <span className="font-medium">{asset.name}</span>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className="text-xs text-on-surface-variant uppercase font-mono">{asset.type}</span>
                                </td>
                                <td className="p-6">
                                    <span className="text-xs text-on-surface-variant font-mono">{asset.size}</span>
                                </td>
                                <td className="p-6">
                                    <span className="text-xs text-on-surface-variant font-mono">{asset.date}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
