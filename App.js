import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const AppSwitchNavigator = createSwitchNavigator({
  UserLogin: UserLogin,
  UserRegister: UserRegister,
  Welcome: Welcome,
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

class App extends Component {
  render() {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }
}

export default App