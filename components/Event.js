import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class Event extends React.Component{

    constructor(propos){
        super(propos);

        this.state={
            input:''
        }

        this.alteraInput=this.alteraInput.bind(this);

    }

    alteraInput(input){
        this.setState({input});
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.font30}>{this.state.input}</Text>
                <TextInput 
                    style={styles.input} 
                    value={this.state.input}
                    onChangeText={this.alteraInput}>
                </TextInput>
            </View>
        )
    }
}

export default Event;   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
    },
    font30: {
    fontSize: 30
    }
});