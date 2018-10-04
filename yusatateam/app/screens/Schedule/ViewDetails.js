import React from 'react';
import {
    Text,
    View,
    Modal,
    TextInput,
    Picker,
    ScrollView
} from 'react-native';
import { Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default class ViewDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            item: {},
            status: ''
        }
    }

    setModalVisible(visible, item) {
        this.setState({ modalVisible: visible, item: item });
    }

    render() {
        const details = this.state.item;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                    <View style={styles.modal_container}>

                        {/**Header View*/}
                        <View style={styles.header_view}>
                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>{details.serviceNumber}</Text>
                            </View>
                            <View style={styles.schedule_view}>
                                <MaterialIcons name='schedule' size={20} color='#1766A6' />
                                <Text style={styles.job_text}>{details.jobDate}</Text>
                            </View>
                        </View>

                        {/**Child View*/}
                        <View style={styles.modal_child_container}>
                            <ScrollView showsVerticalScrollIndicator={false}>

                                {/**Status and Service type View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.status_picker}>
                                            <Picker
                                                selectedValue={this.state.status}
                                                style={styles.picker}
                                                onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}>
                                                <Picker.Item label="Entered" value="Entered" />
                                                <Picker.Item label="Accepted" value="Accepted" />
                                                <Picker.Item label="Onjob" value="Onjob" />
                                                <Picker.Item label="Completed" value="Completed" />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View style={styles.second_view}>
                                        <Text style={styles.service_type_text}>{details.serviceType}</Text>
                                    </View>
                                </View>

                                {/**Company Name and Vehicle Name View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <Text style={styles.value_text}>{details.companyName}</Text>
                                    </View>
                                    <View style={styles.second_view}>
                                        <Text style={styles.value_text}>{details.vehicleNumber}</Text>
                                    </View>
                                </View>

                                {/**Device View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <Text style={styles.value_text}>{details.device}</Text>
                                    </View>
                                    <View style={styles.second_view}>
                                        <Text style={styles.view_more}>view device</Text>
                                        <Entypo name='chevron-thin-right' color='gray' size={20} />
                                    </View>
                                </View>

                                {/**Sim View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <Text style={styles.value_text}>{details.sim}</Text>
                                    </View>
                                    <View style={styles.second_view}>
                                        <Text style={styles.view_more}>view sim</Text>
                                        <Entypo name='chevron-thin-right' color='gray' size={20} />
                                    </View>
                                </View>

                                {/**Technician View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.icon_view}>
                                            <MaterialIcons name='person' size={24} color='#000' />
                                        </View>
                                        <View style={styles.icon_text_view}>
                                            <Text style={styles.value_text}>{details.servicePerson}</Text>
                                        </View>

                                    </View>
                                </View>

                                {/**Location*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.icon_view}>
                                            <Entypo name='location-pin' color='red' size={24} />
                                        </View>
                                        <View style={styles.icon_text_view}>
                                            <Text style={styles.value_text}>{details.location}</Text>
                                        </View>
                                    </View>
                                </View>

                                {/**Close Button*/}
                                <View style={styles.button_view}>
                                    <Button style={styles.submit_button}
                                        onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                                        <Text style={styles.button_text}>Close</Text>
                                    </Button>
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    '$fontFamily': 'normal',
    modal_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },
    modal_child_container: {
        backgroundColor: '#FFFFFF',
        bottom: 0,
        height: '60%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    header_view: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    header_text: {
        fontFamily: '$fontFamily',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 'bold',
        margin: 15
    },
    service_num: {
        flex: 1,
        justifyContent: 'center'
    },
    job_text: {
        fontFamily: '$fontFamily',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: '#000'
    },
    schedule_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    picker: {
        height: '100%',
        width: '100%'
    },
    status_picker: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    submit_button: {
        backgroundColor: '$primaryColor',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        fontFamily: '$fontFamily',
        color: '#fff'
    },
    main_view: {
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    first_view: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        //flexWrap: 'wrap'
    },
    second_view: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    value_text: {
        fontFamily: '$fontFamily',
        color: '#000',
        fontSize: '1rem',
        flexWrap: 'wrap'
    },
    service_type_text: {
        fontFamily: '$fontFamily',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#1766A6'
    },
    icon_view: {
        flex: 0.1
    },
    icon_text_view: {
        flex: 1
    },
    view_more: {
        fontFamily: '$fontFamily',
        fontSize: '0.8rem',
        color: 'gray'
    }
})