import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from "./component/ItemList";
import Style from "./styles/Style";

export default function App() {
  return (
    <View style={Style.view1}>
      <Text>test application11</Text>
            <ItemList />
      <StatusBar style="auto" />
    </View>
  );
}

const style2 = StyleSheet.create({
    styleview1 : {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
    }
})
