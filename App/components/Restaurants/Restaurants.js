import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Query } from 'react-apollo';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import { styles } from './RestaurantStyles';
import RestaurantCard from './RestaurantCard';

export default class Restaurants extends Component {
  
  render() {
    // TODO: This shouldn't be hard coded.  Allow the user to enter it into a Text Input
    const address = '1260 6th Ave, New York, NY 10020';

    return (
      <View style={{marginTop: 50}}>
        <Query
          query={RESTAURANT_SEARCH_QUERY}
          variables={{
            address
          }}
        >
          {({ loading, error, data = {} }) => {
            if (loading) {
              return (
                <View style={{ width: '100%', paddingVertical: 10 }}>
                  <ActivityIndicator size="large" style={{ padding: 30 }} />
                </View>
              );
            }

            // Make sure we have data
            if (data.search_restaurants && data.search_restaurants.results && data.search_restaurants.results.length > 0) {
              return (
                <View>
                  <View style={[styles.flexrow, styles.spacBetween, styles.defaultPadding]}>
                    <Text style={styles.foodsy}>Foodsy</Text>
                    <Icon name='search' size={24} color='#150f64' />
                  </View>
                  <View style={[styles.flexrow, styles.spacBetween, styles.timeMetric]}>
                    <View style={[styles.flexrow, styles.alignCenter]}>
                      <Icon name='calendar' size={24} color='#150f64' />
                      <Text style={[styles.defaultTextColor, styles.leftSpace]}>Tomorrow</Text>
                    </View>
                    <View style={[styles.flexrow]}>
                      <View style={[styles.flexrow, styles.alignCenter]}>
                        <Icon name='users' size={24} color='#150f64' />
                        <Text style={[styles.defaultTextColor, styles.leftSpace]}>5</Text>
                      </View>
                      <View style={[styles.flexrow, styles.leftSpace, styles.alignCenter]}>
                        <Icon name='clock-o' size={24} color='#150f64' />
                        <Text style={[styles.defaultTextColor, styles.leftSpace]}>7pm</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ width: '100%' }}>
                      <RestaurantCard navigation={this.props.navigation} restaurants={data.search_restaurants.results}/>
                      <Text style={[styles.cuisine, styles.topPadding]}>Casual Dining American Cuisine</Text>
                </View>

                </View>
              );
            }
            // No Data Return
            return (
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text>No Results</Text>
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}
