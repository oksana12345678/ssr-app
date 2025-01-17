import React from 'react';
import clsx from 'clsx';
import { UserPostsTypes } from '@/types/main-types';
import Image from 'next/image';

export interface PostsProps extends UserPostsTypes {
  className?: string;
  titleStyle?: string;
  imageStyle?: string;
  contentStyle?: string;
}

async function Post({
  title,
  content,
  publishedAt,
  status,
  image,
  imageStyle,
  className,
  titleStyle,
  contentStyle,
  category,
}: PostsProps) {
  return (
    <div
      className={clsx(
        'rounded-lg p-4 max-w-3xl  mx-auto flex gap-4  flex-col',
        className
      )}
    >
      <div className={clsx(' h-auto rounded ', imageStyle)}>
        <Image width={192} height={100} src={image} alt={title} />
      </div>
      {status && publishedAt && (
        <p className="text-gray-600 font-mono text-xs">
          {status}:{publishedAt}
        </p>
      )}
      <div className={clsx('flex flex-col gap-4', contentStyle)}>
        <h2 className={clsx(' ', titleStyle)}>{title}</h2>
        {category && (
          <p className="text-gray-600 font-mono text-xs">
            Category: {category}
          </p>
        )}
        {content && <p className="text-gray-900">{content}</p>}
      </div>
    </div>
  );
}

export default Post;
