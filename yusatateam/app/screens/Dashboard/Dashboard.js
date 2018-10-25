import React from 'react';
import {
    ScrollView,
} from 'react-native';
import { Text, View, Icon, Card ,CheckBox } from 'native-base';
import styles from './Styles';
import { AppLoading, LinearGradient } from 'expo';
import { Toolbar, RoundedIcon, Piechart, SummaryCard } from '../../components';
import Swiper from 'react-native-swiper';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
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
                <Toolbar title='Dashboard'
                    leftIcon='home'
                    setting='md-person' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={styles.fixed}></View>

                        <View style={styles.upper_view}>
                            <Swiper paginationStyle={styles.pagination}
                                dot={<View style={styles.dot} />}
                                activeDot={<View style={styles.activedot} />}
                                autoplay={true}
                                autoplayTimeout={5}>
                                <Piechart
                                    heading='Devices'
                                    details={['Total (2000)', 'Installed (200)', 'Tested Ok (100)', 'Ready to use (500)', 'Defective (1000)']}
                                    series={[2000, 400, 700, 500, 400]}
                                    sliceColor={['#FF8B7E', '#B19DFF', '#39C5DE', '#67C17B', '#FF9561']} 
                                />
                                <Piechart
                                    heading='Sims'
                                    details={['Total (2000)', 'Installed (200)', 'Activated (100)', 'Deactivated (500)']}
                                    series={[2000, 800, 500, 700]}
                                    sliceColor={['#FD6260', '#3C434B', '#02B8AB', '#F3C814']}
                                />
                                <Piechart
                                    heading='Jobs'
                                    details={['Total jobs (2000)', 'Scheduled (200)', 'Completed (100)', 'Pending (500)', 'Cancelled (1000)']}
                                    series={[2000, 400, 400, 500, 700]}
                                    sliceColor={['#25456E', '#569FCC', '#E45509', '#F3BA85', '#A5CEDA']}
                                />
                                <Piechart
                                    heading='Technicians'
                                    details={['Total jobs(2000)', "Yash gulati's jobs(200)", "Vivek sharma's jobs(200)", "Sunil's jobs(200)", "Rahul's jobs(200)"]}
                                    series={[2000, 200, 700, 500, 600]}
                                    sliceColor={['#00BED6', '#9AC772', '#929292', '#74E0E0', '#023F5B']}
                                />
                            </Swiper>
                        </View>


                        

                        <View style={styles.lower_view}>
                            <View style={styles.icon_view}>
                                <View style={styles.button_view}>
                                    <RoundedIcon
                                        name='devices'
                                        type='MaterialIcons'
                                        text='Device'
                                        color='#fff'
                                        onPress={() => navigate('Device')}
                                        colors={[ '#b7ffb5','#84e184','#51ae56']}
                                    />
                                </View>
                                <View style={styles.button_view}>
                                    <RoundedIcon 
                                        name='sim'
                                        type='MaterialCommunityIcons'
                                        text='Sim'
                                        color='#fff'
                                        onPress={() => navigate('Sim')}
                                        colors={[ '#ffb994','#f98866','#c2593b']}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={styles.button_view}>
                                    <RoundedIcon 
                                        name='calendar'
                                        type='Foundation'
                                        text='Schedule'
                                        color='#fff'
                                        onPress={() => navigate('Schedule')}
                                        colors={[ '#fff289','#f2c059','#bc9029']}
                                    />
                                </View>
                                <View style={styles.button_view}>
                                    <RoundedIcon 
                                        name='schedule'
                                        type='MaterialIcons'
                                        text='Jobs'
                                        color='#fff'
                                        onPress={() => navigate('Jobs')}
                                        colors={[ '#8ffcde','#5bc8ac','#1f977d']}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={styles.button_view}>
                                    <RoundedIcon 
                                        name='group'
                                        type='FontAwesome'
                                        text='Association'
                                        color='#fff'
                                        onPress={() => navigate('VehicleList')}
                                        colors={[ '#6ddbea','#31a9b8','#007a88']}
                                    />
                                </View>
                                <View style={styles.button_view}>
                                    <RoundedIcon 
                                        name='settings'
                                        type='MaterialCommunityIcons'
                                        text='Settings'
                                        color='#fff'
                                        onPress={() => navigate('Settings')}
                                        colors={[ '#9eb9ff','#6789f8','#265dc4']}
                                    />
                                </View>
                            </View>
                            
                        </View>


                        <View style={styles.daily_summary_view}>
                            <View style={styles.summary_view}>
                                <View style={{flex: 1}}>
                                    <Text style={styles.summary_text}>Summary</Text>
                                </View>
                                <View style={styles.calendar_view}>
                                    <Icon name='calendar' type='Foundation' style={styles.calendar_icon}></Icon>
                                </View>
                            </View>
                            <View style={styles.summary_card}>
                                <Swiper
                                    pagingEnabled={false}
                                    paginationStyle={styles.pagination}
                                    dot={<View style={styles.dot} />}
                                    activeDot={<View style={styles.activedot} />}>
                                    <SummaryCard colors={[ '#b7ffb5','#84e184','#51ae56']}
                                        icon='devices'
                                        iconColor='#fff'
                                        icontype='MaterialIcons'
                                        heading='DEVICES'
                                        headingColor='#f0ad4e'
                                        total='2563'
                                        text1='Ordered devices : 100'
                                        text2='Installed devices : 20'
                                    />
                                    <SummaryCard colors={[ '#ffb994','#f98866','#c2593b']}
                                        icon='sim'
                                        iconColor='#fff'
                                        icontype='MaterialCommunityIcons'
                                        heading='SIMS'
                                        headingColor='#31a9b8'
                                        total='2563'
                                        text1='Ordered sims : 1050'
                                        text2='Installed sims : 50'
                                    />
                                    <SummaryCard colors={[ '#8ffcde','#5bc8ac','#1f977d']}
                                        icon='schedule'
                                        iconColor='#fff'
                                        icontype='MaterialIcons'
                                        heading='JOBS'
                                        headingColor='#d9534f'
                                        total='43022'
                                        text1='Scheduled jobs : 500'
                                        text2='Completed jobs : 110'
                                    />
                                </Swiper>
                            </View>  
                                <View style={{flexDirection :'row',alignItems :'center',justifyContent :'center',width : '95%',height : 40}}>
                                <View style={{flexDirection :'row'}}>
                                <CheckBox checked={true}/> 
                                            <Text note style={styles.checkbox_Text}>Today's</Text>
                                </View>
                                <View style={{flexDirection :'row'}}>
                                <CheckBox checked={false}/> 
                                            <Text note style={styles.checkbox_Text}>Weekly</Text>
                                </View>
                                <View style={{flexDirection :'row'}}>
                                <CheckBox checked={false}/> 
                                            <Text note style={styles.checkbox_Text}>Monthly</Text>
                                </View>
                                <View style={{flexDirection :'row'}}>
                                <CheckBox checked={false}/> 
                                            <Text note style={styles.checkbox_Text}>Yearly</Text>
                                </View>
                            </View>    
                        </View>

                        
                        
                    </View>
                </ScrollView>

            </View>
        );
    }
}

export { Dashboard }