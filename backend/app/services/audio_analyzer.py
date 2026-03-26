import librosa


def detect_beats(audio_path: str):
    y, sr = librosa.load(audio_path)

    tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
    beat_times = librosa.frames_to_time(beats, sr=sr)

    return {
        "tempo": float(tempo[0]) if hasattr(tempo, "__len__") else float[tempo],
        "beats": beat_times.tolist(),
    }
