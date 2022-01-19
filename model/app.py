from flask import Flask

from flask import request, jsonify
import tensorflow as tf 
import tensorflow_hub as hub 
import cv2 
import numpy 
from mark_detector import MarkDetector
from pose_estimator import PoseEstimator

app = Flask(__name__)

multiple_people_detector = hub.load("https://tfhub.dev/tensorflow/efficientdet/d0/1")



@app.route('/predict_people',methods=['GET','POST'])
def predict_pose():
    data = request.get_json()

    # get image tensor 
    output = multiple_people_detector(image, threshold = 0.5)
    people = 0
    for i in range(int(output['num_detections'][0])):
        if classes[i] == 1 and scores[i] > threshold:
            people += 1
            ymin, xmin, ymax, xmax = boxes[i]
            (left, right, top, bottom) = (xmin * im_width, xmax * im_width,
                                          ymin * im_height, ymax * im_height)
            draw.line([(left, top), (left, bottom), (right, bottom), (right, top), (left, top)],
                      width=4, fill='red')

    return jsonify({ 'people' : int(people) , 'image' : image})

@app.route('/predict_pose', methods = ['GET', 'POST']) 
def predict_pose() : 
    data request.json() 

    # get image tensor
    height , width = img.shape[0], img.shape[1]
    pose_estimator = PoseEstimator(img_size=(height, width))
    mark_detector = MarkDetector()

    facebox = mark_detector.extract_cnn_facebox(iamge)
        # Any face found?
    if facebox is not None:

        # Step 2: Detect landmarks. Crop and feed the face area into the
        # mark detector.
        x1, y1, x2, y2 = facebox
        face_img = frame[y1: y2, x1: x2]

        # Run the detection.
        marks = mark_detector.detect_marks(face_img)

        # Convert the locations from local face area to the global image.
        marks *= (x2 - x1)
        marks[:, 0] += x1
        marks[:, 1] += y1

        # Try pose estimation with 68 points.
        pose = pose_estimator.solve_pose_by_68_points(marks)

        # All done. The best way to show the result would be drawing the
        # pose on the frame in realtime.

        # Do you want to see the pose annotation?
        img, pose = pose_estimator.draw_annotation_box(frame, pose[0], pose[1], color=(0, 255, 0))

        # Do you want to see the head axes?
        # pose_estimator.draw_axes(frame, pose[0], pose[1])

        # Do you want to see the marks?
        # mark_detector.draw_marks(frame, marks, color=(0, 255, 0))

        # Do you want to see the facebox?
        # mark_detector.draw_box(frame, [facebox])
        return jsonify({'img' : img, 'pose' : pose})

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0',port=8080)