import { City } from "../routes/result";

export enum Sort {
    ASC,
    DESC
}

const sortAscending = (a: City, b: City): number => {
    if (!a.temperature.value || !b.temperature.value) {
        return 0;
    }
    return a.temperature.value - b.temperature.value;
};

const sortDescending = (a: City, b: City): number => {
    if (!a.temperature.value || !b.temperature.value) {
        return 0;
    }
    return b.temperature.value - a.temperature.value;
};

export const sortCitiesOnTemperature = (
    cities: Array<City>,
    sort: Sort
): Array<City> => {
    if (sort === Sort.ASC) {
        cities.sort(sortAscending);
    }
    if (sort === Sort.DESC) {
        cities.sort(sortDescending);
    }
    return cities;
};
