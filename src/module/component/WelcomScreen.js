import { Button } from '@rneui/base';
import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer/authSlice';

const WelcomScreen = ({ navigation }) => {
  const dishpatch = useDispatch();

  const handleLogin = () => {
    navigation.navigate('Login');
    // dishpatch(login())
  }
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/icon.png")
          } />
        <Text style={styles.titleText}>welcome to op central</Text>
        <Text style={styles.subtitle}>Lorem Ipsum is simply dummy</Text>
        <Text>Lorem Ipsum is simply test</Text>
        <Text>Lorem Ipsum test</Text>
        <Button
          title="Login"
          size='md'
          style={{ width: 200, padding: 3 }}
          onPress={() => handleLogin()}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    backgroundColor: "white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 58,
  },
  titleText: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: 4,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default WelcomScreen