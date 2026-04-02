import uuid

jobs = {}


def create_job():
    job_id = str(uuid.uuid4())
    jobs[job_id] = {"status": "processing", "output": None}
    return job_id


def update_job(job_id, output_path):
    jobs[job_id]["status"] = "completed"
    jobs[job_id]["output"] = output_path


def get_job(job_id):
    return jobs.get(job_id, None)
