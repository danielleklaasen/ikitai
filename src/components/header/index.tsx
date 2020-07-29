import { FunctionalComponent, h } from "preact";
import { Flex, Text } from "rebass";

const Header: FunctionalComponent = () => {
    return (
        <Flex
            py={3}
            color="white"
            bg="black"
            alignItems="center"
            style={{ position: "fixed", width: "100%" }}
        >
            <Text
                px={4}
                py={1}
                fontWeight="bold"
                style={{
                    textTransform: "uppercase",
                    borderRight: "1px solid white"
                }}
            >
                Ikitai
            </Text>
            <Text py={1} px={4}>
                Find your next destination
            </Text>
        </Flex>
    );
};

export default Header;
