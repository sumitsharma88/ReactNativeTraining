import React from 'react';
import {
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { Card, Button, Text } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import { SimDetails } from './SimDetails';
import SimData from '../../assets/JSONData/SimData'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class Sim extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
      };
        this.modalRef = React.createRef();
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />

                    <View style={styles.viewStyle}>
                        <FlatList
                            data={SimData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.modalRef.current.setModalVisible(true)
                                    }}>
                                <Card style={styles.mainCard}>

                                        <View style={styles.First_View}>
                                            <TouchableHighlight
                                                style={{
                                                    // borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                                    // width: Dimensions.get('window').width * 0.13,
                                                    // height: Dimensions.get('window').width * 0.13,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: 54,
                                                    width: 54,
                                                    borderRadius: 27,
                                                    borderWidth: 1,
                                                    borderColor: 'gray'

                                                }}
                                            >
                                                <MaterialCommunityIcons name="sim" size={45} color="#1f667e" />
                                            </TouchableHighlight>
                                        </View>

                                        <View style={styles.Second_View}>

                                            <View style={styles.Margin_Row}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={styles.Header_Style}>{item.ORDER}</Text>
                                                </View>

                                                <View style={[styles.Status_Button, { backgroundColor: item.color }]} >
                                                    <Text style={styles.Status_Style}>{item.status}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={styles.Text_Style}>MSIDN</Text>
                                                </View>
                                                <View style={{ flex: 0.1 }}>
                                                    <Text style={styles.Text_Style}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={styles.View_Style}>{item.MSIDN}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={styles.Text_Style}>ICCID</Text>
                                                </View>
                                                <View style={{ flex: 0.1 }}>
                                                    <Text style={styles.Text_Style}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={styles.View_Style}>{item.ICCID}</Text>
                                                </View>
                                            </View>

                                            <View style={[styles.Level_Row, { marginBottom: 5 }]}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={styles.Mobile_Style}>{item.Mobile}</Text>
                                                </View>
                                                <View style={styles.Provider_View} >
                                                    <Text style={styles.providerStyle}>{item.Provider}</Text>
                                                </View>
                                            </View>

                                        </View>

                                    </Card>
                                </TouchableWithoutFeedback>
                            }></FlatList>
                    </View>
                    <SimDetails ref={this.modalRef} />
                </View>
        );
    }

}
export { Sim }