import Head from "next/head"

const url = "/"
const title = "Next.js Starters"
const description = "Getting your next project up and running with these project starters by John Polacek for Next.js, the React Framework for Production."
const twitter = "@johnpolacek"
const imageUrl = "https://nextjs-project-starters.vercel.app/screenshot.png"
const imageAlt = "Next.js Starters"

const DocHead = () => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    </Head>
  </>
)

export default DocHead
