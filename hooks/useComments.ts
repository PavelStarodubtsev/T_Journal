import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CommentItem } from '../utils/api/types';
import { Api } from '../utils/api';

type UseCommentsProps = {
  setComments: Dispatch<SetStateAction<CommentItem[]>>;
  comments: CommentItem[];
};

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<CommentItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId);
        setComments(arr);
      } catch (error) {
        console.warn('Fetch Comments', error);
      }
    })();
  }, []);

  return { comments, setComments };
};
