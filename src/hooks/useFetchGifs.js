import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, numb) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category, numb).then((image) => {
            setState({
                data: image,
                loading: false,
            });
        });
    }, [category, numb]);

    return state;
};
