import { useState } from "react";
import { Cat, Paw, Heart, Eye, Ear, MessageCircle, ChevronDown, ChevronUp, Facebook, Twitter, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

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

const Index = () => {
  const [funFact, setFunFact] = useState("Cats sleep for about 70% of their lives.");

  const generateFunFact = () => {
    const facts = [
      "A group of cats is called a clowder.",
      "Cats have over 20 vocalizations, including the meow.",
      "A cat's nose print is unique, like a human's fingerprint.",
      "Cats can jump up to six times their length.",
      "The first cat in space was French. Her name was Felicette.",
    ];
    setFunFact(facts[Math.floor(Math.random() * facts.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6 flex items-center">
            <Cat className="mr-4 h-12 w-12" /> All About Cats
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-xl mb-8 text-center">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-center">Characteristics of Cats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {catCharacteristics.map((char, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
              {char.icon}
              <span className="ml-4">{char.text}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Cat Breeds</h2>
        <Accordion type="single" collapsible className="mb-12">
          {catBreeds.map((breed, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{breed.name}</AccordionTrigger>
              <AccordionContent>{breed.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h2 className="text-3xl font-semibold mb-6 text-center">Cat Fun Fact</h2>
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">{funFact}</p>
            <button
              onClick={generateFunFact}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
            >
              Generate New Fact
            </button>
          </CardContent>
        </Card>

        <p className="text-lg italic text-center">
          Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
        </p>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 All About Cats</p>
          <div className="flex space-x-4">
            <Facebook className="h-6 w-6 cursor-pointer" />
            <Twitter className="h-6 w-6 cursor-pointer" />
            <Instagram className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
