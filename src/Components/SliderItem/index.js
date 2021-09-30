import React from 'react';

import {
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate
} from './styles';

import { Ionicons } from '@expo/vector-icons';

function SliderItem(){
    return(
        <Container activeOpacity={0.7}>
          <BannerItem
            source={{ uri:'https://images.unsplash.com/photo-1602461601079-fb03b7b35e61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}}
            />  

            <Title numberOfLines={1}>Vingadores Vingadores Vingadores Vingadores</Title>
            
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e" />
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;