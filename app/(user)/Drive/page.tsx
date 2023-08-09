import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../../components/PreviewSuspense";
import DriveList from "../../../components/DriveList";
import PreviewBlogList from "../../../components/PreviewBlogList";

const query = groq`
	*[_type == "post"] {
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`;

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Drive() {
  
  // <About />
  if (previewData()) {
    return (
     
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
      
    );
  }

  const posts = await client.fetch(query);
// DRIVE
  return <DriveList posts={posts} />;
  
  

 
}
