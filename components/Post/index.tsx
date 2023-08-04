import React, { FC } from 'react';
import { IconButton, Paper, Typography } from '@material-ui/core';
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from '@material-ui/icons';

import styles from './Post.module.scss';

export const Post: FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…
      </Typography>
      <Typography className="mt-10 mb-15">
        Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…
      </Typography>
      <img
        src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        height={500}
        width={600}
      />

      <ul className={styles.actions}>
        <li>
          <IconButton>
            <CommentsIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <RepostIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </li>
      </ul>

      <ul>
        
      </ul>
    </Paper>
  );
};
