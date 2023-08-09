import {team} from '../lib/Data';
import teamstyle from '../components/teams/Team.module.css';


export default  function Team() {

    return (
        
<>
  <h1 data-text="Hover and wave 🌊" className="text-center text-7xl relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-sky-400 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave">
    Meet Team 
  </h1>
  
 {/* <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    <div className="px-20 py-4">
      <div className="font-bold text-xl mb-2">Prof. HARESH CHANDE</div>
     
    </div>
    <div className="px-2 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        <a href="mailto:" ></a>
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
     </div>
    </div> */}

                <div className={teamstyle.cardContainer}  >
          {team.map((item, index) => {
            return (

                <div className=" flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src={item.img} alt="" className="w-32 h-32 mx-auto  dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{item.name}</h2>
			
       <p className="px-5 text-xs sm:text-base dark:text-gray-400">{item.pos}</p>
      {/* <p className="px-5 text-xs sm:text-base dark:text-gray-400">{item.pos}</p>
       <p className="px-5 text-xs sm:text-base dark:text-gray-400">{item.company_name}</p>
       <p className=" inline-block bg-gray-200 rounded-full dark:bg-white   py-1 px-5 text-xs sm:text-base dark:text-black">{item.package}</p>  */}


		</div>
    </div>
</div>
             );
          })}
</div>
</>  
        )
    }
      