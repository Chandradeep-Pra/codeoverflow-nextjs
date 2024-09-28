import React from "react";
import Rendertags from "../shared/Rendertags";
import Image from "next/image";
import Link from "next/link";
import Metrics from "../shared/Metrics";
import { formatNumber, getTimeStamp } from "@/lib/utils";

interface PostProps {
  _id: string;
  question: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    pic: string;
  };
  upVotes: number;
  views: number;
  answers: Array<Object>;
  createdAt: Date;
}

const QuestionPostCard = ({
  _id,
  question,
  tags,
  author,
  upVotes,
  views,
  answers,
  createdAt,
}: PostProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {question}
            </h3>
          </Link>
        </div>
        {/* if signed-in render edit and delete option */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Rendertags _id={tag._id} name={tag.name} key={tag._id} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
      <Metrics 
            imgUrl={author.pic}
            alt="User"
            value={author.name}
            title={` - asked ${getTimeStamp(createdAt)}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyles="body-medium text-dark400_light700"
        />
        <Metrics 
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatNumber(upVotes)}
            title=' Votes'
            textStyles="small-medium text-dark400_light800"
        />
        <Metrics 
            imgUrl="/assets/icons/message.svg"
            alt="Answers"
            value={answers.length}
            title=' Answers'
            textStyles="small-medium text-dark400_light800"
        />
        <Metrics 
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatNumber(views)}
            title=' Views'
            textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionPostCard;
