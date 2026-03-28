from moviepy.editor import VideoFileClip, concatenate_videoclips


def render_video(edit_plan, output_path="storage/outputs/reel.mp4"):
    clips = []

    for item in edit_plan[:3]:
        video_path = item["video"]

        start = float(item["start"])
        end = float(item["end"])

        print(f"Rendering: {video_path} ({start}-{end})")

        clip = VideoFileClip(video_path).subclip(start, end)

        if item["effect"] == "zoom":
            clip = clip.resize(1.2)

        clips.append(clip)

    final = concatenate_videoclips(clips, method="compose")

    final.write_videofile(output_path, fps=10, preset="ultrafast", threads=2)

    return output_path
