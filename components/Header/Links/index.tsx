import { Flex, Link } from "@chakra-ui/react";

export function Links () {
    return (
        <Flex as="header" p="4">
            <Link mr="8">Home</Link>
            <Link mr="8">Projetos</Link>
            <Link mr="8">Aulas</Link>
            <Link mr="8">Contato</Link>
        </Flex>
    )
}