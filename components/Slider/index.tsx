import { Box, Flex, Heading, HStack, Image } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Projetos } from '../Projetos';

SwiperCore.use([Navigation, Pagination, A11y]);

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