import React, {useRef, useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  SafeAreaView,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
  },[]);

  const onSuccess = e => {
    setResult(e);
    setScan(false);
    if (e.data.substring(0, 4) === 'http') {
      alert(e.data);
    }
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  };

  return !scan ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => setScan(true)}>
          <Text style={styles.buttonText}>Start Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
  
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        showMarker={true}
        ref={scanner}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <View>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => scanner.current.reactivate()}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={styles.buttonTouchable}
                onPress={() => setScan(false)}>
                <Text style={styles.buttonText}>STOP</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        // cameraProps={e => {
        //   console.log(e);
        // }}
      />
    
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Camera;
