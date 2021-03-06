import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../../styles';

export default EStyleSheet.create({
    header: {
        backgroundColor:  colors.HEADER_COLOR
    },
    title: {
        fontSize: '1.1rem',
        color: '#fff',
        fontWeight: '500'
    },
    container:{
        flex: 1,
        backgroundColor: '#efefef'
    },
    view: {
        backgroundColor: '#fff',
        padding: 8
    },
    sub_view: {
        flexDirection: 'row',
    },
    left_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    key_text: {
        fontSize: '1rem',
        color: '#000',
        padding: 4
    },
    middle_view: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colon: {
        color: 'gray',
        padding: 4
    },
    right_view: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    job_type: {
        width: 80,
        height: 23,
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    job_type_text: {
        color: 'gray',
        fontSize: '0.8rem'
    },
    value_text: {
        fontSize: '0.8rem',
        color: 'gray',
        padding: 4
    },
    status_view: {
        width: 90,
        height: 23,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5cb85c'
    },
    status_text: {
        color: '#fff',
        fontSize: '0.8rem'
    },
    view1: {
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 8
    },
    button_view: {
        flex: 1,
        backgroundColor: 'red'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9534f'
    }
})