import { FunctionalComponent, h } from "preact";
import { Button, Flex, Image } from "rebass";
import { route } from "preact-router";

const Home: FunctionalComponent = () => {
    return (
        <Flex height="100%">
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                px={2}
                py={2}
                width={1 / 2}
                height="100%"
                bg="primary"
            >
                <Image src="/assets/icons/cloud-snow.svg" mb={4} />
                <Button
                    variant="outline"
                    onClick={() => route("/flights")}
                    sx={{
                        cursor: "pointer"
                    }}
                    px={4}
                    py={3}
                >
                    I like the cold
                </Button>
            </Flex>
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                px={2}
                py={2}
                width={1 / 2}
                height="100%"
                bg="secondary"
            >
                <Image src="/assets/icons/sun.svg" mb={4} />
                <Button
                    variant="outline"
                    onClick={() => route("/flights")}
                    sx={{
                        cursor: "pointer"
                    }}
                    px={4}
                    py={3}
                >
                    Give me sun
                </Button>
            </Flex>
        </Flex>
    );
};

export default Home;
