import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getSortedTravelsData, getTravelData } from '@/lib/travels';
import TravelCard from "@/components/Travel/TravelCard.tsx"
import SEO from "@/components/SEO";
import { Travel } from "@/types/travel.ts";

type TravelPostProps = {
  travel: Travel
}

const TravelPost = ({ travel }: TravelPostProps) => {
  return (
    <div className="mx-auto mt-4 space-y-3">
      <h1 className="text-3xl font-bold text-white">{travel.title}</h1>
      <h3 className="text-xl text-zinc-400">{travel.description}</h3>
      <p className="text-zinc-400 mb-4">{travel.date}</p>
      {travel.image && (
        <img
          src={travel.image}
          alt={travel.title}
          className="min-w-full h-96 object-cover rounded-md"
        />
      )}
      <div className="prose prose-invert prose-lg py-5">
        <ReactMarkdown>{travel.content}</ReactMarkdown>
      </div>
      {travel.status === 'Planning' && (
        <div className="bg-blue-900 text-white p-2 rounded">
          Planning in progress
        </div>
      )}
    </div>
  )
};

type TravelPostListProps = {
  travels: Travel[]
}

const TravelPostList = ({ travels }: TravelPostListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {travels.map((travel: Travel) => (
      <TravelCard key={travel.slug} item={travel} />
    ))}
  </div>
);

type TravelPageProps = {
  travels: Travel[]
  travel: Travel
}

const TravelPage = ({ travels, travel }: TravelPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <SEO title={travel ? travel.title : "Travelogue"} />
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Link
          className="hover:tracking-wide hover:underline transition-colors mb-4 inline-block"
          href="/travelogue"
        >
          ← All Travels
        </Link>
        {travel ? (
          <TravelPost travel={travel} />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-white mb-4">Travelogue</h1>
            <p className="text-zinc-400 mb-8">
              My travel experiences and upcoming plans
            </p>
            <TravelPostList travels={travels} />
          </>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const travels = getSortedTravelsData();
  const paths = travels.map((travel) => ({
    params: { slug: travel.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  if (params?.slug) {
    const travel = getTravelData(params.slug);
    return { props: { travel } };
  }

  const travels = getSortedTravelsData();
  return { props: { travels } };
}

export default TravelPage;
