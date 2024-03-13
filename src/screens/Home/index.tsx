import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import uuid from 'react-native-uuid'

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskDescription, setTaskDescription] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const createdTasksQuantity = taskList.length
  const doneTasksQuantity = taskList.filter((task) => task.isComplete).length

  const clipboardImg = require('../../../assets/clipboard.png')

  function handleAddTask(taskDescription: string) {
    const newTask = {
      id: uuid.v4() as string,
      description: taskDescription,
      isComplete: false,
    }

    setTaskList((prevState) => [...prevState, newTask])
    setTaskDescription('')
  }

  function handleRemoveTask(idTaskToDelete: string) {
    setTaskList((prevState) =>
      prevState.filter((task) => task.id !== idTaskToDelete)
    )
  }

  function handleCheckTask(idTaskToCheck: string) {
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.id === idTaskToCheck
          ? { ...task, isComplete: !task.isComplete }
          : task
      )
    )
  }

  return (
    <View>
      <Header />
      <View style={styles.homeContainer}>
        <View style={styles.addTaskContainer}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskDescription}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            value={taskDescription}
            style={[
              styles.inputContainer,
              isInputFocused && styles.inputFocused,
            ]}
          />
          <TouchableOpacity
            style={[
              styles.addTaskBtn,
              taskDescription.length < 1 && styles.addTaskBtnDisabled,
            ]}
            disabled={taskDescription.length < 1}
            onPress={() => handleAddTask(taskDescription)}
          >
            <AntDesign name="pluscircleo" size={24} style={styles.plusIcon} />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.taskHeaderContainer}>
            <View style={styles.taskHeaderItem}>
              <Text style={styles.taskHeaderText}>Criadas</Text>
              <View style={styles.taskHeaderBadge}>
                <Text style={styles.taskHeaderBadgeText}>
                  {createdTasksQuantity}
                </Text>
              </View>
            </View>
            <View style={styles.taskHeaderItem}>
              <Text
                style={[styles.taskHeaderText, styles.taskHeaderTextPurple]}
              >
                Concluídas
              </Text>
              <View style={styles.taskHeaderBadge}>
                <Text style={styles.taskHeaderBadgeText}>
                  {doneTasksQuantity}
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            data={taskList}
            keyExtractor={(task) => task.id}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                taskData={item}
                onRemove={(id) => handleRemoveTask(id)}
                onCheckTask={(id) => handleCheckTask(id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.listEmptyContainer}>
                <Image
                  source={clipboardImg}
                  alt="ícone de uma prancheta com possivelmente algo escrito"
                  style={{ marginBottom: 12 }}
                />
                <Text
                  style={[styles.listEmptyText, styles.listEmptyTextStrong]}
                >
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.listEmptyText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}
