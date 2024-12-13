"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import { IoFileTray } from 'react-icons/io5';


type Project = {
  organization: string;
  project_name: string;
  description: string;
  file: File | null;
  release: string;
}

const projects: Project[] = [
  {
    organization: "ABC ORG",
    project_name: "Project 1",
    description: "This is test project",
    release: "1.0.0",
    file: null,
  },
  {
    organization: "ABC ORG",
    project_name: "Project 2",
    description: "This is test project",
    release: "1.0.0",
    file: null,
  },
]
export default function Projects() {
  const [visiblity, setVisibility] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const selectedFile = acceptedFiles[0];

    const fileReader = new FileReader();
    fileReader.onload = function () {
      // updateFormData({
      //   file: selectedFile,
      // });
    };

    fileReader.readAsDataURL(selectedFile);
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const handleOnClick = () => {
    setVisibility(!visiblity)
  }
  return (
    <div className={'min-h-screen px-80 py-20 flex flex-col '}>
      <div className={`flex flex-col gap-5 ${visiblity ? "blur-lg" : ""}`}>
        {projects.map((data) => (
          <Card key={data.project_name}>
            <CardHeader>
              <CardTitle>{data.project_name}</CardTitle>
              <CardDescription>{data.organization}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm'>
                {data.description}
              </p>
            </CardContent>
            <CardFooter className='gap-5'>
              <p className='font-semibold'>Current Release: {data.release}</p>
              <Button onClick={handleOnClick} className='ml-auto'>Push New Update</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {visiblity &&
        <Card className='absolute inset-0 w-fit h-fit p-5 my-auto mx-auto z-10 '>
          <CardHeader>
            <CardTitle>
              Upload Your Executable File
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='lg:w-[600px] h-[30vh] border-4 border-c border-dashed border-neutral-400 rounded-xl flex flex-col justify-center items-center' {...getRootProps()}>

              <input {...getInputProps()} />
              <span className='text-5xl'><IoFileTray /></span>
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drop your executable file here, or click to select files</p>
              }
            </div>
          </CardContent>
          <CardFooter>
            <div className='ml-auto flex flex-row gap-5'>
              <Button onClick={handleOnClick} variant={'outline'} className='ml-auto'>Cancel</Button>
              <Button onClick={handleOnClick} className='ml-auto'>Update!</Button>
            </div>
          </CardFooter>
        </Card>
      }
    </div>
  )
}
