import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

type ThirdTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
    formData: {
        organization: string;
        project_name: string;
        description: string;
        file: File | null;
        release: string;
    };
};

const ThirdTab: React.FC<ThirdTabProps> = ({ currentStep, updateCurrentStep, formData }) => {
    return (
        <div>
            <div className='flex flex-col gap-5 w-[600px]'>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl font-semibold'>Confirm Your Project Details</p>
                    <div className='flex flex-col text-sm  gap-5'>
                        <p className='flex flex-col flex-grow'>Organization <span className='bg-neutral-50 w-full p-2 rounded-lg text-base'>{formData.organization}</span></p>
                        <p className='flex flex-col flex-grow'>Project Name <span className='bg-neutral-50 w-full p-2 rounded-lg text-base'>{formData.project_name}</span></p>
                        <p className='flex flex-col flex-grow'>Description <span className='bg-neutral-50 w-full p-2 rounded-lg text-base'>{formData.description}</span></p>
                        <p className='flex flex-col flex-grow'>Release <span className='bg-neutral-50 w-full p-2 rounded-lg text-base'>{formData.release ? formData.release : '1.0.0'}</span></p>
                        <p className='flex flex-row gap-2 items-center font-semibold'>File Upload Successful <span className='text-blue-500 text-xl'><FaCheckCircle /></span></p>
                    </div>

                </div>
                <div className='ml-auto flex gap-5 pt-5'>
                    <Button onClick={() => updateCurrentStep(currentStep - 1)} variant={'outline'} className='w-fit'>Prev</Button>
                    <Button onClick={() => updateCurrentStep(currentStep)} className='w-fit'>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export { ThirdTab }