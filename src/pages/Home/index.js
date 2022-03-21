import {Promise} from 'bluebird';
import React, {useEffect, useCallback, useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {IcCart, IcNext} from '../../assets';
import {CustomText} from '../../global/components';
import {API_URL} from '../../global/config';
import {FoodCard} from '../../global/molecules';
import {GET} from '../../global/services/uri';
import {COLOR} from '../../global/styles';

let FETCH = Promise.resolve();

const Home = () => {
  var [data, setData] = React.useState(),
    [refreshing, setRefreshing] = React.useState(false),
    [errorMessage, setErrorMessage] = React.useState(''),
    [index, setIndex] = React.useState(0),
    [price, setPrice] = React.useState(0);
  const [count, setCount] = useState(0);
  // ref = useRef ({count : 1});

  useEffect(() => {
    fetchData();

    return () => {
      try {
        FETCH.cancel();
      } catch (error_fetch_cancel) {}
    };

  }, []);

  const fetchData = async () => {
    try {
      try {
        FETCH.cancel();
      } catch (error_fetch_cancel) {}
      FETCH = GET(
        `${API_URL.url}/restaurant/e30aad04-a8c2-4e92-a549-35d73ebe235a/2`,
      );
      const res = await FETCH;
      const result = res.data;
      console.log(result);
      if (result) {
        setData(result.data.menu);
      } else {
        throw new Error(result.title);
      }
    } catch (err) {
      console.warn(err);
      setData('error');
      setErrorMessage(err.message);
    }
    setRefreshing(false);
    // await Axios.get(
    //   `${API_HOST.url}/restaurant/e30aad04-a8c2-4e92-a549-35d73ebe235a/2`,
    //   {
    //     headers: {
    //       Authorization: 'e30aad04-a8c2-4e92-a549-35d73ebe235a',
    //     },
    //   },
    // )
    //   .then(res => {
    //     data = res.data.data.menu;
    //     setData(data);
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     showMessage(
    //       `${err?.response?.data?.message} on Update Profile API` ||
    //         'Terjadi kesalahan di API Update Profile',
    //     );
    //   });
  };

  //

  //   const handleCounter = () => {
  //     setCount(true);
  //   };

  const callback = useCallback(count => {
    setCount(count);
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingBottom: 20,
          padding: 18,
          backgroundColor: COLOR.primary,
        }}>
        <CustomText color={COLOR.white} style={{marginBottom: 10}}>
          Concrad Chicago Restaurant
        </CustomText>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View>
              <View
                style={{
                  backgroundColor: COLOR.warning,
                  borderRadius: 16,
                  paddingHorizontal: 10,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {data ? (
          data?.map((item, x) => (
            <View key={x}>
              <View
                style={{
                  padding: 16,
                  borderBottomWidth: 0.2,
                  borderColor: COLOR.white3,
                }}>
                <CustomText>
                  {item.category}
                  <CustomText size={10} color={COLOR.silver}>
                    {` `} {item.data.length} Items
                  </CustomText>
                </CustomText>
              </View>

              {item?.data?.map((item, i) => (
                <FoodCard
                  key={i}
                  id={item.id}
                  description={item.description}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  parentCallback={callback}
                />
              ))}
            </View>
          ))
        ) : (
          <></>
        )}
      </ScrollView>

      <View
        style={{
          padding: 16,
          paddingTop: 0,

          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: COLOR.primary,
            borderRadius: 5,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <IcCart style={{alignSelf: 'center', marginRight: 10}} />
            <View
              style={{
                borderWidth: 1,
                borderColor: 1,
                borderColor: COLOR.white,
                marginRight: 10,
              }}></View>
            <View>
              <CustomText color={COLOR.silver2}>
              {count} Item
              </CustomText>
              <CustomText color={COLOR.white}>$200</CustomText>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText color={COLOR.white} style={{marginRight: 10}}>
              Proceed To Cart
            </CustomText>
            <IcNext />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
