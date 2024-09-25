import Rendertags from "@/components/shared/Rendertags";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import Searchbar from "@/components/shared/search/Searchbar";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";


const filters = ["Newest","Recommended","Frequent","Unanswered"] 

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient !text-light900 min-h-[46px] px-4 py-3">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 flex-col">
        <LocalSearchBar
            route="/"
            iconPosition="left"
            imgSrc = "/assets/icons/search.svg"
            placeHolder="Search for questions"
            addinClasses="flex-1"
        />
        <div className="flex">
            {filters.map((filter,index)=>(
                <Rendertags _id={index} name={filter} showCount/>
            ))}
        </div>
      </div>
    </>
  );
}
