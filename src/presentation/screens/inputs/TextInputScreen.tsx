import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../theme/theme';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  //  al trabajar con inputs se recomienda envolver todo el componente en un scroll view de esta manera el teclado tendra un buen funcionamiento desplazando en contenido hacia arriba cuando aparezca
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView>
          <Title text="Text inputs" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Correo Electronico"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
        </CustomView>

        <View style={{height: 50}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
