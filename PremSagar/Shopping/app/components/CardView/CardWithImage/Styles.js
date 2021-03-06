import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    card:{
        width: '95%'
    },
    cardItem: {
        flexDirection: 'row',
        flex: 1
    },
    headingView: {
        flex: 0.9
    },
    subHeadingView: {
        flex: 0.2,
        justifyContent: 'flex-end'
    },
    heading: {
        fontSize: '$fontSize',
        color: '#000'
    },
    subHeading: {
        fontSize: '$fontSize',
        color: '$primaryColor'
    },
    seperator: {
        height: 0.8,
        backgroundColor: 'gray',
        width: '100%'
    },
    productView: {
        flexDirection: 'column',
        width : 180
    },
    imageView: {
        borderWidth: 0.8,
        borderColor: 'gray',
        width: '98%',
        height: 220
    },
    productNameView: {
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    productNameText: {
        color: '#000',
        fontSize: '0.7rem'
    },
    priceView: {
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    priceText: {
        color: '$primaryColor',
        fontSize: '0.7rem'
    },
    descriptionView: {
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    descriptionText: {
        color: '#000',
        fontSize: '0.7rem'
    }
})