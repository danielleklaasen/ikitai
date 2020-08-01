import { FunctionalComponent, h } from "preact";
import { Card, Flex, Image, Text } from "rebass";
import { City } from "../../routes/result";

interface Props {
    city: City;
}

const CityCard: FunctionalComponent<Props> = (props: Props) => {
    const { imageSrc, name, ticketPrice, temperature } = props.city;

    return (
        <Flex bg="white" p={2} sx={{ borderRadius: 4, boxShadow: "small" }}>
            <Card width={[256, 320]} mx="auto">
                <Image src={imageSrc} />
                <Text
                    fontFamily="heading"
                    fontSize={[2, 3]}
                    my={2}
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                >
                    {name}
                </Text>
                <Flex justifyContent="space-between" mt={2}>
                    <Flex>
                        <Image src="/assets/icons/euro.svg" mr={2} />
                        <Text fontFamily="heading">{ticketPrice}</Text>
                    </Flex>
                    {temperature.value && (
                        <Flex>
                            <Image src="/assets/icons/thermometer.svg" mr={2} />
                            <Text fontFamily="heading">
                                {temperature.value} {temperature.unit}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Card>
        </Flex>
    );
};

export default CityCard;
