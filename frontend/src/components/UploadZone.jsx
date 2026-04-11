import { Film, Music } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

export default function UploadZone({
    setVideos,
    setMusic,
    type,
    title,
    description,
}) {
    const isVideo = type === "video";
    const Icon = isVideo ? Film : Music;

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (e) => {
        if (isVideo) {
            setVideos(Array.from(e.target.files));
        } else {
            setMusic(e.target.files[0]);
        }
    };
    const accentColor = isVideo ? "text-primary" : "text-secondary";
    const bgColor = isVideo ? "bg-primary/10" : "bg-secondary/10";
    const hoverBorder = isVideo
        ? "hover:border-primary/50"
        : "hover:border-secondary/50";

    return (
        <>
            <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                multiple={isVideo}
                accept={isVideo ? "video/*" : "audio/*"}
                onChange={handleFileChange}
            />
            <motion.div
                onClick={handleClick}
                whileHover={{ scale: 1.01 }}
                className={`bg-surface-container p-8 rounded-lg border-2 border-dashed border-outline-variant/30 ${hoverBorder} transition-all flex flex-col items-center justify-center text-center group cursor-pointer h-80`}
            >
                <div
                    className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                    <Icon className={`${accentColor} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-on-surface-variant text-sm">{description}</p>
            </motion.div>
        </>
    );
}
