import { Flex, Link } from "@chakra-ui/react";

export function Links () {
    return (
        <Flex as="header" p="4">
            <Link mr="8">Home</Link>
            <Link mr="8">Projetos</Link>
        </Flex>
    )
}