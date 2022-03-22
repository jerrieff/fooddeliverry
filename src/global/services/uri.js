import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

import {Platform} from 'react-native';
import axios from 'axios';
import Promise from 'bluebird';
import {API_URL} from '../../global/config';
// import messaging from '@react-native-firebase/messaging';
import {Dimensions} from 'react-native';
import showMessage from '../../global/utils/showMessage';

Promise.config({
  cancellation: true,
});

// const getTokenLogin = async () => {
//     return await AsyncStorage.getItem(STORAGEKEY.authToken);
// }

const createAxios = async (baseURL = API_URL, token = null) => {
  if (token == null) {
    token = 'e30aad04-a8c2-4e92-a549-35d73ebe235a';
  }
  // let token_fcm = '';
  // try {
  //     token_fcm = await messaging().getToken();
  // } catch (error) {}

  const paramsAxios = {
    os: Platform.OS,

    mobile_version: DeviceInfo.getVersion(),
    device_hardware: await DeviceInfo.getHardware(),
    device_manufacturer: await DeviceInfo.getManufacturer(),
    device_type: await DeviceInfo.getDevice(),
    device_os_name: DeviceInfo.getSystemName(),
    device_os_type: DeviceInfo.getSystemVersion(),

    device_width: Dimensions.get('window').width,
    device_height: Dimensions.get('window').height,

    // token_fcm: token_fcm,
  };

  var configAxios = {
    baseURL: baseURL,
    timeout: Platform.OS == 'android' ? 5000 : 15000,
    headers: {Accept: 'application/json', Authorization: 'Bearer ' + token},
    params: paramsAxios,
  };

  return axios.create(configAxios);
};

export const GET = (uri, params = {}, base_url = null, token = null) => {
  return new Promise(async (resolve, reject, onCancel) => {
    let api = null;
    if (base_url != null) {
      api = await createAxios(base_url, token);
    } else {
      api = await createAxios();
    }

    uri = uri.replace(API_URL, '');
    // uri = uri.replace(BASE_URL_LIVE_CLASS, '');
    // uri = uri.replace(BASE_URL_TANYA_SOAL, '');

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    console.log(
      `%c GET ${uri} ${params.page ? `page=${params.page}` : ''} ${
        base_url ? `, BASE_URL=${base_url}` : ''
      } ${token ? `, Token=${token}` : ''}`,
      'color:green',
    );
    const cancel = () => {
      source.cancel('Permintaan dibatalkan.');
      reject(new Error('Batal'));
    };
    onCancel(cancel);
    api
      .get(uri, {params})
      .then(resolve)
      .catch(err => {
        // handleError(err, reject, token);
        console.log('GET Catch :', err);
      });
  });
};
