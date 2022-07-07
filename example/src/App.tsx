import * as React from 'react';

import { StyleSheet, View, Text, Button, AppState } from 'react-native';
import { blockScreen, unblockScreen } from 'react-native-background-secure';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    // const subscription = AppState.addEventListener('change', (nextAppState) => {
    //   appState.current = nextAppState;
    //   console.log({ status: appState.current });
    //   if (appState.current !== 'active') {
    //     blockScreen(); console.log('bloqueou')
    //   } else {
    //     unblockScreen(); console.log('desbloqueou')
    //   }
    // });
    const subscription2 = AppState.addEventListener('blur', (nextAppState) => {
      appState.current = nextAppState;
      blockScreen();
      console.log('bloqueou')
    });
    const subscription3 = AppState.addEventListener('focus', (nextAppState) => {
      appState.current = nextAppState;
      unblockScreen(); console.log('desbloqueou')
    });

    return () => {
      // subscription.remove();
      subscription2.remove();
      subscription3.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button title={'ativar'} onPress={blockScreen} />
      <Button title={'desativar'} onPress={unblockScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
