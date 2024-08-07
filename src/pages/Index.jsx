import { useState, useEffect } from "react";
import { Cat, Paw, Heart, Eye, Ear, MessageCircle, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Sun, Moon, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const catCharacteristics = [
  { icon: <Paw className="h-6 w-6" />, text: "Excellent hunters with sharp claws and teeth" },
  { icon: <Heart className="h-6 w-6" />, text: "Flexible bodies and quick reflexes" },
  { icon: <Eye className="h-6 w-6" />, text: "Keen senses, especially night vision" },
  { icon: <Ear className="h-6 w-6" />, text: "Exceptional hearing abilities" },
  { icon: <MessageCircle className="h-6 w-6" />, text: "Communicate through vocalizations and body language" },
];

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive color points and vocal nature." },
  { name: "Persian", description: "Recognized for their long, luxurious coat and flat face." },
  { name: "Maine Coon", description: "One of the largest domestic cat breeds with a gentle temperament." },
  { name: "British Shorthair", description: "Characterized by their round face and dense, plush coat." },
  { name: "Scottish Fold", description: "Famous for their unique folded ears and owl-like appearance." },
];

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const Index = () => {
  const [funFact, setFunFact] = useState("Cats sleep for about 70% of their lives.");
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const generateFunFact = () => {
    const facts = [
      "A group of cats is called a clowder.",
      "Cats have over 20 vocalizations, including the meow.",
      "A cat's nose print is unique, like a human's fingerprint.",
      "Cats can jump up to six times their length.",
      "The first cat in space was French. Her name was Felicette.",
    ];
    setIsFlipped(true);
    setTimeout(() => {
      setFunFact(facts[Math.floor(Math.random() * facts.length)]);
      setIsFlipped(false);
    }, 300);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const sections = ["Home", "Characteristics", "Gallery", "Breeds", "Fun Facts"];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-b from-purple-100 to-pink-100"}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md bg-purple-600 text-white p-4">
        <ul className="flex justify-center space-x-6">
          {sections.map((section, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={`text-white ${activeSection === index ? 'bg-purple-700' : ''}`}
                onClick={() => setActiveSection(index)}
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${catImages[0]})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white mb-6 flex items-center"
          >
            <Cat className="mr-4 h-16 w-16" /> All About Cats
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-24"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl mb-12 text-center"
        >
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-semibold mb-8 text-center"
        >
          Characteristics of Cats
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {catCharacteristics.map((char, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg flex items-center transition-all duration-300 ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-purple-100"}`}
              whileHover={{ scale: 1.05 }}
            >
              {char.icon}
              <span className="ml-4">{char.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-8 text-center"
        >
          Cat Gallery
        </motion.h2>
        <Carousel className="mb-16">
          <CarouselContent>
            {catImages.map((img, index) => (
              <CarouselItem key={index}>
                <motion.img 
                  src={img}
                  alt={`Cat ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-8 text-center"
        >
          Popular Cat Breeds
        </motion.h2>
        <Accordion type="single" collapsible className="mb-16">
          {catBreeds.map((breed, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{breed.name}</AccordionTrigger>
              <AccordionContent>{breed.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-8 text-center"
        >
          Cat Fun Fact
        </motion.h2>
        <Card className={`mb-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={funFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl mb-4"
              >
                {funFact}
              </motion.div>
            </AnimatePresence>
            <Button
              onClick={generateFunFact}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold"
            >
              Generate New Fact <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl italic text-center mb-16"
        >
          Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
        </motion.p>
      </motion.div>

      <footer className={`py-12 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p>We're passionate about cats and dedicated to sharing knowledge about these amazing creatures.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Cat Care Tips</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-2">Stay updated with our latest cat facts and tips!</p>
              <input type="email" placeholder="Enter your email" className="w-full p-2 mb-2 rounded" />
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold">Subscribe</Button>
            </div>
          </div>
          <div className="flex justify-between items-center border-t pt-8">
            <p>&copy; 2023 All About Cats</p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer" />
              <Twitter className="h-6 w-6 cursor-pointer" />
              <Instagram className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full shadow-lg"
      >
        {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </motion.button>
    </div>
  );
};

export default Index;
