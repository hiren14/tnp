import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import urlFor from '../../../lib/urlFor';


const query = groq`
		*[_type == "placed" && slug.current == $slug][0] {
			...,
			author->,
			categories[]->,
		}
	`;
    const post: Placed = await client.fetch(query, { slug });
    return (
      
            <div className="flex flex-wrap justify-center text-center mb-24">
            {/* <!-- Meet the Team --> */}
            {/* <div className="w-full lg:w-6/12 px-4"> */}
          
                        {/* <!-- Header --> */}
                        <h1 className="text-gray-900 text-4xl font-bold mb-8">
                        {placed.companyname}
                        </h1>
                        <hr className='dots' />
                        {/* <!-- Description -->
                        <p className="text-gray-700 text-lg font-light">
                            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                        </p> */}
                            <br />
            {placed.sdatas?.length ? (
          placed.sdatas?.map((sdata) => (
            
            <div className="container max-w-sm  bg-white rounded-lg overflow-hidden shadow-lg lg:my-10 xl:my-20 mx-4  mt-7 mb-6">
                {/* <!-- Section Header --> */}
                

                {/* <!-- Team Members --> */}
                <div className="flex flex-wrap justify-center text-center mb-2">
                    {/* <!-- Member #1 --> */}
                    <div className="w-full  mb-12 mt-9 px-12 sm:px-6 sm:mt-14  lg:px-8">
                           <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={urlFor(sdata.simg).url()!} />
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                   {sdata.name}
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    {sdata.position}
                                </div>
                                <div className="text-gray-700 font-light mb-2">
                                    {sdata.package}
                                </div>


                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href={sdata.linkedln} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className= "FaLinkedinIn stext-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                   </div>
                            
                                   
                                                                   </div>
                            </div>
                        </div>
                    </div>

                  
                   

                </div>
             ))
             ) : (
               <div>
                 <h1>data error</h1>
               </div>
             )}
        </div>
        
          );
        };
        export default Placed;