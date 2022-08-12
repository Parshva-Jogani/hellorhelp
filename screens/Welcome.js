import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Image } from 'react-native'

class Welcome extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity><Text>Volunteer</Text></TouchableOpacity>
        <TouchableOpacity><Text>User</Text></TouchableOpacity>
      </View>
    )
  }
}

export default Welcome