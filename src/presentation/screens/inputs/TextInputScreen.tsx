import {Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../theme/theme';
import {useState} from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
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
  );
};
