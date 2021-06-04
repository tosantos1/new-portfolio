import { Avatar, Button, Center, Flex, Heading, HStack, IconButton, VStack } from "@chakra-ui/react";

import { FiGithub, FiLinkedin } from 'react-icons/fi'

import Slider from '../components/Slider'


export default function Home() {
  return (
    <Flex direction="column" maxW="1200px" margin="0 auto">
      <Center>
        <VStack mt={4}>
          <Heading size="lg" p={2}>Bem vindos 👊</Heading>
          <Heading size="xl" textAlign="center" maxW="650px">Sou estudante de engenharia da computação, tenho pratica em Front End e atualmente estudando Back End.</Heading>
          <HStack p={8}>
            <Avatar boxSize="125px" mr={4} name="Tiago Oliveira" src="https://github.com/tosantos1.png" />
            <VStack align="flex-start">
              <p>Tiago Oliveira</p>
              <p>tiagolivesan@outlook.com</p>
              <HStack>
            <IconButton
              bg="#333"
              aria-label="Github"
              _hover={{opacity: 0.8}}
              icon={<FiGithub />}
            />
            <IconButton
              colorScheme="linkedin"
              aria-label="Linkedin"
              _hover={{opacity: 0.8}}
              icon={<FiLinkedin />}
            />
          </HStack>
            </VStack>
          </HStack>
          
        </VStack>
        
      </Center>
      <Slider />
    </Flex>
  )
}
