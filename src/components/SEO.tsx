import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  twitterCard?: string;
}

const SEO: React.FC<SEOProps> = (
  {
    title,
    description = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
    keywords = "Aman Kumar, AI Engineer, Problem Solver, FullStack Dev",
    author = "Aman Kumar",
    twitterCard = "summary_large_image",
  }
) => {

  if(!title) {
    title = "Aman's Mind Map | AI Engineer & Full Stack Developer"
  } else {
    title = `${title} | Aman's Mind Map`
  }

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description}/>}
      {keywords && <meta name="keywords" content={keywords}/>}
      {author && <meta name="author" content={author}/>}
      <link rel="icon" href="/images/user.jpg"/>
      <meta name="twitter:card" content={twitterCard}/>
    </Head>
  );
};

export default SEO;
