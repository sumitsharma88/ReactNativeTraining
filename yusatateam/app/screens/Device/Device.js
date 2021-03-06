import React from 'react';
import {
    View,
    FlatList,
    TouchableWithoutFeedback,
    BackHandler
} from 'react-native';
import { Card, Text } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { Activityindication, HeaderWithSearchbar } from '../../components';
import { DeviceDetails } from './DeviceDeatails';
import { userActions } from '../../redux/actions';
import { globalStyles } from '../../styles';

export class Device extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: null,
            searchValue: ''
        };
        this.modalRef = React.createRef();
        this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        this.SearchFilterFunction = this.SearchFilterFunction.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.onFetchData();
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.deviceDatas !== nextProps.deviceDatas) {
            this.setState({ data: nextProps.deviceDatas.data });
            this.arrayList = nextProps.deviceDatas.data;
        }
    }

    SearchFilterFunction(text) {
        const newData = this.arrayList.filter(function (item) {
            const itemData = item.IMEI.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            searchValue: text
        },
        )
    }
    onSearchClearPressed() {
        this.SearchFilterFunction('');
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Activityindication visible={this.props.deviceDatas.isLoading} />
                    <HeaderWithSearchbar
                        onChangeText={(text) => this.SearchFilterFunction(text)}
                        onSearchClear={this.onSearchClearPressed}
                        searchValue={this.state.searchValue}
                        title={'Devices'}
                        leftIcon='arrow-left'
                        goBack={() => goBack()} />
                    {/* <SearchBar onChangeText = {(text)=>this.searchFunction(text)}
                        ></SearchBar> */}
                    <View style={styles.viewStyle}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.modalRef.current.setModalVisible(true)
                                    }}>
                                    <Card style={[styles.mainCard, globalStyles.card]}>

                                        <View style={styles.First_View}>
                                            <View style={styles.profile_view}>
                                                <FontAwesome name="mobile-phone" size={56} color="#1f667e" ju
                                                ></FontAwesome>
                                            </View>
                                        </View>

                                        <View style={styles.Second_View}>

                                            <View style={styles.Margin_Row}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={[globalStyles.title_text, { fontFamily: 'Roboto' }]}>{item.IMEI}</Text>
                                                </View>

                                                <View style={[styles.Status_Button, { backgroundColor: item.color }]} >
                                                    <Text style={[styles.Status_Style, { fontFamily: 'Roboto' }]}>{item.status}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>ORDER#</Text>
                                                </View>
                                                <View style={{ flex: 0.2 }}>
                                                    <Text style={globalStyles.secondary_text}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.ORDER}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>ESN</Text>
                                                </View>
                                                <View style={{ flex: 0.2 }}>
                                                    <Text style={globalStyles.secondary_text}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.ESN}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.Model}</Text>
                                                </View>
                                                <View style={styles.jobTypeView}>
                                                    <Text style={[styles.jobTypeText, { fontFamily: 'Roboto' }]}>{item.Manufacturer}</Text>
                                                </View>
                                            </View>

                                        </View>

                                    </Card>
                                </TouchableWithoutFeedback>

                            }></FlatList>
                    </View>
                    <DeviceDetails ref={this.modalRef} />
                </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        deviceDatas: state.devicedata
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchData: () => dispatch(userActions.deviceRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Device)