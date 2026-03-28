from fastapi import APIRouter, UploadFile, File
from typing import List, Annotated
from app.utils.file_utils import save_file
from app.pipeline.pipeline_manager import run_pipeline

router = APIRouter()


@router.post("/generate-reel")
async def generate_reel(
    videos: Annotated[List[UploadFile], File(description="Upload multiple videos")],
    music: Annotated[UploadFile, File(description="Upload music file")],
):
    video_paths = [save_file(v, "videos") for v in videos]
    music_path = save_file(music, "music")

    output = run_pipeline(video_paths, music_path)

    return {
        "status": "processing",
        "tempo": output["tempo"],
        "beats_sample": output["beats"][:10],
        "edit_plan_sample": output["edit_plan"][:10],
        "video_analysis": output["video_analysis"],
        "output": output["output"],
    }
