import cloudinary
import config
import detect

cloudinary.config(
        cloud_name = config.cloud_name,
        api_key = config.api_key,
        api_secret = config.api_secret
        )

import cloudinary.uploader
import cloudinary.api

from picamera import PiCamera
import time
from os import listdir


camera = PiCamera()
camera.resolution = (720, 720)
#camera.zoom = (0.3,0,0.7,0.7)
print("[DEBUG] camera resolution: " + str(camera.resolution))
print("[DEBUG] camera zoom: " + str(camera.zoom))

time.sleep(2) # warm up time for the camera

def detect_object(path):
    image = detect.load_image(path)
    ids = detect.detect_aruco(image)

    if not ids:
        print("[ERROR] No ArUco markers found!")
        return None

    if ids[0] == 10:
        return "Almonds"
    elif ids[0] == 20:
        return "Salt"
    elif ids[0] == 30:
        return "Nutella"
    else:
        print("[ERROR] Detected incorrect ArUco marker!")
        return None

    return None


def take_picture():
    name = config.photo_path + str(round(time.time())) + ".jpg"
    camera.capture(name)

    print("[INFO] saved photo at " + name)

    return name

def upload_latest_picture(name):
    print("[INFO] starting upload now...")

    result = cloudinary.uploader.upload(name, public_id=name)

    print("[INFO] image uploaded at: " + result["url"])

    return result["url"]




