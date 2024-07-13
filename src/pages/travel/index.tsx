import React from 'react';
import { getSortedTravelsData } from '@/lib/travels';
import TravelList from "@/components/Travel/TravelList";
import SEO from "@/components/SEO";
import { Travel } from "@/types/travel";

export async function getStaticProps() {
  const allTravelData = getSortedTravelsData();
  return {
    props: {
      allTravelData,
    },
  };
}

type TravelHomeProps = {
  allTravelData: Travel[]
}

const TravelHome = ({ allTravelData }: TravelHomeProps) => {
  console.log(allTravelData);
  const completedTrips = allTravelData.filter(trip => trip.status === 'done');
  const plannedTrips = allTravelData.filter(trip => trip.status === 'Planning');

  return (
    <>
      <SEO title="Travelogue" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">My Travelogue</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Planned Trips</h2>
          <TravelList travels={plannedTrips} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Completed Trips</h2>
          <TravelList travels={completedTrips} />
        </section>
      </div>
    </>
  )
};

export default TravelHome;
