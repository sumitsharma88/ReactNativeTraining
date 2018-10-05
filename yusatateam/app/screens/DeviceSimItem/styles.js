import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    '$fontFamily' : 'normal',
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
        height: '36%',
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
  
    lower_view: {
        marginTop: 5,
        marginBottom: 5,
        flex: 2,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        //backgroundColor: 'green'
    },
    button_view: {
        justifyContent: 'center'
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
    picker_view: {
        
      
        borderRadius: 20,
        margin: 5,
    },
    picker: {
        height: '100%',
        width: '100%'
    }
})
