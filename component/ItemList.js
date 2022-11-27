import {Text, View} from 'react-native';
import dataList from '../data/DataList'
import Style from "../styles/Style";

function ItemList(){

    return (
        <View>
            <Text>List data</Text>
            {
                dataList.map((data) =>
                    <View>
                        <Text>{data.id}{data.title}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default ItemList;
