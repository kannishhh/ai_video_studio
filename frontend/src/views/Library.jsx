import { Download, Share2, Trash2, MoreVertical } from "lucide-react";

const libraryItems = [
    { id: 1, title: "Summer Vibes 2024", date: "2 hours ago", size: "45MB", thumbnail: "https://picsum.photos/seed/summer/800/450" },
    { id: 2, title: "Product Launch Teaser", date: "Yesterday", size: "120MB", thumbnail: "https://picsum.photos/seed/product/800/450" },
    { id: 3, title: "Mountain Hike Reel", date: "3 days ago", size: "88MB", thumbnail: "https://picsum.photos/seed/mountain/800/450" },
    { id: 4, title: "City Lights Night", date: "1 week ago", size: "210MB", thumbnail: "https://picsum.photos/seed/city/800/450" },
];


export default function Library({ onAction }) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">Your Library</h2>
                <p className="text-on-surface-variant">Manage and export your generated reels.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {libraryItems.map((item) => (
                    <div key={item.id} className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 flex flex-col sm:flex-row">
                        <div className="w-full sm:w-48 aspect-video sm:aspect-square relative">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <button className="text-on-surface-variant hover:text-on-surface">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="flex gap-4 text-xs text-on-surface-variant font-mono">
                                    <span>{item.date}</span>
                                    <span>{item.size}</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() => onAction("Downloading reel...")}
                                    className="flex-grow flex items-center justify-center gap-2 bg-surface-bright py-2 rounded-lg text-xs font-bold hover:bg-surface-container-highest transition-all"
                                >
                                    <Download className="w-4 h-4" /> Download
                                </button>
                                <button
                                    onClick={() => onAction("Share link copied!")}
                                    className="px-3 py-2 rounded-lg bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all"
                                >
                                    <Share2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => onAction("Reel deleted.")}
                                    className="px-3 py-2 rounded-lg bg-surface-container-highest text-error/60 hover:text-error hover:bg-error/10 transition-all"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
