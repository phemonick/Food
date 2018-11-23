import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles =  {
    flex: {
        display: 'flex'
    },
    flexrow: {
        display: 'flex',
        flexDirection: 'row'
    },
    spacBetween: {
        justifyContent: 'space-between'
    },
    defaultPadding: {
        padding: 8
    },
    timeMetric: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 10,
    },
    foodsy: {
        color: '#000000',
        fontSize: 26,
        fontWeight: 'bold'
    },
    white: {
        color: '#fff'
    },
    defaultTextColor: {
        color: '#338dff'
    },
    leftSpace: {
        paddingLeft: 5,
    },
    timeSpace: {
        paddingLeft: 10,
    },
    alignCenter: {
        alignItems: 'center'
    },
    cuisine: {
        color: '#6f6db9',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20,
    },

}
