from fastapi.responses import FileResponse
from fastapi import APIRouter, UploadFile, File, BackgroundTasks
from typing import List, Annotated
from app.utils.file_utils import save_file
from app.pipeline.pipeline_manager import run_pipeline
from app.utils.job_store import create_job, get_job

router = APIRouter()


@router.post("/generate-reel")
async def generate_reel(
    background_tasks: BackgroundTasks,
    videos: Annotated[List[UploadFile], File(description="Upload multiple videos")],
    music: Annotated[UploadFile, File(description="Upload music file")],
):
    video_paths = [save_file(v, "videos") for v in videos]
    music_path = save_file(music, "music")

    job_id = create_job()

    background_tasks.add_task(run_pipeline, video_paths, music_path, job_id)

    return {
        "status": "processing",
        "message": "Reel generation started in background",
        "job_id": job_id,
    }


@router.get("/job-status/{job_id}")
def job_status(job_id: str):
    job = get_job(job_id)

    if not job:
        return {"error": "Job not found"}

    return job


@router.get("/download/{job_id}")
def download_reel(job_id: str):
    job = get_job(job_id)

    if not job:
        return {"error": "Job not found"}

    if job["status"] != "completed":
        return {"error": "Video not ready yet"}

    return FileResponse(
        path=job["output"], media_type="video/mp4", filename="reel_{job_id}.mp4"
    )
