import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ButtonComponent = (props) => {
  // useEffect(() => {
  //   console.log(props)
  // }, [])
  return (
    <View style={styles.mainButtonContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity {...props}>
          <Text>SEE DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainButtonContainer: {
    alignItems: 'baseline'
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#cce6cc'
  }
})