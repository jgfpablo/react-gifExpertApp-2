import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category, numb }) => {
    const { data: images, loading } = useFetchGifs(category, numb);

    return (
        <>
            <h3 className="List-title">{category}</h3>
            <div className="DivGrid">
                {loading && <p>Cargando...</p>}
                {images?.map((img) => {
                    return <GifGridItem key={img.id} {...img} />;
                })}
            </div>
            <hr />
        </>
    );
};
