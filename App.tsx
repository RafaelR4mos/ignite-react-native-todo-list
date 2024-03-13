import { StatusBar } from 'react-native'
import { View } from 'react-native'
import { styles } from './styles/styles'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  )
}
