import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors'

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: '#d4d4d4'
    },
    fixed: {
        height: 70,
        width: '100%',
        backgroundColor: colors.HEADER_COLOR,
        position: 'absolute',
        top: 0
    },

    /**Upper View */
    upper_view: {
        //backgroundColor: 'red',
        flex: 3.5,
        width: '100%',
        marginTop: 4,
        marginBottom: 2,
    },
    switch: {
        flex: 0.5,
        //backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pie_chart: {
        //backgroundColor: 'red',
        flex: 3,
    },


    /**Middle View */
    middle_view: {
        //backgroundColor: 'green',
        flex: 3,
        flexDirection: 'row',
        width: '100%',
        marginTop: 4,
        marginBottom: 4
    },
    icon_view: {
        flex:1,
        flexDirection: 'column',
    },
    button_view: { 
        flex:1,
        marginLeft: 2,
        marginRight: 2,
        height: 100
    },


     /**Lower View */
    lower_view: {
        // backgroundColor: 'yellow',
        flex: 3.5,
        width: '100%',
        marginBottom: 4,
        marginTop: 4,
    },
    summary_switch: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    summary_view: {
        flex: 3,
        // backgroundColor: 'green'
    },
    
    pagination: {
        position: 'absolute',
        bottom: 0
    },
    dot: {
        backgroundColor:'rgba(0,0,0,.2)',
        width: 15,
        height: 2,
        //borderRadius: 3,
        margin: 2
    },
    activedot: {
        backgroundColor:'#007aff',
        width: 15,
        height: 2,
        //borderRadius: 3,
        margin: 2
    },
})