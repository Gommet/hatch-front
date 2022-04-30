import React, {Component, useState} from 'react';
import '../components/cameraStyles.css';
import Webcam from "react-webcam";
import { View } from '../components/Themed';
const WebcamComponent = () => <Webcam/>
const videoConstraints = {
  width:220, 
  height:200,
  facingMode:{ exact: "environment" }
};
/*const WebcamCapture = () => {
  const [image, setImage] = useState('');
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);
  return(
    <View>
      {image==''?<Webcam audio={false} height={200} ref={webcamRef} screenshotFormat="image/jpeg" width={220} videoConstraints={videoConstraints}
      />:<img src={image}/>}
    <button onClick={(e) => {e.preventDefault(); setImage('');}}>Capture</button>
    </View>
  );
};*/
