import { useState, useEffect } from "react";
import { Cat, Paw, Heart, Eye, Ear, MessageCircle, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Sun, Moon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-b from-purple-100 to-pink-100"}`}>
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
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <p className="text-xl mb-8 text-center">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </p>

        <h2 className="text-4xl font-semibold mb-8 text-center">Characteristics of Cats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {catCharacteristics.map((char, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg flex items-center transition-all duration-300 ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-purple-100"}`}
              whileHover={{ scale: 1.05 }}
            >
              {char.icon}
              <span className="ml-4">{char.text}</span>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-semibold mb-8 text-center">Cat Gallery</h2>
        <div className="grid grid-cols-2 gap-4 mb-16">
          {catImages.map((img, index) => (
            <motion.img 
              key={index}
              src={img}
              alt={`Cat ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>

        <h2 className="text-4xl font-semibold mb-8 text-center">Popular Cat Breeds</h2>
        <Accordion type="single" collapsible className="mb-16">
          {catBreeds.map((breed, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{breed.name}</AccordionTrigger>
              <AccordionContent>{breed.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h2 className="text-4xl font-semibold mb-8 text-center">Cat Fun Fact</h2>
        <Card className={`mb-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <CardContent className="p-6">
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="text-xl mb-4">{funFact}</p>
                </div>
                <div className="flip-card-back">
                  <p className="text-xl mb-4">{funFact}</p>
                </div>
              </div>
            </div>
            <button
              onClick={generateFunFact}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Generate New Fact
            </button>
          </CardContent>
        </Card>

        <p className="text-xl italic text-center mb-16">
          Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
        </p>
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
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-full">Subscribe</button>
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

      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full shadow-lg"
      >
        {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default Index;
