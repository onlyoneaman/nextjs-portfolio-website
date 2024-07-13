import React from 'react';
import Link from 'next/link';
import { Travel } from '@/types/travel.ts';

type TravelCardProps = {
  item: Travel;
};

const TravelCard: React.FC<TravelCardProps> = ({ item }) => {
  return (
    <Link href={`/travelogue/${item.slug}`}>
      <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {item.image && (
          <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
          <p className="text-zinc-400 mb-2">{item.description}</p>
          <p className="text-zinc-500 text-sm">{item.date}</p>
          <div className="mt-2">
            {item.status === 'Planning' ? (
              <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">Planning</span>
            ) : (
              <span className="bg-green-900 text-white text-xs px-2 py-1 rounded">Completed</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TravelCard;
