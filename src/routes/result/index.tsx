import { FunctionalComponent, h } from "preact";
import { Flex, Text } from "rebass";
import { useEffect, useState } from "preact/hooks";
import { getApiKey } from "../../helpers/get-api-key";
import { sortCitiesOnTemperature } from "../../helpers/sort-cities-on-temperature";
import { CityCard } from "../../components/card";
import { useSortTemperature } from "../../helpers/hooks";

const MEASUREMENT_SYSTEM = "Metric";
const TEMPERATURE_UNIT = MEASUREMENT_SYSTEM === "Metric" ? "C" : "F";

export interface City {
    key: number;
    name: string;
    ticketPrice: number;
    imageSrc: string;
    temperature: {
        value: number | null;
        unit: string;
    };
}

const cities: Array<City> = [
    {
        key: 249758,
        name: "Amsterdam",
        ticketPrice: 100,
        imageSrc: "/assets/amsterdam.jpg",
        temperature: {
            value: null,
            unit: TEMPERATURE_UNIT
        }
    },
    {
        key: 308526,
        name: "Madrid",
        ticketPrice: 150,
        imageSrc: "/assets/madrid.jpg",
        temperature: {
            value: null,
            unit: TEMPERATURE_UNIT
        }
    },
    {
        key: 187423,
        name: "Budapest",
        ticketPrice: 200,
        imageSrc: "/assets/budapest.jpg",
        temperature: {
            value: null,
            unit: TEMPERATURE_UNIT
        }
    }
];

const Result: FunctionalComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sortedCities, setSortedCities] = useState<Array<City>>([]);
    const [sortTemperature, setSortTemperature] = useSortTemperature();

    const fetchAndSetLocationData = async (): Promise<void[]> => {
        const API_URL =
            "https://dataservice.accuweather.com/currentconditions/v1/";
        const API_KEY = getApiKey();

        return await Promise.all(
            cities.map(async city => {
                await fetch(`${API_URL}/${city.key}?apikey=${API_KEY}`)
                    .then(response => response.json())
                    .then(data => {
                        city.temperature.value =
                            data[0].Temperature[MEASUREMENT_SYSTEM].Value;
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            })
        );
    };

    useEffect(() => {
        setIsLoading(true);
        fetchAndSetLocationData().then(() => {
            const sortedResult = sortCitiesOnTemperature(
                cities,
                sortTemperature
            );
            setSortedCities(sortedResult);
            setIsLoading(false);
        });
    }, []);

    return (
        <Flex
            height="100%"
            alignItems="center"
            justifyContent="center"
            bg="primary"
        >
            {isLoading ? (
                <Text
                    fontSize={[4, 5, 6]}
                    fontWeight="bold"
                    color="darkgray"
                    fontFamily="heading"
                    mb={5}
                >
                    Loading...
                </Text>
            ) : (
                sortedCities.length > 0 && <CityCard city={sortedCities[0]} />
            )}
        </Flex>
    );
};

export default Result;
