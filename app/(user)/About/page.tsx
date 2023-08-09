// import { groq } from "next-sanity";
// import Image from "next/image";
// import { client } from "../../../lib/sanity.client";
// import urlFor from "../../../lib/urlFor";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "../../../components/RichTextComponents";
// import TeamCard from '../../../components/teams/TeamCard';
// import teamstyle from '../../../components/teams/Team.module.css';
import Team  from '../../../components/Team';

export default  function About() {

  return (
    <article className="px-10 pb-28  text-black dark:text-white">
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

 
 
 

      <div className="max-w-full rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">

 
      <div className="w-full h-full  text-black dark:text-white">
                      
      <div className="max-w-full rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    
    <p className="text-black dark:text-gray-400  mb-2">

 

The T&P (Training and Placement) department of a college plays a crucial role in guiding students through their journey of personal and professional growth. The department's core theme, "Growth is never an event, It's a process," emphasizes that personal and career development is an ongoing journey that requires continuous effort and dedication.
</p>
<p className="text-black  dark:text-gray-400 mb-2">

By enabling students to understand their interests and needs, the department helps them discover their passions and align their career aspirations accordingly. Through various counseling and mentoring programs, students can gain clarity about their goals and develop a clear vision for their future.
</p>
<p className="text-black  dark:text-gray-400  mb-2">

In a world characterized by intense competition, the T&P department creates an environment that encourages students to embrace challenges as opportunities for growth. By fostering a growth mindset, students are more likely to face difficulties with resilience and determination, seeing them as stepping stones to success rather than roadblocks.
</p>
<p className=" text-black dark:text-gray-400  mb-2">

The department also plays a vital role in resolving any confusions or contradictions that might arise in students' minds. College life can be overwhelming, and students may face dilemmas about their career choices, areas of specialization, or even their overall life direction. Through personalized guidance and support, the T&P department helps students navigate through these uncertainties and make informed decisions.
</p>
<p className=" text-black dark:text-gray-400  mb-2">

Overall, the T&P department acts as a bridge between the academic environment and the professional world, equipping students with the skills, knowledge, and confidence they need to excel in their chosen careers. By focusing on the continuous process of growth, the department instills in students the motivation to keep learning and evolving, ensuring they are well-prepared to meet the challenges of the ever-changing job market.
</p>

  </div>



  
  
</div>


  </div>   

           
</div>

<br />
<br />
<Team />

     </article>
  );
}

