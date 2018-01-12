import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';

export default class IEPManager extends Component {
    _onPressButton() {
        navigate('Maint591');
    }

  render() {
       const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{
            flex: 1,
            backgroundColor: '#ffffff'
            }}>
        <Button
            title="New Form"
            color="#841584"
            onPress={() =>
                navigate('Maint591')
            }
        />
        <View style={styles.container}>
            <Text style={styles.h1}>Internal Evaluation Program Manager</Text>
            <Text style={styles.newChecklist}>New Checklists</Text>
            <View style={styles.newForms}>
            <Button title="USFS"
            color="#841584"
            onPress={() =>
                navigate('Maint591')
            }>
                
            </Button>
            <Button onPress={this._onPressButton} title="OPS 8-(RW) Aviation Life Support / Survival Equipment (2016)">
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 8- Cabin Crew and Service Reps Part 135 (2016)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 7- Flight Standards 2017 (Part 91)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 7- Flight Standards 2017 (Part 135)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 5- Pilot Hiring 2017 (part 91)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 5- Pilot Hiring 2017 (part 135)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 1- Operations Management 2016 (Part 135)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Operations 6- Pilot Training Part 91 (2017)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Operations 6- Pilot Training Part 135 (2017)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 6- Control/Planning Part 91 (2017)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 5- Training 2017 (Part 91)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 5- Training 2017 (Part 135)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 4- Inspection Program Part 135 (2017)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 11- Hangar/Facilities (2016)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 8- Records 2016 (Part 135)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 7- Aircraft Condition 2017 (Part 91)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 7- Aircraft Condition 2017 (Part 135)</Text>
                </View>
            </Button>
            <Button onPress={this._onPressButton} title="">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 6- Control/Planning Part 135 (2017)</Text>
                </View>
            </Button>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        paddingTop: 30
    },
    h1: {
        fontSize: 25,
        textAlign: 'center',
        margin: 25
    },
    button: {
        margin: 10,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    },
    newChecklist: {
        fontSize: 18
    },
    newForms: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'lightgrey',
        padding: 5
    }
})

AppRegistry.registerComponent('IEPManager', () => IEPManager);