import {Alert, Text, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {CustomView} from './CustomView';
import {Title} from './Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from './Button';
import {showPrompt} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum dolor sit amet',
      buttons: [
        {
          text: 'OK',
          onPress: () => console.log('OK'),
        },
      ],
      placeholder: 'Placeholder',
    });

    // prompt(
    //   'Enter password',
    //   'Enter your password to claim your $1.5B in lottery winnings',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: password => console.log('OK Pressed, password: ' + password),
    //     },
    //   ],
    //   {
    //     type: 'secure-text',
    //     cancelable: false,
    //     defaultValue: 'test',
    //     placeholder: 'placeholder',
    //   },
    // );

    // Alert.prompt(
    //   'Correo electronico',
    //   'Lorem ipsum dolor sit amet',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" />

      <Button text="Alerta - 2 botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Propmt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
