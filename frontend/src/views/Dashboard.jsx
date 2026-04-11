import UploadZone from "../components/UploadZone";
import StyleSelector from "../components/StyleSelector";
import VideoPreview from "../components/VideoPreview";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useState } from "react";

export default function Dashboard({ onGenerate, progress, isGenerating }) {
    const [videos, setVideos] = useState([]);
    const [music, setMusic] = useState(null);
    const [jobId, setJobId] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!jobId) return;
        const interval = setInterval(async () => {
            const res = await fetch(
                `http://127.0.0.1:8000/api/v1/job-status/${jobId}`,
            );
            const data = await res.json();

            setStatus(data.status);

            if (data.status === "completed") {
                clearInterval(interval);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [jobId]);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <div className="xl:col-span-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <UploadZone
                        type="video"
                        setVideos={setVideos}
                        title="Upload Raw Clips"
                        description="Drag and drop MP4, MOV, or WEBM files"
                    />
                    <UploadZone
                        type="audio"
                        setMusic={setMusic}
                        title="Soundtrack"
                        description="Upload MP3 or link Spotify track"
                    />
                </div>

                <StyleSelector onGenerate={onGenerate} isGenerating={isGenerating} />

                <ProgressBar progress={progress} isGenerating={isGenerating} />
            </div>

            <VideoPreview jobId={jobId} />
        </div>
    );
}
