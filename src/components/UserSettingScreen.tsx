import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavStyles from '../styles/NavStyles';

interface AppProps {}

export default class UserSettingScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Settings",
    ...NavStyles
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="back to Welcome"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#263992",
    justifyContent: "center",
    paddingTop: 25,
  },
});