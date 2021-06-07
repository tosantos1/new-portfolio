import { Badge, Box, Flex, Heading, VStack, IconButton, Image, Link, Tab, TabList, TabPanel, TabPanels, Tabs, HStack } from "@chakra-ui/react";
import { FiGithub, FiLink } from 'react-icons/fi'

export default function projetos() {

    return (
        <Flex direction="column" maxW="1200px" margin="0 auto">
            <Tabs isFitted variant="unstyled" mt={20} >
                <TabList mb="1em">
                    <Tab _selected={{ borderBottom: "2px", borderBottonColor: "red.500" }}>Iniciante</Tab>
                    <Tab _selected={{ borderBottom: "2px", borderBottonColor: "white" }}>Intermediário</Tab>
                    <Tab _selected={{ borderBottom: "2px", borderBottonColor: "white" }}>Avançado</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <HStack>
                            <Box maxW="sm" borderWidth="1px" borderRadius="16px" overflow="hidden" mr="8">
                                <Image src="image/web1.png" w="100%" />
                                <Box p="6">
                                    <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="green" mr="2">HTML</Badge>
                                    <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="purple" mr="2">CSS</Badge>
                                    <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="yellow" mr="2">JS</Badge>
                                </Box>
                                <Box px="6" py="6">
                                    <VStack align="right">
                                        <Heading>Projeto AeroApp</Heading>
                                        <HStack py="2" >
                                            <Link href="https://github.com/tosantos1" >
                                                <IconButton
                                                    bg="black"
                                                    aria-label="Github"
                                                    _hover={{ opacity: 0.8 }}
                                                    icon={<FiGithub />}
                                                />
                                            </Link>
                                            <Link href="https://github.com/tosantos1" >
                                                <IconButton
                                                    bgGradient="linear(225deg, #6F57F9 21.39%, #342680 100%)"
                                                    aria-label="Link"
                                                    _hover={{ opacity: 0.8 }}
                                                    icon={<FiLink />}
                                                />
                                            </Link>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </Box>

                            <Box maxW="sm" borderWidth="1px" borderRadius="16px" overflow="hidden">
                                <Image src="image/web1.png" w="100%" />
                                <Box p="6">
                                    <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="green" mr="2">HTML</Badge>
                                    <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="purple" mr="2">CSS</Badge>
                                    <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="yellow" mr="2">JS</Badge>
                                </Box>
                                <Box px="6" py="6">
                                    <VStack align="right">
                                        <Heading>Projeto AeroApp</Heading>
                                        <HStack py="2" >
                                            <Link href="https://github.com/tosantos1" >
                                                <IconButton
                                                    bg="black"
                                                    aria-label="Github"
                                                    _hover={{ opacity: 0.8 }}
                                                    icon={<FiGithub />}
                                                />
                                            </Link>
                                            <Link href="https://github.com/tosantos1" >
                                                <IconButton
                                                    bgGradient="linear(225deg, #6F57F9 21.39%, #342680 100%)"
                                                    aria-label="Link"
                                                    _hover={{ opacity: 0.8 }}
                                                    icon={<FiLink />}
                                                />
                                            </Link>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </Box>
                            
                        </HStack>

                    </TabPanel>


                    <TabPanel>
                        <Box maxW="sm" borderWidth="1px" borderRadius="16px" overflow="hidden">
                            <Image src="image/web1.png" w="100%" />
                            <Box p="6">
                                <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="green" mr="2">HTML</Badge>
                                <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="purple" mr="2">CSS</Badge>
                                <Badge variant="subtle" fontSize="1em" borderRadius="full" px="2" colorScheme="yellow" mr="2">JS</Badge>
                            </Box>
                            <Box px="6" py="6">
                                <VStack align="right">
                                    <Heading>Projeto AeroApp</Heading>
                                    <HStack py="2" >
                                        <Link href="https://github.com/tosantos1" >
                                            <IconButton
                                                bg="black"
                                                aria-label="Github"
                                                _hover={{ opacity: 0.8 }}
                                                icon={<FiGithub />}
                                            />
                                        </Link>
                                        <Link href="https://github.com/tosantos1" >
                                            <IconButton
                                                bgGradient="linear(225deg, #6F57F9 21.39%, #342680 100%)"
                                                aria-label="Link"
                                                _hover={{ opacity: 0.8 }}
                                                icon={<FiLink />}
                                            />
                                        </Link>
                                    </HStack>
                                </VStack>
                            </Box>
                        </Box>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Flex>
    )
}