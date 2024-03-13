import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  homeContainer: {
    maxWidth: '100%',
    marginHorizontal: '10%',
    gap: 12,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -28,
    gap: 8,
  },
  addTaskBtn: {
    height: 52,
    width: 52,
    backgroundColor: theme['blue-dark'],
    color: 'white',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskBtnDisabled: {
    opacity: 0.6,
  },
  plusIcon: {
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    height: 54,
    padding: 16,
    borderRadius: 6,
    color: 'white',
    fontSize: 16,
    backgroundColor: theme['gray-500'],
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  inputFocused: {
    borderColor: theme['purple-dark'],
    borderWidth: 1,
  },
  taskHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  taskHeaderItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
  },
  taskHeaderText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.blue,
  },
  taskHeaderTextPurple: {
    color: theme.purple,
  },
  taskHeaderBadge: {
    borderRadius: 999,
    width: 36,
    height: 20,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: theme['gray-400'],
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskHeaderBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listEmptyContainer: {
    marginTop: 12,
    gap: 4,
    paddingTop: 48,
    borderTopWidth: 1,
    borderColor: theme['gray-400'],
    alignItems: 'center',
  },

  listEmptyText: {
    color: theme['gray-300'],
    fontSize: 14,
    textAlign: 'center',
  },
  listEmptyTextStrong: {
    fontWeight: 'bold',
  },
})
