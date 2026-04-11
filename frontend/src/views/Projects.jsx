import { Folder, Clock, Star, MoreVertical } from "lucide-react";

const projects = [
    { id: 1, name: "Neon City Nights", status: "In Progress", progress: 68, lastEdited: "10 mins ago" },
    { id: 2, name: "Product Promo V2", status: "Completed", progress: 100, lastEdited: "2 hours ago" },
    { id: 3, name: "Travel Vlog Intro", status: "Draft", progress: 15, lastEdited: "Yesterday" },
    { id: 4, name: "Music Video Draft", status: "In Progress", progress: 45, lastEdited: "2 days ago" },
];


export default function Projects({ onSelect }) {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Projects</h2>
                    <p className="text-on-surface-variant">Continue where you left off.</p>
                </div>
                <button
                    onClick={onSelect}
                    className="primary-gradient px-6 py-3 rounded-lg font-bold text-sm"
                >
                    New Project
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={onSelect}
                        className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center">
                                <Folder className="text-primary w-6 h-6" />
                            </div>
                            <button className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
                            <Clock className="w-3 h-3" />
                            <span>Edited {project.lastEdited}</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                <span className={project.progress === 100 ? "text-secondary" : "text-primary"}>
                                    {project.status}
                                </span>
                                <span className="text-on-surface-variant">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-1000 ${project.progress === 100 ? "bg-secondary" : "bg-primary"}`}
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
