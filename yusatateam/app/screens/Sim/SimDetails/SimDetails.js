import React from 'react';
import {
    View,
    Modal,
    TextInput,
    Button
} from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
export default class SimDetails extends React.Component {
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
                                    <Text style={styles.Status_Style}>Active</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.View_Container}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View >
                                        <Text style={styles.Order_text}>OrderNumber :</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.Order_texts}>ORDER001</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Text_Style}>Iccid </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>iccid252</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Msidn</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>msidn1256</Text>
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
                                    <Text style={styles.Text_Style}>Plan </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>plantext</Text>
                                </View>
                            </View>

                            <View style={styles.Mobile_Level}>
                                <View >
                                    <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                </View>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={styles.View_Style}>+91 85465256555</Text>
                                </View>
                                <View style={styles.Provider_View} >
                                    <Text style={styles.providerStyle}>Airtel</Text>
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
export { SimDetails }