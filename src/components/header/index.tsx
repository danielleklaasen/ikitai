import { FunctionalComponent, h } from "preact";
import { Flex, Image, Link, Text } from "rebass";

const Header: FunctionalComponent = () => {
    return (
        <Flex
            py={3}
            color="black"
            bg="lightgray"
            alignItems="center"
            sx={{
                position: "fixed",
                width: "100%"
            }}
        >
            <Link
                pl={4}
                pr={3}
                fontWeight="bold"
                variant="secondary"
                color="black"
                fontFamily="heading"
                fontSize={3}
                sx={{
                    textTransform: "uppercase",
                    borderRight: "1px solid black",
                    textDecoration: "none"
                }}
                href="/"
            >
                <Image
                    src="/assets/icons/globe.svg"
                    mr={2}
                    sx={{ height: "16px" }}
                />
                Ikitai
            </Link>
            <Text pl={3} pr={4} fontSize={3} fontFamily="heading">
                Find your next destination
            </Text>
        </Flex>
    );
};

export default Header;
