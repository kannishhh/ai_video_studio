def generate_edit_plan(video_data, beats):
    plan = []

    def score(video):
        score = 0
        if video["faces"]:
            score += 5
        return score

    sorted_videos = sorted(video_data, key=score, reverse=True)

    video_index = 0

    for i in range(min(len(beats) - 1, 10)):
        start = beats[i]
        end = beats[i + 1]

        video = sorted_videos[video_index % len(sorted_videos)]

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
