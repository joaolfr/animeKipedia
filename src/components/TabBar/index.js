import React from 'react';
import {
  Wrapper,

  Container,

  RouteButton,

} from './styles';
import {View} from 'react-native'
import {Person, Grid, Heart} from 'src/assets/icons/tab'

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <Wrapper>
   
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
              isFocused={isFocused}
              label={label}
              key={index}
              onPress={onPress}
              activeOpacity={1}
              >
                

                {label === 'Home' &&  <Grid height={24} width={24} fill={isFocused ? 'white' : 'transparent'} /> } 
                {label === 'Favorites' &&   <Heart height={24} width={24} fill={isFocused ? 'white' : 'transparent'} /> } 
                {label === 'Profile' &&   <Person height={24} width={24} fill={isFocused ? 'white' : 'transparent'}/> } 
               
                
              </RouteButton>
            
            );
          
        })}
      </Container>
    </Wrapper>
  );
};

export default TabBar;
