import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import defaultImage from '../../../images/nyk.jpg';
import Carousel from 'react-native-snap-carousel';

export default class RestaurantCard extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={[styles.slide]}>
                <View style={[styles.spaceBetween, styles.defaultPadding, styles.topPadding, styles.header]}>
                    <Text style={[styles.whiteText]}>{item.title}</Text>
                    <View style={styles.thumb}>
                        <Icon name='thumb-tack' size={15} color='#2f8bff' />
                    </View>
                </View>
                <View style={[styles.defaultPadding, styles.topPadding, styles.resMetrics, styles.spaceBetween]}>
                    <View style={[styles.resInfo]}>
                        <MaterialIcons name='directions-walk' size={20} color='#2f8bff' />
                        <Text style={[styles.spaceText, styles.resInfoText]}>6min</Text>
                    </View>
                    <View style={[styles.resInfo]}>
                        <Icon name='dollar' size={20} color='#2f8bff' />
                        <Text style={[styles.spaceText, styles.resInfoText]}>10-15</Text>
                    </View>
                    <View style={[styles.resInfo]}>
                        <MaterialIcons name='star' size={20} color='#2f8bff' />
                        <Text style={[styles.spaceText, styles.resInfoText]}>3.5<Text style={{fontSize: 7}}>/5</Text></Text>
                    </View>
                    <View style={[styles.resInfo]}>
                        <Icon name='heart' size={20} color='#2f8bff' />
                        <Text style={[styles.spaceText, styles.resInfoText]}>23</Text>
                    </View>       
                </View>
                <ImageBackground
                    source={ item.images !==null ? { uri: item.images[0] } : defaultImage}
                    style={styles.background}
                    >
                    <View>
                        <TouchableOpacity style={[styles.location]}>
                            <MaterialIcons name='location-on' size={20} color='#fff' />
                            <Text style={styles.whiteText}>{item.address}</Text>
                        </TouchableOpacity>
                            <Text style={styles.whiteText}>Closes at 10:00pm</Text>
                    </View>

                    <View>
                        <View style={[styles.location, styles.bottomMargin]}>
                            <Icon name='circle' size={12} color='#fff' />
                            <Text style={[styles.whiteText, styles.leftSpacing]}>Not Busy</Text>
                        </View>
                        <View style={[styles.location]}>
                            <Icon name='star' size={12} color='#fff' />
                            <Text style={[styles.whiteText, styles.leftSpacing]}>{item.description}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={[styles.spaceBetween, styles.defaultPadding, styles.topPadding, styles.resMetrics, styles.footer]}>
                    <Text style={{color: '#2f8bff'}}>Call</Text>
                    <Text style={{color: '#2f8bff'}}>0.6 miles away</Text>
                    <Text style={{color: '#2f8bff'}}>Reserve</Text>
                </View>
                       
            </View>
        );
    }

render() {
    return (
        <Carousel
            ref={(c) => { this._carousel = c }}
            data={this.props.restaurants}
            layout={'default'}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    );
    }
}

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: 600,
        flexGrow: 0,
        borderRadius: 10,
        // other styles for the item container
    },
    defaultPadding: {
        paddingRight: 8,
        paddingLeft: 8,
    },
    leftSpacing: {
        paddingLeft: 5
    },
    header: {
        backgroundColor: '#2f8bff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    topPadding: {
        paddingBottom: 12,
        paddingTop: 12,
    },
    resMetrics: {
        backgroundColor: '#ffffff',
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
        // other styles for the inner container
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },
    whiteText: {
        color: '#fff'
    },
    thumb: {
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        borderRadius: 25/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceText: {
        marginLeft: 5,
    },
    resInfoText: {
        fontSize: 14,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomMargin: {
        marginBottom: 5
    },
    background: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode: 'center',
        height: '100%',
        padding: 15,
        justifyContent: 'space-between',
    },
  });
  

