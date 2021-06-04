import { Flex, Spacer } from "@chakra-ui/react";
import { Links } from "./Links";
import { Logo } from "./logo";

export function Header () {
    return (
        <Flex w="100%" bg="gray.800" p="4" borderBottom="1px" borderBottonColor="#FAF5FF">
            <Logo />
            <Spacer />
            <Links />
        </Flex>
    )
}