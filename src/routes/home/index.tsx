import { FunctionalComponent, h } from "preact";
import { Button, Box, Flex, Text } from "rebass";

const Home: FunctionalComponent = () => {
    return (
        <Flex flexWrap="wrap" height="100%">
            <Flex
                justifyContent="center"
                alignItems="center"
                px={2}
                py={2}
                width={1 / 2}
                height="100%"
                bg="blue"
            >
                <Button variant="primary" mr={2}>
                    I like it cold
                </Button>
            </Flex>
            <Flex
                justifyContent="center"
                alignItems="center"
                px={2}
                py={2}
                width={1 / 2}
                height="100%"
                bg="red"
            >
                <Button variant="secondary" mr={2}>
                    Give me sun
                </Button>
            </Flex>
        </Flex>
    );
};

export default Home;
