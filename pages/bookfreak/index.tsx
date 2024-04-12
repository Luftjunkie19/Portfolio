import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import bookfreakImage from '../../assets/images/bookfreak.png'
import bookSc1 from '../../assets/images/BookFreakSc1.png';
import bookSc2 from '../../assets/images/BookFreakSc2.png';
import bookSc3 from '../../assets/images/BookFreakSc3.png';
import bookSc4 from '../../assets/images/BookFreakSc4.png';

type Props = {}

function DetailPage({}: Props) {
  return (
    <div>
      <div className="flex justify-around items-center gap-6 p-6">
      <Carousel  opts={{
        align: "start",
      }} className='w-64'>
        <CarouselContent>
          <CarouselItem>
            <Image className='w-64 h-64 object-cover rounded-lg'  src={bookfreakImage} alt={''}/>
          </CarouselItem>
          <CarouselItem >
            <Image className='w-64 h-64 object-cover rounded-lg'  src={bookSc1} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='w-64 h-64 object-cover rounded-lg'  src={bookSc2} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='w-64 h-64 object-cover rounded-lg'  src={bookSc3} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='w-64 h-64 object-cover rounded-lg'  src={bookSc4} alt={''}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
<div className="flex flex-col gap-2 max-w-xl text-white">
  <p className=' text-3xl font-bold'>BookFreak</p>
  <p className=' text-sm'>BookFreak is an unique project, which has been a lot of time devoted on. BookFreak's goal is to enable readers and users to freely discuss their opinions about a book, track their reading progress, but also the most read book's category.
    Although BookFreak is a project that has been in development for a long time, it is still in its early stages and promise it will be only better in case of UI and functionalities.
  </p>

</div>
      </div>

<div className="flex flex-col gap-4 p-2 text-white">
  <p className=' text-2xl font-bold'>Description</p>
      <div className="flex gap-2 flex-wrap">
        <div className="max-w-xl">
      <p className=' font-bold text-xl'>
  Why is BookFreak an unique project for me?
  </p>
  <p className=' text-sm'>Firstly, it is the first project that I started to build using React. Secondly, as far as the project development has started on Februrary 2023, and might not look as it was. What is worth emphasizing is that I personally had many obstacles while creating this project.</p>
        </div>
        <div className=" max-w-xl">
        <p className=' font-bold text-xl'>What Obstacles did I face?</p>
<p className=' text-sm'>  In order to focus myself on the project I had to neglect the school life and so on, in meanwhile at the time of the very beginning of the project I witnessed 2 burials. First one was my grandfather's burial, the second was the burial of my dog, I had to put down. Both burials were in March.
    Then I had issues related to my school, because in order to pass the class I had to pass the classification exam in August, which I had to prepare myself to.
    So the real work started from a half of September and the work on a web version terminated on January 15th 2024, because I started that time the mobile version, where the work ended up on March 2024.</p>
        </div>


      </div>
</div>
      
    </div>
  )
}

export default DetailPage