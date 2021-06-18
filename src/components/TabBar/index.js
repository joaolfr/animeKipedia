import React from 'react';
import {
  Wrapper,
  MovieIcon,
  Container,
  HomeIcon,
  FavoriteIcon,
  RouteButton,
  Esphere
} from './styles';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <Wrapper>
      {/* <MovieIcon /> */}
      <Esphere source={require('../../assets/images/esphere.png')} />
      <Container>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <RouteButton
              key={index}
              onPress={onPress}
              style={{flex: 1, alignItems: 'center'}}>
              {label === 'Home' ? (
                <HomeIcon isFocused={isFocused} />
              ) : (
                <FavoriteIcon isFocused={isFocused} />
              )}
            </RouteButton>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default TabBar;
