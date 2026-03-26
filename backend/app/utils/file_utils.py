import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))

UPLOAD_DIR = "storage/uploads/"


def save_file(file, subfolder):
    folder = os.path.join(UPLOAD_DIR, subfolder)
    os.makedirs(folder, exist_ok=True)

    file_path = os.path.join(folder, file.filename)

    with open(file_path, "wb") as f:
        f.write(file.file.read())

    return file_path
