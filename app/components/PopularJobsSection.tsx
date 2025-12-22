"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import JobCard from "@/app/components/job-cards/JobCard";
import GradientHeading from "@/app/components/ui/GradientHeading";
import GradientButton from "@/app/components/ui/GradientButton";

interface Job {
    logo: string;
    company: string;
    location: string;
    title: string;
    types: string[];
    permanent: boolean;
    salary: string;
    desc: string;
    buttonColor: string;
    posted: string;
}

const jobsData: Job[] = [
    {
        logo: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
        company: "TechNova",
        location: "San Francisco, USA",
        title: "Front-End Developer",
        types: ["Full Time"],
        permanent: true,
        salary: "$6,500–10,000/Month",
        desc: "Develop Responsive User Interfaces Using React. Collaborate With Designers And Backend Teams To Improve UX Across Platforms.",
        buttonColor: "from-indigo-300 to-purple-300 text-indigo-700", // Tailwind classes
        posted: "3 days ago",
    },
    {
        logo: "https://avatars.githubusercontent.com/u/2964768?s=200&v=4",
        company: "PixelCraft",
        location: "Remote",
        title: "UI/UX Designer",
        types: ["Full Time", "Part Time"],
        permanent: true,
        salary: "$3,000–7,000/Month",
        desc: "Work Closely With Product Teams To Design Intuitive, User-Friendly Interfaces. Portfolio Required. Remote Work Available.",
        buttonColor: "from-indigo-300 to-blue-400 text-blue-700",
        posted: "1 days ago",
    },
    {
        logo: "https://avatars.githubusercontent.com/u/5534067?s=200&v=4",
        company: "SecureMind",
        location: "Singapore",
        title: "Cybersecurity Analyst",
        types: ["Full Time", "Urgent"],
        permanent: true,
        salary: "$5,500–9,000/Month",
        desc: "Monitor Network Activity, Detect Threats, And Respond To Incidents In Real Time. Experience With Firewalls And SIEM Tools Required.",
        buttonColor: "from-indigo-300 to-pink-300 text-indigo-700",
        posted: "2 days ago",
    },
];

interface PopularJobsCardProps {
    isCentered: boolean;
    children: React.ReactNode;
}

const PopularJobsCard: React.FC<PopularJobsCardProps> = ({ isCentered, children }) => (
    <div className={`m-auto ${isCentered ? " -translate-y-10 " : ""}`}>{children}</div>
);

const PopularJobsSection: React.FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = (): void => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <section 
            className="content max-w-6xl mx-auto py-20 px-6"
            data-bg = 'light'
        >
            <div className="mb-12">
                <GradientHeading
                    leftText="Popular Jobs,"
                    highlightText="Trending Opportunities"
                    rightText="Across Industries"
                    theme="light"
                    align="center"
                    />
            </div>

            {!isMobile && <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-16">
                {jobsData.map((job, i) => (
                    <motion.div
                        key={job.company + job.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex-1"
                    >
                        <PopularJobsCard isCentered={i === 1}>
                            <JobCard />
                        </PopularJobsCard>
                    </motion.div>
                ))}
            </div>}


            {isMobile && <div className=" h-[550px] relative overflow-hidden  py-16 pb-4">
                {jobsData.map((job, i) => (
                    <motion.div
                        key={job.company + job.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex-1 absolute"
                        style={{left: i*30, top: i*40}}
                    >
                        <JobCard />
                    </motion.div>
                ))}
            </div>

            }

            <GradientButton
                size="md"
                className="-mt-12 mx-auto block"
                onClick={() => {}}
            >Explore All</GradientButton>


        </section>
    );
};

export default PopularJobsSection;
