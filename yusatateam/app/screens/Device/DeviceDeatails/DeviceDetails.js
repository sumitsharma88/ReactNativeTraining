import React from 'react';
import {
    View,
    Modal,
    Button
} from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
export default class DeviceDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.container}>

                        <View style={styles.header_view}>

                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>Item12</Text>
                            </View>
                            <View style={styles.schedule_view}>
                                <View style={[styles.Status_Button, { backgroundColor: "#5cb85c" }]} >
                                    <Text style={styles.Status_Style}>Tested Ok</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.View_Container}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>OrderNumber</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>ORDER001</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Text_Style}>Imei </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>imei252</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Esn</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>Esn1256</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Price </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                {/* <View style={{ flex: 2, justifyContent: 'flex-start', marginTop: 4 }}>
                                    <FontAwesome name='rupee' size={20} color='gray' />
                                </View> */}
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>1520</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>HarnessType</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>harnessTest</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Peripheral</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>peripheralTest</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Model</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>ModelTest</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Manufacturer</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>HP</Text>
                                </View>
                            </View>


                            <View style={{ marginTop: 6 }}>
                                <View >
                                    <Text style={styles.Text_Style}>Item Description - </Text>
                                </View>
                                <View >
                                    <Text style={styles.ViewDescription_Text} >This is device,used for purpose of installation
                                    in the vehicle device install after test </Text>
                                </View>
                            </View>
                            <View style={styles.Button_View}>
                                <View style={{ flex: 1 }}></View>
                                <View style={styles.Button_Style}>
                                    <Button
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                        title="Close"
                                        color="#0073b7"

                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
export { DeviceDetails }