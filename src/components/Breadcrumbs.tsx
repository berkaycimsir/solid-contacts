import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@hope-ui/solid';
import { Link, useLocation } from '@solidjs/router';
import { Component } from 'solid-js';
import { getLocationNameFromRoute } from '../utils/helpers';

const Breadcrumbs: Component = () => {
  const location = useLocation();

  return (
    <Breadcrumb fontWeight={800} mb="$6">
      <BreadcrumbItem>
        <BreadcrumbLink
          color={location.pathname === '/' ? '$info10' : '$neutral11'}
          _focus={{ boxShadow: 'none' }}
          as={Link}
          href="/"
        >
          Home
        </BreadcrumbLink>
        {location.pathname === '/' && <BreadcrumbSeparator />}
      </BreadcrumbItem>
      {location.pathname !== '/' && (
        <BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbLink color="$info10" currentPage>
            {getLocationNameFromRoute(location.pathname)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
