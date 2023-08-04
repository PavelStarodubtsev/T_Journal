import React, { FC } from 'react';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, contentFullWidth, hideComments }) => {
  return (
    <div className={clsx('wrapper')}>
      <div className="leftSide">
        <LeftMenu />
      </div>

      <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
