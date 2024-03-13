import { View, Image } from 'react-native'
import { styles } from './styles'

export function Header() {
  const todoLogo = require('../../../assets/logo.png')

  return (
    <View style={styles.headerContainer}>
      <Image source={todoLogo} />
    </View>
  )
}
