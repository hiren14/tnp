

import Image from 'next/image';
// import {  FaLinkedin } from 'react-icons/fa';
import Style from './Team.module.css';

const ICON_SIZE = 28;

function TeamCard({name, pos, imageSrc, lazyImageSrc,pack,sem,eroll }) {
  return (
    <div className={Style.card}>
      <div className="z-10 w-full text-center h-2/3 mb-18 mt-4 overflow-hidden rounded-lg">
        <Image
          className="z-10 rounded-lg object-cover object-top"
          src={imageSrc}
          width={'40'}
          height={'10'}
          layout="responsive"
           objectFit="contain"
          alt={name}
          quality={100}
        
        />
      </div>
      <div className="z-10 text-center my-5">
      Name  <p className="text-xl">{name}</p>
      Company palced   <p className="text-xl">{pos}</p>
    Package    <p className="text-xl">{pack}</p>
        
      </div>
      {/* <div className={Style.socials}>
        

        
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={img}
              >
                <FaLinkedin size={ICON_SIZE} />
              </a>
          
          
       
      </div> */}
    </div>
  );
}

export default TeamCard;
