import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'

export interface Task {
  id: string
  description: string
  isComplete: boolean
}

export interface TaskProps {
  taskData: Task
  onRemove: (id: string) => void
  onCheckTask: (id: string) => void
}

export function Task({ taskData, onRemove, onCheckTask }: TaskProps) {
  const [isTaskComplete, setIsTaskComplete] = useState(taskData.isComplete)

  return (
    <View style={styles.taskContainer}>
      <Checkbox
        style={styles.checkbox}
        value={isTaskComplete}
        onValueChange={() => {
          setIsTaskComplete((prevState) => !prevState)
          onCheckTask(taskData.id)
        }}
        color={isTaskComplete ? '#5E60CE' : ''}
      />
      <Text style={[styles.taskText, isTaskComplete && styles.taskChecked]}>
        {taskData.description}
      </Text>
      <TouchableOpacity onPress={() => onRemove(taskData.id)}>
        <Feather name="trash-2" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
