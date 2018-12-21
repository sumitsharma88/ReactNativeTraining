import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },

    picker : {
        width : '95%'
    },
    header_text: {

        color: 'white',
        fontSize: '1.1rem',
        fontWeight: 'bold',
       
    },
    View_Container:
    {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '35%',
        padding : 15,
        elevation: 10
    },
    Header_Style:
    {
        backgroundColor: '#0073b7'
    },
    Text_style: {
        fontSize: '1.2rem',
        color: '#fff',
        fontWeight: '500',
    },
    pickerView : {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
       marginTop : 10,
       marginBottom : 10
    }
})