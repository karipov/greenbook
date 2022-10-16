from flask import Flask, request, jsonify
import utils

app = Flask(__name__)

all_image_urls = list()

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/take-picture")
def take():
    name = utils.take_picture()
    url = utils.upload_latest_picture(name)
    product_type = utils.detect_object(name)

    if not product_type:
        return jsonify({"message": "not found!"})

    all_image_urls.append(url)
    return jsonify({"url": url, "type": product_type})

@app.route("/get-picture")
def get_picture():
    if all_image_urls == []:
        return jsonify({"message": "not found!"}), 404

    latest = all_image_urls[-1]
    return jsonify({"url": latest})


