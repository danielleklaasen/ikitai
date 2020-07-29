import { FunctionalComponent, h } from "preact";
import { Flex, Text } from "rebass";

const Header: FunctionalComponent = () => {
    return (
        <Flex px={2} color="white" bg="black" alignItems="center">
            <Text p={2} fontWeight="bold">
                Ikitai
            </Text>
            <Text p={2} fontWeight="bold">
                Find your next destination
            </Text>
        </Flex>
    );
};

export default Header;
