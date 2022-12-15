im
import { StyleSheet, Image } from 'react-native';

const PlaceholderImage = require('./assets/images/wp2.png');

export default function Navigator() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image placeholderImageSource={PlaceholderImage} /> 
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }