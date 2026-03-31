import cv2
import mediapipe as mp

mp_face = mp.solutions.face_detection
face_detection = mp_face.FaceDetection(model_selection=0, min_detection_confidence=0.5)


def detect_faces(video_path: str):
    cap = cv2.VideoCapture(video_path)

    face_data = []
    frame_count = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        frame_count += 1

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = face_detection.process(rgb)

        if results.detections:
            for det in results.detections:
                bbox = det.location_data.relative_bounding_box

                face_data.append(
                    {
                        "frame": frame_count,
                        "x": bbox.xmin,
                        "y": bbox.ymin,
                        "w": bbox.width,
                        "h": bbox.height,
                    }
                )

    cap.release()
    return face_data
