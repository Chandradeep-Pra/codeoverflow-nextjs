import Homefilters from "@/components/home/Homefilters";
import QuestionPostCard from "@/components/home/QuestionPostCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import posts from "@/constants/posts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex flex-col justify-between gap-4 sm:flex-row">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for questions"
          addinClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClass="hidden max-md:flex"
        />
      </div>
      <Homefilters />
      <div className="mt-10 flex w-full  flex-col gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <QuestionPostCard
              _id={post._id}
              key={post._id}
              question={post.question}
              tags={post.tags}
              author={post.author}
              upVotes={post.upVotes}
              views={post.views}
              answers={post.answers}
              createdAt={post.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
