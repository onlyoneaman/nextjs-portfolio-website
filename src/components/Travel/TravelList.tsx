import React from 'react';
import TravelCard from "./TravelCard";
import { Travel } from "@/types/travel";

type TravelListProps = {
  travels: Travel[]
}

const TravelList = ({ travels }: TravelListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {travels.map((travel: Travel) => (
      <TravelCard key={travel.slug} item={travel} />
    ))}
  </div>
);

export default TravelList;
