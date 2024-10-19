import { useEffect } from 'react';
import { View } from 'react-native';

import { useRepository } from '@/hooks';

const HomeScreen = () => {
  const { getRepositories, repositories } = useRepository();

  console.log('aca', repositories.length);

  useEffect(() => {
    getRepositories('react', 1);
  }, []);

  return <View />;
};

export default HomeScreen;
