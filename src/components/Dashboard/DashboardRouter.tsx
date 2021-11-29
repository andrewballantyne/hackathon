import * as React from 'react';
import { useLocation, matchPath } from 'react-router-dom';

type Props = {
  basePath: string;
  children: (selectedTab: string | undefined) => JSX.Element;
};

const DashboardRouter: React.FC<Props> = ({ basePath, children }) => {
  const { pathname } = useLocation();
  const match = matchPath(`${basePath}:id`, pathname);
  const id = match?.params?.id;
  return children(id);
};

export default DashboardRouter;
