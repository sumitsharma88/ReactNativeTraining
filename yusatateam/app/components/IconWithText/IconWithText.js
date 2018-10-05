import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Icon, Badge } from 'native-base';
import styles from './Styles';

export default class IconWithText extends React.Component {
    render() {
        return (
            <View style={[styles.mainContainer, { backgroundColor: this.props.backgroundColor }]}>
                <View style={styles.iconContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name={this.props.name}
                            type={this.props.type}
                            style={styles.icon}>
                        </Icon>
                        <Badge 
                            style={styles.badgetext}>
                            <Text style={{color:'#fff'}}>
                                {this.props.badgeText}
                            </Text>
                        </Badge>
                    </View>

                    <Text style={styles.firstTextContainer}>
                        {this.props.text}
                    </Text>
                </View>
            </View>
        )
    }
}

export { IconWithText }