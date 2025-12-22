import React from "react";
import {
    MdCampaign,
    MdBrush,
    MdGroupWork,
    MdAccountBalance,
    MdMedicalServices,
    MdSecurity,
    MdBusinessCenter,
    MdSchool,
    MdSupportAgent,
    MdFolder,
    MdGavel,
} from "react-icons/md";
import { IconType } from "react-icons";
import GradientHeading from "@/app/components/ui/GradientHeading";
import GradientButton from "@/app/components/ui/GradientButton";

interface ScrollCardProps {
    title: string;
    jobs: number;
    icon: IconType;
    bgGradient?: string;
    borderColor?: string;
    colStart: number;
    colSpan: number;
    iconColor?: string;
}

// Inline ScrollCard component (kept in this file for modularity within the section)
const ScrollCard: React.FC<ScrollCardProps> = ({ 
    title, 
    jobs, 
    icon: Icon, 
    bgGradient = '', 
    borderColor = '', 
    colStart, 
    colSpan, 
    iconColor = 'text-gray-200' 
}) => {
    return (
        <div
            className={`${borderColor} scroll-mt-[500px] border rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-shadow hover:shadow`}
            style={{
                gridColumnStart: colStart,
                gridColumnEnd: `span ${colSpan}`,
                minWidth: "250px",
                maxWidth: "250px",
                height: "92px",
            }}
        >
            <div className={`${bgGradient} p-3 rounded-full flex items-center justify-center`}>
                <Icon className={iconColor} size={22} />
            </div>
            <div className="flex flex-col justify-center h-full">
                <h3 className="font-semibold text-xs text-gray-700 truncate w-[160px]">{title}</h3>
                <p className="text-gray-400 text-xs mt-1">{jobs} Jobs Available</p>
            </div>
        </div>
    );
};

interface Career {
    title: string;
    jobs: number;
    icon: IconType;
    bgGradient: string;
    borderColor: string;
    iconColor: string;
    colStart: number;
    colSpan: number;
}

const careers: Career[] = [
    {
        title: "Marketing & Communication",
        jobs: 68,
        icon: MdCampaign,
        bgGradient: "bg-blue-200/70",
        borderColor: "border-blue-300/60",
        iconColor: "text-blue-500",
        colStart: 1,
        colSpan: 3,
    },
    {
        title: "Design & Development",
        jobs: 98,
        icon: MdBrush,
        bgGradient: "bg-pink-200/70",
        borderColor: "border-pink-300/60",
        iconColor: "text-pink-400",
        colStart: 4,
        colSpan: 3,
    },
    {
        title: "Human Research & Development",
        jobs: 51,
        icon: MdGroupWork,
        bgGradient: "bg-purple-200/70",
        borderColor: "border-purple-300/60",
        iconColor: "text-purple-500",
        colStart: 7,
        colSpan: 3,
    },
    {
        title: "Finance Management",
        jobs: 45,
        icon: MdAccountBalance,
        bgGradient: "bg-orange-100/70",
        borderColor: "border-orange-300/60",
        iconColor: "text-orange-300",
        colStart: 10,
        colSpan: 3,
    },
    {
        title: "Healthcare & Medical",
        jobs: 43,
        icon: MdMedicalServices,
        bgGradient: "bg-blue-200/70",
        borderColor: "border-blue-300/60",
        iconColor: "text-blue-500",
        colStart: 2,
        colSpan: 3,
    },
    {
        title: "Armforce Guide & Security",
        jobs: 44,
        icon: MdSecurity,
        bgGradient: "bg-purple-200/70",
        borderColor: "border-purple-300/60",
        iconColor: "text-purple-500",
        colStart: 5,
        colSpan: 3,
    },
    {
        title: "Business & Consulting",
        jobs: 29,
        icon: MdBusinessCenter,
        bgGradient: "bg-pink-200/70",
        borderColor: "border-pink-300/60",
        iconColor: "text-pink-400",
        colStart: 8,
        colSpan: 3,
    },
    {
        title: "Education & Training",
        jobs: 58,
        icon: MdSchool,
        bgGradient: "bg-orange-100/70",
        borderColor: "border-orange-300/60",
        iconColor: "text-orange-300",
        colStart: 1,
        colSpan: 3,
    },
    {
        title: "Customer Support Care",
        jobs: 65,
        icon: MdSupportAgent,
        bgGradient: "bg-purple-200/70",
        borderColor: "border-purple-300/60",
        iconColor: "text-purple-500",
        colStart: 4,
        colSpan: 3,
    },
    {
        title: "Project Management",
        jobs: 53,
        icon: MdFolder,
        bgGradient: "bg-pink-200/70",
        borderColor: "border-pink-300/60",
        iconColor: "text-pink-400",
        colStart: 7,
        colSpan: 3,
    },
    {
        title: "Public Relations & Outreach",
        jobs: 38,
        icon: MdCampaign,
        bgGradient: "bg-blue-200/70",
        borderColor: "border-blue-300/60",
        iconColor: "text-blue-500",
        colStart: 10,
        colSpan: 3,
    },
    {
        title: "Legal & Compliance",
        jobs: 41,
        icon: MdGavel,
        bgGradient: "bg-orange-100/70",
        borderColor: "border-orange-300/60",
        iconColor: "text-orange-300",
        colStart: 2,
        colSpan: 3,
    },
];

interface InfiniteScrollerProps {
    jobs: Career[];
    scrollClass: string;
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({ jobs, scrollClass }) => {
    return (
        <div className="hide-scrollbar  overflow-hidden flex flex-row">
            <div className={`${scrollClass} group flex py-3 justify-center items-center gap-6 px-3`}>
                {jobs.map((card, idx) => (
                    <ScrollCard key={idx} {...card} />
                ))}
            </div>

            <div className={`${scrollClass} group flex py-3 justify-center items-center gap-6 px-3`}>
                {jobs.map((card, idx) => (
                    <ScrollCard key={`dup-1-${idx}`} {...card} />
                ))}
            </div>

            <div className={`${scrollClass} group flex py-3 justify-center items-center gap-6 px-3`}>
                {jobs.map((card, idx) => (
                    <ScrollCard key={`dup-2-${idx}`} {...card} />
                ))}
            </div>
        </div>
    );
};

const CareerExploreSection: React.FC = () => {
    return (
        <section
            id="careers"
            className="content relative py-10 sm:py-16 px-8 sm:px-16  max-w-screen-xl mx-auto overflow-hidden"
            data-bg='light'
        >
            <div className="pointer-events-none absolute bottom-0 left-0 w-1/2 h-80 blur-3xl bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 opacity-20 rounded-3xl -z-10"></div>

            <div className="mb-10">
                <GradientHeading
                    leftText="Explore"
                    highlightText="Every Career Field"
                    rightText="in One Place, Perfectly Tailored to You"
                    theme="light"
                    align="center"
                />
            </div>


            {/* <p className="text-center max-w-xl mx-auto text-gray-600 mb-12 text-sm sm:text-base leading-relaxed">
                Discover a wide range of careers across every industry — from design and tech to healthcare and finance. Find roles that match your skills and passion.
            </p> */}

            <div className=" relative  w-full overflow-hidden mb-1">
                <InfiniteScroller scrollClass={'scroll1'} jobs={careers.slice(0, 4)} />
                <InfiniteScroller scrollClass={'scroll2'} jobs={careers.slice(4, 8)} />
                <InfiniteScroller scrollClass={'scroll3'} jobs={careers.slice(8, 12)} />

                {/* element to add a transition  */}
                <div className="w-5 sm:w-20 h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="w-5 sm:w-20 h-full absolute top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>


            <GradientButton
                size="md"
                className="mt-10"
                onClick={() => {}}
            >Explore All</GradientButton>
        </section>
    );
};

export default CareerExploreSection;
