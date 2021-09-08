import { Avatar, Button, Center, Flex, Heading, HStack, IconButton, Link, VStack } from "@chakra-ui/react";

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Hero } from "../components/Hero";
import { Projetos } from "../components/Projetos";
import Slider from '../components/Slider';




export default function Home() {
  return (
    <Flex direction="column" maxW="1400px" margin="0 auto">
      <Hero />
      <Projetos />
      <Slider />
    </Flex>
  )
}
