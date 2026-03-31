def generate_edit_plan(video_data, beats):
    plan = []

    videos_with_faces = [v for v in video_data if v["faces"]]
    videos_without_faces = [v for v in video_data if not v["faces"]]

    all_videos = videos_with_faces + videos_without_faces

    video_index = 0

    for i in range(min(len(beats) - 1, 10)):
        start = beats[i]
        end = beats[i + 1]

        video = all_videos[video_index % len(all_videos)]

        effect = "zoom" if video["faces"] else "normal"

        plan.append(
            {
                "video": video["video"],
                "start": float(start),
                "end": float(end),
                "effect": effect,
                "faces": video["faces"],
            }
        )

        video_index += 1

    return plan
