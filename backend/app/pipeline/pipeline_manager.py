from app.services.audio_analyzer import detect_beats
from app.services.video_analyzer import analyze_video
from app.services.editing_engine import generate_edit_plan
from app.renderer.video_renderer import render_video
from app.utils.job_store import update_job


def run_pipeline(video_paths, music_path, job_id):
    print("Pipeline started")

    print("Step 1: Audio Analysis")
    audio_data = detect_beats(music_path)

    print("Tempo:", audio_data["tempo"])
    print("Beats:", audio_data["beats"][:10])

    print("Step 2: Video Analysis")
    video_data = analyze_video(video_paths)

    print("Video Analysis", video_data)

    print("Step 3: Editing Analysis")
    edit_plan = generate_edit_plan(video_data, audio_data["beats"])

    print("Edit Plan:", edit_plan[:5])

    print("Step 4: Rendering")
    output_path = render_video(edit_plan)

    print(f"Video generated at: {output_path}")

    update_job(job_id, output_path)
    print(f"Job {job_id} completed")

    return {
        "tempo": audio_data["tempo"],
        "beats": audio_data["beats"],
        "video_analysis": video_data,
        "edit_plan": edit_plan,
        "output": output_path,
    }
