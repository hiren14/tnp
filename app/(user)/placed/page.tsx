// import { groq } from "next-sanity";
// import Image from "next/image";
// import { client } from "../../../lib/sanity.client";
// import urlFor from "../../../lib/urlFor";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "../../../components/RichTextComponents";
import TeamCard from '../../../components/teams/TeamCard';
import teamstyle from '../../../components/teams/Team.module.css';
import { student } from '../../../lib/TeamData';

export default  function Placed() {

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

      <div className="w-64  text-black dark:text-white">
                 
                </div>
                <h2 className={teamstyle.postHead}>Placed Student </h2>
        <div className={teamstyle.cardContainer}  >
          {student.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.student_Name}
                pos={item.company_name}
                imageSrc={item.img}
                lazyImageSrc={item.img}
                eroll ={item.enrollment_no}
                pack ={item.package}
                sem ={item.semester}            
                   />
            );
          })}


        </div>
     </article>
  );
}

