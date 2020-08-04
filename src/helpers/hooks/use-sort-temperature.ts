import { useState } from "preact/hooks";
import { Sort } from "../sort-cities-on-temperature";

let sortingMechanism: Sort = Sort.DESC;

const useSortTemperature = (): [Sort, (sort: Sort) => void] => {
    const [sortTemperature, setSortTemperature] = useState<Sort>(
        sortingMechanism
    );

    const setSort = (sort: Sort): void => {
        sortingMechanism = sort;
        setSortTemperature(sort);
    };

    return [sortTemperature, setSort];
};

export default useSortTemperature;
