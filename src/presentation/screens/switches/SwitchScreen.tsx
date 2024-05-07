import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {Button} from '../../components/ui/Button';

export const SwitchScreen = () => {
  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <Button text="Click Me" onPress={() => {}} />
      </Card>
    </CustomView>
  );
};
