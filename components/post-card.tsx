import { Card, CardHeader, CardBody, Avatar, Divider } from "@nextui-org/react";
import Image from "next/image";
import { formatDate } from "../utils/formatDate";
import { Post, Author } from "@/types";

type Props = {
  post: Post;
  author?: Author;
};

const PostCard = ({ post, author }: Props) => {
  return (
    <Card className="w-full mb-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="sm" src={author?.avatar_url} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              <span className="text-[#F8441C]">{author?.name}</span>
              <span className="text-[#939FAA] text-small">
                &nbsp;posted on {formatDate(post.created_at)}&nbsp;
              </span>
            </h4>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              loading="lazy"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "200px" }}
              alt="Post"
              src={post.image_url}
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 mb-4">
                  {post.title}
                </h3>
                <p className="text-small text-foreground/80">{post.body}</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostCard;
