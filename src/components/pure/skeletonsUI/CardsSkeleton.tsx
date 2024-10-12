import React from "react";
import CardTile from "@/components/pure/cards/Tile/CardTile.tsx";

export default function CardsSkeleton({count}: {count: number}):React.JSX.Element[]{
    const skeletons: React.JSX.Element[] | undefined = [];
    for(let i = 0; i < count; i++){
        skeletons.push(<CardTile key={i} onClick={() => {}} title={""} commentsCounter={0} />)
    }
    return skeletons;
}