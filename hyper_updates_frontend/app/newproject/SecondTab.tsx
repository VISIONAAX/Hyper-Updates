"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { IoFileTray } from "react-icons/io5"
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

type SecondTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
    formData: {
        organization: string;
        project_name: string;
        description: string;
        file: File | null;
        release: string;
    };
    updateFormData: (newData: Partial<SecondTabProps['formData']>) => void;
};

const SecondTab: React.FC<SecondTabProps> = ({currentStep, updateCurrentStep, formData, updateFormData}) => {
    const [file, setFile] = useState<File | undefined>();


    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        const selectedFile = acceptedFiles[0];

        const fileReader = new FileReader();
        fileReader.onload = function () {
            updateFormData({
                file: selectedFile,
            });
        };

        fileReader.readAsDataURL(selectedFile);
    }, [updateFormData])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
    });

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
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 lg:w-[600px]'>
                    <p className='text-xl font-semibold'>
                        Upload Your Executable File
                    </p>
                    <div className='lg:w-[600px] h-[30vh] border-4 border-c border-dashed border-neutral-400 rounded-xl flex flex-col justify-center items-center' {...getRootProps()}>

                        <input {...getInputProps()} />
                        <span className='text-5xl'><IoFileTray /></span>
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drop your executable file here, or click to select files</p>
                        }
                    </div>
                    <label className='flex flex-col gap-1 text-xm '>
                        Release version *
                        <Input type="text"
                            name="release"
                            value={formData.release}
                            onChange={handleInputChange}
                            required className='bg-neutral-100 text-base' />
                    </label>
                <div className='ml-auto flex gap-5 pt-5'>
                    <Button onClick={() => updateCurrentStep(currentStep - 1)} variant={'outline'} className='w-fit'>Prev</Button>
                    <Button type='submit' className='w-fit'>Next</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export { SecondTab }