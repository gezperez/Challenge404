import { useEffect } from 'react';
import { View } from 'react-native';

import { DSText } from '@/ds';
import { useRepository } from '@/hooks';

const HomeScreen = () => {
  const { getRepositories, repositories } = useRepository();

  console.log('aca', repositories.length);

  useEffect(() => {
    getRepositories('Challenge404', 20);
  }, []);

  return (
    <View>
      <DSText>Title</DSText>
    </View>
  );
};

export default HomeScreen;
