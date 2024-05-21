"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// FAQS DATA
const FAQsData = [
  {
    id: 1,
    question: 'What froyo flavours are there?',
    answer: 'We have Original, Strawberry, Blueberry, Chocolate, Mango and Coffee flavoured froyo ice cream.',
  },
  {
    id: 2,
    question: 'When is the earliest you could send for an event?',
    answer: 'Confirm your booking 2 days before the event to ensure there is stock available.',
  },
  {
    id: 3,
    question: 'Can I make a reservation for a large group or special event?',
    answer: 'Absolutely! We welcome reservations for large groups and special occasions. Please contact us in advance to make arrangements.',
  },
  {
    id: 4,
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer delivery services. You can place your order online or give us a call for delivery options.',
  },
  {
    id: 5,
    question: 'Which area do you cover?',
    answer: 'We cover for Bangi, Kajang and Cyberjaya.',
  },
]

const FAQs = () => {
  return (
    <section>

      {/* FAQs CONTENT */}
      <div className='bg-black text-white flex flex-col justify-center items-center border-y py-[70px]'>
        <h1 className="justify-center text-center mb-5 text-2xl font-bold leading-none uppercase md:text-3xl py-[20px]">
          frequently asked questions
        </h1>
        <div className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] justify-center items-center block">

          {/* FAQs QUESTI0N & ANSWER */}
          {FAQsData.map((item, index) => (
            <Accordion key={index} type="single" collapsible className='py-[10px]'>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs 