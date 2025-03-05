import React from 'react';
import Link from 'next/link';
import {Card, CardHeader} from '@/components/ui/card';
import {Blog} from "@/types/blog.ts";
import moment from "moment";
import { motion } from "framer-motion";

type BlogCardProps = {
  post: Blog
}

const BlogCard = ({post}: BlogCardProps) => {
  const {
    date,
    title,
    description,
    image,
    cardImage,
    type,
    slug,
    highlight
  } = post;

  return (
    <Link href={`/blogs/${slug}`}>
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card
          className='bg-neutral-200 dark:bg-slate border-none text-gray-800 dark:text-white hover:border-zinc-800 min-w-full h-full'
        >
          <CardHeader
            className="flex flex-col p-2 gap-2"
          >
            {(cardImage || image) ? (
              <img
                className="rounded-md object-cover h-24 sm:h-36 md:h-48"
                src={cardImage || image || ""}
                alt={title}
              />
            ) : (
              <div className="min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md"></div>
            )}
            <div
              className="flex flex-col gap-1"
            >
              <h2 className="text-primary dark:text-white font-semibold line-clamp-1">
                {title}
              </h2>
              <h3 className="text-gray-800 dark:text-zinc-400 text-sm line-clamp-1">
                {highlight}
              </h3>
              <h4 className="text-xs line-clamp-2">
                {description}
              </h4>

              <div
                className="flex gap-2 items-center justify-between text-xs text-zinc-700 dark:text-zinc-400"
              >
                <span>
                  {moment(date).format("MMM DD, YYYY")}
                </span>
                <span
                  className="bg-zinc-800 text-white rounded-md px-2 py-1"
                >
                {type}
              </span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  )
};

export default BlogCard;
