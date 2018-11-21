import React from 'react';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { Toolbar } from '../../../components/Toolbar';
import { TechDetails } from './TechDetails';
import {FontAwesome,EvilIcons} from '@expo/vector-icons';
import colors from '../../../constants/colors'
import EStylesheet from 'react-native-extended-stylesheet'

export default class TabComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    };
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Toolbar title='Details' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                           Calender='calendar' calenderType='FontAwesome' onCalenderPress={()=> navigate('Settings')}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />
                   <Tabs>

                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>Week1</Text>
                                        <Text style={styles.date}>1 to 7</Text>
                                    </View>
                                </TabHeading>
                            }>

                            <TechDetails />
                        </Tab>

                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>Week2</Text>
                                        <Text style={styles.date}>1 to 7</Text>
                                    </View>
                                </TabHeading>
                            }>

                            <TechDetails />
                        </Tab>

                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>Week3</Text>
                                        <Text style={styles.date}>1 to 7</Text>
                                    </View>
                                </TabHeading>
                            }>

                            <TechDetails />
                        </Tab>

                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>Week4</Text>
                                        <Text style={styles.date}>1 to 7</Text>
                                    </View>
                                </TabHeading>
                            }>

                            <TechDetails />
                        </Tab>

                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>Week5</Text>
                                        <Text style={styles.date}>1 to 7</Text>
                                    </View>
                                </TabHeading>
                            }>

                            <TechDetails />
                        </Tab>

                       
                       {/* <Tab 
                             heading={
                                 <TabHeading>
                                     <View style={styles.tab_view}>
                                     <Text style={styles.from}>Week1</Text>
                                     <Text style={styles.date}>1 to 7</Text>
                                     </View>
                                 </TabHeading>
                             }>
                            
                            <TechDetails />
                        </Tab>

                        <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="14 to 21">
                            <TechDetails />
                        </Tab>

                        <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="21 to 28">
                            <TechDetails />
                        </Tab>

                        <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="28 to 31">
                            <TechDetails />
                        </Tab> */}

                    </Tabs>


                </View>
        )
    }

}
export { TabComponent }


 const styles=EStylesheet.create({
    tab_view: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.HEADER_COLOR,
        justifyContent:'center',
        alignItems:'center'
       
    },
    from: {
        color: '#000',
        fontSize: '0.9rem'
    },
    date: {
        color: 'gray',
        fontSize: '0.7rem'
    }

})
