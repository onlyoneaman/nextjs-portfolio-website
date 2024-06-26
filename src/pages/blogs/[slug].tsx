import { getPostData, getSortedPostsData } from '@/lib/blogs';
import {useRouter} from "next/router";
import BlogPostList from "@/components/BlogPostList";

const BlogPost = ({ post }) => (
  <div className="max-w-2xl mx-auto mt-8">
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <p className="text-gray-500 mb-4">{post.date}</p>
    <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

const BlogPage = ({ posts, post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (post) {
    return <BlogPost post={post} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <BlogPostList posts={posts} />
    </div>
  );
};

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);
  return { props: { post } };
}

export default BlogPage;
