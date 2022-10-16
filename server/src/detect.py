import cv2

aruco_dict = cv2.aruco.Dictionary_get(cv2.aruco.DICT_4X4_250)
aruco_params = cv2.aruco.DetectorParameters_create()

def load_image(path):
    return cv2.imread(path, cv2.IMREAD_GRAYSCALE)

def detect_aruco(image):
    corners, ids, rejected = cv2.aruco.detectMarkers(
        image, aruco_dict, parameters=aruco_params)

    return ids


