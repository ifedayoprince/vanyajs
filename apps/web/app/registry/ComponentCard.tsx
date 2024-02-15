import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Image from 'next/image'


export const ComponentCard: React.FC<{ name: string, demoUrl: string }> = ({ name, demoUrl }) => {
    return <div className="w-full border border-thicksharp cursor-pointer hover-gradient">
        <div className="p-6">
            <Image src={demoUrl} width={400} height={400} alt={`${name} demo`}
            className="aspect-[4_/_5]" />
        </div>
        <div className="flex justify-between items-center w-full border-t border-thicksharp mt-4 text-white px-6 py-4 ">
            <h3 className="font-medium">{name}</h3>
            <FaChevronRight className="text-thicksharp" />
        </div>
    </div>;
}
