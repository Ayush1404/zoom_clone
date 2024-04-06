import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
  

type MeetingModalProps = {
    isOpen:boolean
    onClose:()=>void
    title:string
    className?:string
    buttonText?:string
    handleClick?:()=>void 
    image?:string
    imageAlt?:string
    buttonIcon?:string
    children?:ReactNode
} 
const MeetingModal = ({ isOpen , onClose , title , className , buttonText , handleClick , buttonIcon , image , imageAlt , children }:MeetingModalProps) => {
  return (
    <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 text-white px-6 py-9'>
               <div className='flex flex-col gap-6'>
                    {image &&
                        (
                            <div className='flex justify-center'>
                                <Image
                                    src={image}
                                    alt={imageAlt?imageAlt:'image'}
                                    width={72}
                                    height={72}
                                />
                            </div>
                        )
                    }
                    <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
                    {children}
                    <Button className='bg-blue-1 hover:opacity-75 focus-visible:ring-0 focus-visible:ring-offset-0'
                        onClick={handleClick}
                    >
                        {buttonIcon &&
                            (<Image 
                                src={buttonIcon}
                                alt="button icon"
                                width={13}
                                height={13}
                            />)
                        } &nbsp;
                        {buttonText || 'Shcedule Meeting'}
                    </Button>
               </div>
            </DialogContent>
        </Dialog>

    </div>
  )
}

export default MeetingModal