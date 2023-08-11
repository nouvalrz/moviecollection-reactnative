import React from "react";
import { userData } from "../../data/TryCodeData";
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from "react-native";

const TryCodeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>An array of objects lets you store multiple values in a single variable. It
        stores a fixed-size sequential collection of elements of the same type. An
        array is used to store a collection of data, but it is often more useful to
        think of an array as a collection of variables of the same type.</Text>
      <FlatList
        contentContainerStyle={{ padding: 8 }}
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={[styles.itemContainer, { backgroundColor: item.gender.toLowerCase() === 'male' ? 'moccasin' : 'lavender' }]} >
              <Image source={{ uri: item.imageLink }} style={styles.itemImage} />
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.gender}</Text>
              <Text style={styles.itemText}>{item.age}</Text>
              {/* USING Immediately Invoked Function Expression (IIFE) | https://developer.mozilla.org/en-US/docs/Glossary/IIFE */}
              {/* {(() => {

                if (item.age >= 6 && item.age <= 12) {
                  return <Text style={styles.itemText}>Child</Text>
                } else if (item.age >= 13 && item.age <= 17) {
                  return <Text style={styles.itemText}>Teen</Text>
                } else if (item.age >= 18 && item.age <= 64) {
                  return <Text style={styles.itemText}>Adult</Text>
                }
              })()} */}

              {/* USING TERNARY */}
              {
                item.age >= 6 && item.age <= 12 ?
                  <Text style={styles.itemText}>
                    Child
                  </Text>
                  :
                  item.age >= 13 && item.age <= 17 ?
                    <Text style={styles.itemText}>
                      Teen
                    </Text>
                    :
                    item.age >= 18 && item.age <= 64 ?
                      <Text style={styles.itemText}>
                        Adult
                      </Text>
                      :
                      null
              }
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  itemContainer: {
    margin: 8,
    // backgroundColor: 'lavender',
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
  },
  itemImage: {
    width: 100,
    height: 100
  },
  itemText: {
    color: 'black'
  }
})

export default TryCodeScreen;