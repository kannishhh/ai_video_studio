import cv2
from moviepy.editor import VideoFileClip, concatenate_videoclips


def render_video(edit_plan, output_path="storage/outputs/reel.mp4"):
    clips = []

    for item in edit_plan[:3]:
        video_path = item["video"]

        start = float(item["start"])
        end = float(item["end"])

        clip = VideoFileClip(video_path).subclip(start, end)

        clip = clip.fx(lambda c: c.speedx(1.05))
        clip = clip.fadein(0.2).fadeout(0.2)

        video_faces = item.get("faces", [])

        if item["effect"] == "zoom":
            clip = apply_face_zoom(clip, video_faces)

        clips.append(clip)

    final = concatenate_videoclips(clips, method="compose")

    final.write_videofile(output_path, fps=10, preset="ultrafast", threads=2)

    return output_path


def apply_face_zoom(clip, faces):
    w, h = clip.size

    if not faces:
        return clip

    # face = faces[0]

    centers = []

    for f in faces:
        fx = int(f["x"] * w)
        fy = int(f["y"] * h)
        fw = int(f["w"] * w)
        fh = int(f["h"] * w)

        cx = fx + fw // 2
        cy = fy + fh // 2

        centers.append((cx, cy))

    crop_w = int(w * 0.6)
    crop_h = int(h * 0.6)

    def zoom_func(get_frame, t):
        frame = get_frame(t)

        idx = int((t / clip.duration) * (len(centers) - 1))
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
