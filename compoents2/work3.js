import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Image
            source={require('./pic/mmenu.png')}
            style={{width: 25.95, height: 20.55}}
          />
        </TouchableOpacity>
        <Text style={styles.academic}>Academic</Text>
        <Image
          source={require('./pic/girl.jpg')}
          style={{width: 35, height: 35, borderRadius: 30}}
        />
      </View>
      <Main />
    </View>
  );
};
const First = () => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={require('./pic/1stcard.png')}
        style={{
          width: '100%',
          height: 210.33,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: 45,
            marginHorizontal: 12,
          }}>
          <Text style={{color: '#F3B2E8', fontSize: 16}}>
            show as {'\n'}what you Learn
          </Text>

          <Text style={{paddingVertical: 28, color: '#772569', fontSize: 18}}>
            Assignment
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const Second = () => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={require('./pic/2ndcard.png')}
        style={{
          width: '100%',
          height: 210.33,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',

            marginTop: 48,
            marginRight: 20,
          }}>
          <Text style={{color: '#F3B2E8', fontSize: 16}}>
            Test yourself {'\n'}to prove it
          </Text>
          <Text style={{paddingVertical: 35, color: '#772569', fontSize: 18}}>
            Assessment
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const Third = () => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <ImageBackground
          source={require('./pic/3rdcard.png')}
          style={{
            width: '100%',
            height: 210.33,
          }}>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 48,
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginHorizontal: 20,
            }}>
            <Text style={{color: '#F3B2E8', fontSize: 16}}>
              what would you like {'\n'}to learn today?
            </Text>

            <Text style={{paddingVertical: 30, color: '#772569', fontSize: 18}}>
              E-Learning
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <Foot />
    </ScrollView>
  );
};
const Foot = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        width: 371,
        height: 80,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}>
      <View>
        <TouchableOpacity>
          <Image
            source={require('./pic/Homeoutlineicon.png')}
            style={{width: 22.86, height: 25.1}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('./pic/acadamicsicon.png')}
            style={{width: 19.55, height: 33.42}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('./pic/notificationoutlineicon.png')}
            style={{width: 19.52, height: 25.42}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('./pic/moreicon.png')}
            style={{width: 25.09, height: 25.1}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Main = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        flex: 1,
        margin: 10,

        alignSelf: 'center',
      }}>
      <First />
      <Second />
      <Third />
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#EEF2FF'},
  nav: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: 80,
  },
  academic: {
    width: 96,
    height: 23,
    fontSize: 20,
    // fontStyle: 'italic',
    color: '#772569',

    // opacity: '100%',
  },
});
