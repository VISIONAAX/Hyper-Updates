"use client"
import { StepProgress } from '@/components/StepProgress'
import React, { useState } from 'react'
import { FirstTab } from './FirstTab'
import { Button } from '@/components/ui/button'
import { SecondTab } from './SecondTab'
import { ThirdTab } from './ThirdTab'
import { Project } from '@prisma/client'

const steps = [
    {
        label: 'Address',
        step: 1,
    },
    {
        label: 'Shipping',
        step: 2,
    },
    {
        label: 'Payment',
        step: 3,
    },
]

type NewProjectState = {
    currentStep: number;
    formData: {
        organization: string;
        project_name: string;
        description: string;
        file: File | null;
        release: string;
    };
}


export default function NewPoject() {
    const [state, setState] = useState<NewProjectState>({
        currentStep: 1,
        formData: {
            organization: '',
            project_name: '',
            description: '',
            file: null,
            release: '',
        },
    });
    const [currentStep, setCurrentStep] = useState<number>(1)
    const handlePrev = () => {
        {
            currentStep > 1 ?
                setCurrentStep(currentStep - 1) : ""
        }
    }
    const handleNext = () => {
        {
            currentStep < steps.length ?
                setCurrentStep(currentStep + 1) : ""
        }
    }

    const updateCurrentStep = (newStep: number) => {
        setCurrentStep(newStep);
    };

    const updateFormData = (newData: Partial<NewProjectState['formData']>) => {
        setState((prevState) => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                ...newData,
            },
        }));
    };

    return (
        <div className='px-40 py-40'>
            <div className='border shadow rounded flex flex-col'>
                <div className='py-10 border-b mx-40'>
                    <StepProgress currentStep={currentStep} steps={steps} />
                </div>

                <div className='py-10 mx-auto flex '>
                    {
                        (() => {
                            switch (currentStep) {
                                case 1:
                                    return <FirstTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} formData={state.formData} updateFormData={updateFormData} />;
                                case 2:
                                    return <SecondTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} formData={state.formData} updateFormData={updateFormData}/>;
                                case 3:
                                    return <ThirdTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} formData={state.formData}/>;
                                default:
                                    return <FirstTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} formData={state.formData} updateFormData={updateFormData} />;

                            }
                        })()
                    }
                    {/* <div className='ml-auto flex gap-5 pt-5'>
                        <Button onClick={handlePrev} variant={'outline'} className='w-fit'>Prev</Button>
                        {currentStep < steps.length ?
                            <Button onClick={handleNext} className='w-fit'>Next</Button> :
                            <Button onClick={handleNext} className='w-fit'>Submit</Button>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}
