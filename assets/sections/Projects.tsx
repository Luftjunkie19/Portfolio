// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdBuild } from 'react-icons/md';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/ui/3d-card';
import { Button } from '@/components/ui/button';

import bookfreakImage from '../images/bookfreak.png';
import spotifyImage from '../images/spotify.png';
import twitterImage from '../images/twitter1.png';
import virtuEstateImage from '../images/virtuestate1.png';
import { useWindowSize } from '@/lib/useWindowSizes';

type Props = {}


function Projects({ }: Props) {
  const sizes= useWindowSize();
  const conditionalNumber = (sizes as {width:number, height:number}).width < 660 ? 1 : 2;

  const variants= {
    hidden:{
      opacity:0,
      scale:0,
      transition:{
      delayChildren: 0.3,
      staggerChildren: 0.2,
        type:'spring',
        bounce:0.5,
      }
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        delayChildren: 0.3,
      staggerChildren: 0.2,
        type:'spring',
        bounce:0.5,
      }
    }
  }

  return (
    <div id='projects' className="flex gap-3 flex-col pl-2 my-6">
      <p className="text-3xl font-bold text-white">My Projects</p>
      <p className=" max-w-xl text-white">Through my entire journey with coding, I have built many great projects, that even haven't been stored on github, but here's the Top 3.</p>

  


      <motion.div variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{ once: true }} className="flex flex-wrap gap-6 items-center justify-around">
                  <Swiper
        slidesPerView={conditionalNumber}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
    <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-1 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto max-w-sm h-auto rounded-xl p-4 border">
         
            <CardItem className="w-full h-72">
              <Image  className='w-full h-full object-cover rounded-lg' src={bookfreakImage} alt={''}/>
         </CardItem>
         
            <CardItem>
              <p className=" font-bold text-2xl">BookFreak (Mobile)</p>
            </CardItem>

               <CardItem>
              <p>BookFreak is web as also an mobile app, which enables the users to track their reading progress, give recensions about book user has read, see the statistics about the most read category or ratio of user's read book's pages and entire book's pages...</p>
            </CardItem>

            <CardItem className='flex justify-between py-2'>
            <Link href='/bookfreak'>
<Button>Show more</Button>
                        </Link>
            </CardItem>
          </CardBody>
            </CardContainer>
          </SwiperSlide>
        
          <SwiperSlide>
            <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-1 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto max-w-sm h-auto rounded-xl p-6 border">
         
            <CardItem className="w-full h-72">
              <Image  className='w-full h-full object-cover rounded-lg' src={spotifyImage} alt={''}/>
         </CardItem>
         
            <CardItem>
              <p className=" font-bold text-2xl">Spotify Clone</p>
            </CardItem>

               <CardItem>
              <p>This is an web app based on UI of Spotify. This project has been built, in order to practice UI skills and also at that time newely learned tools like NextJS, TypeScript, Prisma, MongoDB...</p>
            </CardItem>

                      <CardItem className='flex justify-between py-2'>
                        <Link href='/spotify-clone'>
<Button>Show more</Button>
                        </Link>
            </CardItem>
          </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
                           <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-1 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto max-w-sm h-auto rounded-xl p-6 border">
         
            <CardItem className="w-full h-72">
              <Image  className='w-full h-full object-cover rounded-lg' src={twitterImage} alt={''}/>
         </CardItem>
         
            <CardItem>
              <p className=" font-bold text-2xl">Twitter Clone</p>
            </CardItem>

               <CardItem>
              <p>This is an web app based on UI of Twitter. This project has been created by means of youtube tutorial in order to practice my UI skills and also at that time newely learned tools like NextJS, TypeScript. I also learnt from it how to use Prisma and MongoDB...</p>
            </CardItem>

                      <CardItem className='flex justify-between py-2'>
                      <Link href='/twitter-clone'>
<Button>Show more</Button>
                        </Link>
            </CardItem>
          </CardBody>
</CardContainer>
        </SwiperSlide>
        <SwiperSlide>         <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-1 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto max-w-sm h-auto rounded-xl p-6 border">
         
            <CardItem className="w-full h-72">
              <Image  className='w-full h-full object-cover rounded-lg' src={virtuEstateImage} alt={''}/>
         </CardItem>
         
            <CardItem className="flex justify-between items-center w-full">
              <p className=" font-bold text-2xl">VirtuEstate</p>
              <p className=" bg-yellow-500 flex gap-2 items-center py-1 px-2 text-white rounded-xl">In Build <MdBuild className="text-white"/></p>
            </CardItem>

               <CardItem>
              <p>VirtuEstate is a project, that has been created in order to use my ThreeJS knowledge in practice. This Project tends to become a revolution for Marketplace apps, because of the ability to show more over what a certain property looks like.</p>
            </CardItem>

                      <CardItem className='flex justify-between py-2'>
                      <Link href='/virtuestate'>
<Button>Show more</Button>
                        </Link>
            </CardItem>
          </CardBody>
</CardContainer></SwiperSlide>
      </Swiper>

        

        


</motion.div>
    </div>
  )
}

export default Projects