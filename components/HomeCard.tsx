import Image from 'next/image'
type HomeCardProps ={
    img:string
    imgAlt:string
    title:string
    description:string
    className?:string
    handleClick:()=>void
}
const HomeCard = ({img,imgAlt,title,description,className,handleClick}:HomeCardProps) => {
  return (
    <div>
        <div className={`${className} hover:opacity-75 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
            onClick={handleClick}        
        >
            <div className='flex-center glassmorphism size-12 rounded-[10px]'>
                <Image
                    src={img}
                    alt={imgAlt}
                    width={27}
                    height={27}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                    {title}
                </h1>
                <p className='text-lg font-normal'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeCard