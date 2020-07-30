/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { FunctionalComponent, h } from "preact";
import { Button, Box, Flex, Text, Image } from "rebass";
import { route } from "preact-router";
import { useState } from "preact/hooks";

// @ts-ignore
import { Label, Slider } from "@rebass/forms";

const Flights: FunctionalComponent = () => {
    const [amount, setAmount] = useState<number>(200);

    const onSliderChange = (e: any) => {
        setAmount(e.target.value);
    };

    return (
        <Flex
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            px={4}
            bg="secondary"
        >
            <Box width={[1, 1 / 2, 1 / 3]} textAlign="center">
                <Text
                    fontSize={[4, 5, 6]}
                    fontWeight="bold"
                    color="darkgray"
                    fontFamily="heading"
                    mb={5}
                >
                    How much can you spend on a flight ticket?
                </Text>
                <Slider
                    id="money"
                    name="money"
                    defaultValue={amount}
                    mb={4}
                    bg="gray"
                    color="white"
                    onInput={onSliderChange}
                    min={0}
                    max={1000}
                    step={10}
                />
                <Label
                    htmlFor="money"
                    mb={6}
                    fontSize={[1, 2]}
                    justifyContent="center"
                    fontWeight="bold"
                    fontFamily="heading"
                    color="darkgray"
                >
                    {amount} euros
                </Label>
            </Box>
            <Button
                variant="primary"
                onClick={() => route("/result")}
                sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                }}
                px={4}
                py={3}
            >
                Let&apos;s go
                <Image src="/assets/icons/send.svg" ml={2} />
            </Button>
        </Flex>
    );
};

export default Flights;
