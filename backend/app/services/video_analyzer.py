from ai_models.vision.face_detector import detect_faces


def analyze_video(video_paths):
    results = []

    for path in video_paths:
        faces = detect_faces(path)

        results.append({"video": path, "face_frames": faces[:10]})

    return results
