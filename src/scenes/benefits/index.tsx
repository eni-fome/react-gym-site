import { SelectedPage, BenefitType } from "@/shared/types";
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import {motion} from "framer-motion"
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:"Experience your fitness journey with state-of-the-art equipment that's designed to elevate your workouts. Our gym is equipped with the latest and most innovative fitness gear, ensuring you have the tools you need to achieve your goals."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:"Join our fitness community and explore a diverse array of over 100 classes that cater to all levels and interests. Whether you're passionate about high-intensity workouts, prefer the tranquility of yoga, or want to try something new, our extensive class offerings have something for everyone."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:"At our gym, we take pride in our team of expert and pro trainers who are dedicated to helping you achieve your fitness goals. Our experienced trainers bring a wealth of knowledge, skill, and motivation to every session.",
    },
] 

const container = {
    hidden: {},
    visible: {
        transition :{ staggerChildren: 0.2}
    },
}


type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

            {/* Header */}

            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity:1, x: 0 }
                }}
            className="md: w--3/5 md:my-5">
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
        </p>
            </motion.div>

            {/* Benefits */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                    key = {benefit.title}
                    icon = {benefit.icon} 
                    title = {benefit.title}
                    description = {benefit.description}
                    setSelectedPage = {setSelectedPage}
                    />
                ))}
            </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
        <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
        />

          {/* Description */}
        <div>
            {/* Title */}
            <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                </HText>
                </motion.div>
            </div>
            </div>

            {/* Lorem */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
            >
            <p className="my-5">
            Step into our fitness haven, where we're dedicated to transforming lives through the power of wellness. At the heart of our vibrant community, you'll discover an impressive diversity of classes and state-of-the-art equipment that sets the stage for your fitness adventure. Whether you're an early riser hitting the gym for an energizing cardio session, a yoga enthusiast finding your zen, or someone eager to try a variety of workouts, our gym offers a wealth of opportunities to explore.


            </p>
            <p className="mb-5">
            But it's not just about the equipment and classes; it's the people who make our community truly exceptional. With millions of happy members and expert, pro trainers by your side, you'll be inspired to reach new heights. Join us, and let's embark on a fitness journey together, transforming your life one workout at a time, and celebrating your success among a community that's as diverse as it is supportive.
            </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
                </ActionButton>
            </div>
            </div>
        </div>
        </div>

        </motion.div>
    </section>
    )
}

export default Benefits