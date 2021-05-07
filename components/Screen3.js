import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import BasicContainer from "./BasicContainer"
import JobItem from "./JobItem"
import { useNavigation } from '@react-navigation/native';

function Screen3(props) {

    const list = [{state:"maharashtra", dist: "395", name:"mumbai"},{state:"gujrat", dist: "396", name:"mumbai"},{state:"maharashtra", dist: "397", name:"mumbai"},{state:"gujrat", dist: "398", name:"mumbai"},{state:"maharashtra", dist: "399", name:"mumbai"},{state:"gujrat", dist: "400", name:"mumbai"},{state:"maharashtra", dist: "390", name:"mumbai"}]

    const [jobList, setJobList] = useState(list)

    const navigation = useNavigation()

    const onPress = (dist_id) => {
        // EXECUTE DELETING LOGIC FOR BACKGROUND PROCESS
        const res = jobList.filter(item => item.dist !== dist_id)
        setJobList(res)
    }

    return (
        <View style={styles.container}>
            <BasicContainer>
                <View style={{height: "85%"}}>
                    <FlatList 
                        data={jobList}
                        keyExtractor={item => item.dist}
                        renderItem={({item}) => <JobItem 
                            onPress={() => onPress(item.dist)}
                            state={item.state}
                            name={item.name}
                        />}
                    />
                </View>
                <TouchableHighlight
                    underlayColor="#005A9C"
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('screen1')}
                    style={{position: "absolute", bottom: 30}}
                >
                    <AntDesign name="plussquareo" size={40} color="dodgerblue" /> 
                </TouchableHighlight>
            </BasicContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Screen3;