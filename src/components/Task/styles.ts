import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 12,

    maxWidth: '100%',
    backgroundColor: theme['gray-500'],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    height: 64,
    borderColor: theme['gray-400'],
    borderWidth: 1,
  },
  taskText: {
    fontSize: 14,
    color: 'white',
    flex: 1,
  },
  taskChecked: {
    textDecorationLine: 'line-through',
  },
  checkbox: {
    borderRadius: 999,
    borderColor: theme.blue,
  },
})
