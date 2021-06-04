import { Box, Flex, Heading, HStack, Image } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
    return (
        <Flex w="100%" maxW="1200px" mx="auto">
            <Swiper
                slidesPerView={1}
                navigation
                
                autoplay
                =
                {{
                    delay:
                        4000,
                }}
                style={{ 
                    width: '100%', 
                    height: '100%'
                }}
            >
                <SwiperSlide>
                    <HStack p={4} justify="center">
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/js.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>JavaScript</Heading>
                        </Box>
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/ts.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>TypeScript</Heading>
                        </Box>
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/next.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>Next.js</Heading>
                        </Box>
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/react.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>React.js</Heading>
                        </Box>
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/sass.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>Sass</Heading>
                        </Box>
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/figma.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>Figma</Heading>
                        </Box>
                    </HStack>
                </SwiperSlide>
                <SwiperSlide>
                    <HStack mx="auto" p={4} ml={12}>
                        <Box w="170px" maxH="205px" bg="#FAF5FF" borderRadius={12}>
                            <Image src="image/js.png" mx="auto" p={4} />
                            <Heading color="black" size="sm" textAlign="center" p={8}>JavaScript</Heading>
                        </Box>
                        
                    </HStack>
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}