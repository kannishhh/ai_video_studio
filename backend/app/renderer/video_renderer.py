import cv2
from moviepy.editor import VideoFileClip, concatenate_videoclips, vfx


def render_video(edit_plan, output_path="storage/outputs/reel.mp4"):
    clips = []

    for i, item in enumerate(edit_plan[:3]):
        video_path = item["video"]

        clip_obj = VideoFileClip(video_path)

        video_duration = clip_obj.duration
        start = 0
        end = min(1.5, video_duration)

        clip = clip_obj.subclip(start, end).without_audio()

        clip = clip.fx(vfx.speedx, factor=1.05)
        clip = clip.fx(vfx.colorx, factor=1.1)
        clip = clip.fadein(0.2).fadeout(0.2)

        video_faces = item.get("faces", [])

        if item["effect"] == "zoom":
            clip = apply_face_zoom(clip, video_faces)

        if i != 0:
            clip = clip.crossfadein(0.2)

        if i % 2 == 0:
            clip = apply_effects(clip, "flash")
        else:
            clip = apply_effects(clip, "normal")

        clips.append(clip)

    final = concatenate_videoclips(clips, method="compose", padding=-0.2)

    final.write_videofile(output_path, fps=10, preset="ultrafast", threads=2)

    return output_path


def apply_face_zoom(clip, faces):
    w, h = clip.size

    if not faces:
        return clip

    centers = []

    for f in faces:
        fx = int(f["x"] * w)
        fy = int(f["y"] * h)
        fw = int(f["w"] * w)
        fh = int(f["h"] * h)

        cx = fx + fw // 2
        cy = fy + fh // 2

        centers.append((cx, cy))

    crop_w = int(w * 0.6)
    crop_h = int(h * 0.6)

    def zoom_func(get_frame, t):
        frame = get_frame(t)

        idx = int((t / clip.duration) * (len(centers) - 1))
        idx = min(idx, len(centers) - 1)
        if idx > 0:
            prev_cx, prev_cy = centers[idx - 1]
            cx = int(0.7 * prev_cx + 0.3 * centers[idx][0])
            cy = int(0.7 * prev_cy + 0.3 * centers[idx][1])
        else:
            cx, cy = centers[idx]

        x1 = max(0, cx - crop_w // 2)
        y1 = max(0, cy - crop_h // 2)

        x2 = min(w, x1 + crop_w)
        y2 = min(h, y1 + crop_h)

        cropped = frame[y1:y2, x1:x2]

        return cv2.resize(cropped, (w, h))

    return clip.fl(zoom_func)


def apply_effects(clip, effect_type):
    if effect_type == "flash":
        return clip.fx(vfx.lum_contrast, lum=0, contrast=0, contrast_thr=0)

    elif effect_type == "slow":
        return clip.fx(vfx.speedx, factor=0.4)

    return clip
