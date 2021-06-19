import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CenterView } from '~/components/UI/View';
import { Space } from '~/components/UI';
import Image from '.';

storiesOf('Image', module)
  .addDecorator((getStory) => <CenterView style={{ backgroundColor: '#FFF' }}>{getStory()}</CenterView>)
  .add('Default', () => (
    <>
      <Image size={150} square />
      <Space size={10} />
      <Image round size={150} circle />
      <Space size={10} />
      <Image round size={150} around />
    </>
  ));
