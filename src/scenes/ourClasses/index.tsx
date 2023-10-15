import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
    "Unleash your inner strength with our Weight Training Classes. Join us and sculpt your physique with expert guidance and top-notch equipment.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Cultivate inner peace and enhance flexibility with our Yoga Classes. Join us to discover the serenity and strength that yoga can bring to your mind and body.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
    "Cultivate core strength and enhance your fitness with our Ab Core Classes. Join us to target your midsection and develop a strong, resilient core that supports your overall well-being.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
    "Embark on thrilling adventures with our Adventure Classes. Join us for adrenaline-pumping experiences and outdoor challenges that invigorate your body and spirit.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Elevate your fitness game with our Fitness Classes. Join us for dynamic and diverse workouts that will help you achieve your health and wellness goals.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
    "Empower your fitness journey with our Training Classes. Join us for expert-guided sessions designed to enhance your performance, build endurance, and achieve your fitness goals.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Explore our classes at Evogym, a diverse selection of fitness experiences crafted for all levels and interests. From HIIT to yoga, our expert instructors ensure you find the perfect class to meet your fitness goals and embrace a rewarding journey within our empowering community.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
