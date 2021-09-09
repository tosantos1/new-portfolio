import { Flex, Heading, HStack, VStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react"

export function Projetos() {
  return (

    <Flex direction="column">
      <Flex justifyContent="space-between" align="center">
        <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="400px" h="400px" />
        <VStack w="800px">
          <HStack >
            <VStack p="8" align="flex-start">
              <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
              <Text fontSize="3xl">React</Text>
              <Text fontSize="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
            </VStack>
            <VStack p="8" align="flex-start">
              <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
              <Text fontSize="3xl">React</Text>
              <Text fontSize="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
            </VStack>
          </HStack>
          <HStack>
            <VStack p="8" align="flex-start">
              <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
              <Text fontSize="3xl">React</Text>
              <Text fontSize="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
            </VStack>
            <VStack p="8" align="flex-start">
              <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
              <Text fontSize="3xl">React</Text>
              <Text fontSize="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  )
}