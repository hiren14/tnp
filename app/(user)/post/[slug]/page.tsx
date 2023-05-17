import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
		*[_type == "post"]
		{
			slug
		}
		`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
		*[_type == "post" && slug.current == $slug][0] {
			...,
			author->,
			categories[]->,
		}
	`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <a href="/" className="relative inline-block text-lg group mb-10 mt-10">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-white"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#222] dark:bg-[#8F00FF] group-hover:-rotate-180 ease"></span>
          <span className="relative">
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 inline-flex"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Go back
          </span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#222]  dark:bg-[#8F00FF] rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>

      <section className="scace-y-2 border border-[#8F00FF] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="p-5 bg-[#8F00FF] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-lg"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
  
      <div className="h-full mx-auto  text-white justify-items-center text-center">
      <div className="container my-24 px-6 py-6 mx-auto shadow-lg rounded-lg p-5 text-white">
              
<h1 className="text-3xl mt-10 mb-3">Company Name:{"  "}{post.companyname}</h1>
{/* <h2 className="text-xl font-light mb-2">
        {post.description}
        </h2> */}
        {/* job post  */}

        <div className="mt-10 ">
        <h2 className="text-3xl mt-10 mb-3 ">   Job Post : </h2>
        
        <PortableText value={post.job} components={RichTextComponents} />
     
       </div>
       <h4 className="text-l mt-10 mb-3">
 Package:  </h4>
 <p className="text-l  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  {post.package}</p>
      
  <h4 className="text-l mt-10 mb-3">
Vacancy:  </h4> <p className="text-l font-light text-gray-500 mb-2">
        {post.vac}
 </p>      
{/* job location */}

<h4 className="text-l mt-10 mb-3">
Job Location:</h4>   <p className="text-l font-light text-gray-500 mb-2">
      {post.loc}
 </p>       
{/* internship  */}
<div className="mt-10 ">
<h2 className="text-3xl mt-10 mb-3 "> Bond Details:  </h2>
        
        <PortableText value={post.inter} components={RichTextComponents} />
     </div>

{/* 
Qualification  */}

<h4 className="text-l  font-blod text-gray-500 mb-2">

Qualification  </h4>  <p className="text-ltext-l  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {post.quali}
 </p>       
 <br />
{/* 
Eligibility */}
<h4 className="text-l  font-light text-gray-500 mb-2">
Eligibility   </h4> <p className="text-l text-l  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  {post.elig}
        </p>
          {/* DATE OF INTERVIEW */}
          <br />

<p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  space-x-4">
DATE OF INTERVIEW
{
                    new Date(post.dinter).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }
                    )
                  }
  </p>

{/* last date of registration */}
<br />

<p className="font-extralight text-m  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2 space-x-4">
last date of registration
{
                    new Date(post.dlast).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }
                    )
                  }
  </p>
{/* last */}
<br />

{/* g forms  */}

      </div>
      </div>

    </article>
  );
}

export default Post;
