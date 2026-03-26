from app.services.audio_analyzer import detect_beats
from app.services.video_analyzer import analyze_video


def run_pipeline(video_paths, music_path):
    print("Pipeline started")

    print("Step 1: Audio Analysis")
    audio_data = detect_beats(music_path)

    print("Tempo:", audio_data["tempo"])
    print("Beats:", audio_data["beats"][:10])

    print("Step 2: Video Analysis")
    video_data = analyze_video(video_paths)

    print("Video Analysis", video_data)

    print("Step 3: Editing Analysis")
    print("Step 4: Rendering")

    return {
        "tempo": audio_data["tempo"],
        "beats": audio_data["beats"],
        "video_analysis": video_data,
        "output": "storage/outputs/reel.mp4",
    }
