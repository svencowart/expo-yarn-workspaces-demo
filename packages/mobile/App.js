import React from 'react';
import { Text, View } from 'react-native';
import { useUserStore } from '@expo-yarn-workspaces-demo/core/stores/UserStore';
import styles from './App.scss';

export default function App() {
  const [userStore] = useUserStore();

  return (
    <View style={styles.appView}>
      <Text style={styles.appText}>Our hero: {userStore.name}</Text>
    </View>
  );
}
