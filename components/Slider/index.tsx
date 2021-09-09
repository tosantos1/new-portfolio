import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Projetos } from '../Projetos';
import { Flex } from "@chakra-ui/react";


export default function Slider() {
    return (
        <Flex w="100%" maxW="1400px" mx="auto">
            <Swiper
                slidesPerView={1}
                navigation

                autoplay ={{
                    delay: 4000,
                }}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >

                <SwiperSlide>
                   <Projetos />
                </SwiperSlide>
                <SwiperSlide>
                    <Projetos />
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}
