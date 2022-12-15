import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import {NavigationContainer} from "@react-navigation/native"
const PlaceholderImage = require('./assets/images/wp2.png');

export default function App() {
  return (
    <NavigationContainer>
      <Navigator/>
    
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={PlaceholderImage} /> 
      </View>
      <View style={styles.footerContainer}>
        <Button theme= "primary" label="Argentina" />
        <Button theme="primary" label="Francia" />
        <Button theme="primary" label="Croacia" />
      </View>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 220,
    height: 160,
    borderRadius: 18,
    margin: 10,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});