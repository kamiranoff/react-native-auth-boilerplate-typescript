import React from 'react';
import colors from '../constants/colors';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SIGN_IN, SIGN_UP, TAuthForm } from './index';

export interface IAuthButtons {
  handlePress: (buttonType: TAuthForm) => void;
  activeForm: TAuthForm;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  menuBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    opacity: 0.5,
  },
  text: {
    color: colors.beach2,
    fontSize: 16,
  },
  activeMenuBtn: {
    opacity: 1,
  },
  activeText: {
    color: colors.beach1,
    fontWeight: 'bold',
  },
});

const AuthButtons = ({ handlePress, activeForm }: IAuthButtons) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback
      onPress={() => handlePress(SIGN_IN)}
    >
      <View
        style={[styles.menuBtn, activeForm === SIGN_IN ? styles.activeMenuBtn : null]}
      >
        <Text
          style={[styles.text, activeForm === SIGN_IN ? styles.activeText : null]}
        >
          SIGN IN
        </Text>
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
      onPress={() => handlePress(SIGN_UP)}
    >
      <View
        style={[styles.menuBtn, activeForm === SIGN_UP ? styles.activeMenuBtn : null]}
      >
        <Text
          style={[styles.text, activeForm === SIGN_UP ? styles.activeText : null]}
        >
          SIGN UP
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default AuthButtons;
