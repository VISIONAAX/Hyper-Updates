"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

type FirstTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
    formData: {
        organization: string;
        project_name: string;
        description: string;
        file: File | null;
        release: string;
    };
    updateFormData: (newData: Partial<FirstTabProps['formData']>) => void;
};

const FirstTab: React.FC<FirstTabProps> = ({ currentStep, updateCurrentStep, formData, updateFormData }) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        updateFormData({ [name]: value });
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateCurrentStep(currentStep + 1);
    };
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <p className='text-xl font-semibold'>
                    Create A New Project Repository
                </p>
                <form onSubmit={handleSubmit} action='' className='flex flex-col gap-5 text-sm lg:w-[600px]'>
                    <label className='flex flex-col gap-1'>
                        Organization Name *
                        <Input type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            required className='bg-neutral-100 text-base' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        Project Name *
                        <Input type="text"
                            name="project_name"
                            value={formData.project_name}
                            onChange={handleInputChange}
                            required className='bg-neutral-100 text-base' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Description <span className='text-neutral-400'>(optional)</span></p>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className='bg-neutral-100 text-base' />
                    </label>

                    <div className='ml-auto flex gap-5 pt-5'>
                        <Button type='submit' className='w-fit'>Next</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { FirstTab }