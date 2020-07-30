import { FunctionalComponent, h } from "preact";
import { Button, Card, Flex, Image, Heading, Text } from "rebass";
import { route } from "preact-router";

const Result: FunctionalComponent = () => {
    return (
        <Flex
            height="100%"
            alignItems="center"
            justifyContent="center"
            bg="primary"
        >
            <Flex bg="white" p={2} sx={{ borderRadius: 4, boxShadow: "small" }}>
                <Card width={[256, 320]} mx="auto">
                    <Image src="https://source.unsplash.com/random/512x384?space" />
                    <Text fontFamily="heading">Amsterdam</Text>
                </Card>
            </Flex>
        </Flex>
    );
};

export default Result;
