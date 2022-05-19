import React from 'react';
import { useRouter } from 'next/router';

const BlogPage = () => {
  const { locale } = useRouter();

  return <div>{locale == 'en-US' ? 'Blog Page' : 'صفحة المقالات'}</div>;
};

export default BlogPage;
