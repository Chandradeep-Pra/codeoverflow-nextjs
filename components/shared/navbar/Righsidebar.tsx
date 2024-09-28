import React from "react";
import Righticon from "@/public/assets/icons/chevron-right.svg"; // Using as a component
import Link from "next/link";
import Rendertags from "../Rendertags";

const topQuestions = [
  {
    id: 1,
    question:
      "How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?",
  },
  {
    id: 2,
    question:
      "What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?",
  },
  {
    id: 3,
    question:
      "Node.js res.json() and res.send(), not working but still able to change status code",
  },
  {
    id: 4,
    question: "How to center a div?",
  },
  {
    id: 5,
    question: "ReactJs or NextJs for beginners, I ask for advice",
  },
];

const popularTags = [
  { _id: '1', tag: "nextjs", count: 4, accentCol: '#0070f3' },
  { _id: '2', tag: "reactjs", count: 2, accentCol: '#61dafb' },
  { _id: '3', tag: "react", count: 2, accentCol: '#61dafb' },
  { _id: '4', tag: "postgres", count: 2, accentCol: '#336791' },
  { _id: '5', tag: "performance", count: 1, accentCol: '#28a745' },
  { _id: '6', tag: "graphql", count: 3, accentCol: '#e535ab' },
  { _id: '7', tag: "typescript", count: 2, accentCol: '#007acc' },
  { _id: '8', tag: "css", count: 1, accentCol: '#2965f1' },
  { _id: '9', tag: "docker", count: 1, accentCol: '#2496ed' },
  { _id: '10', tag: "api", count: 3, accentCol: '#f8f9fa' },
];



const Righsidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-24 text-dark-300 shadow-light-300 dark:text-light-900 dark:shadow-none max-xl:hidden">
      <div className="flex flex-col">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        {topQuestions && (
          <div className="mt-7 flex w-full flex-col gap-[30px]">
            {topQuestions.map((question) => (
              <Link
                href={`/questions/${question.id}`}
                key={question.id}
                className="flex w-full cursor-pointer items-center justify-between p-2"
              >
                <p className="body-medium text-dark500_light700 max-w-[80%] grow">
                  {question.question}
                </p>
                <Righticon className="invert-colors" width={20} height={20} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16">
        {/* Uncomment to render popular tags */}
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <Rendertags 
              key={tag._id}
              _id={tag._id}
              name={tag.tag}
              accentCol={tag.accentCol}
              totalQuestions={tag.count}
              showCount
            />

          ))}
        </div>
      </div>
    </section>
  );
};

export default Righsidebar;
