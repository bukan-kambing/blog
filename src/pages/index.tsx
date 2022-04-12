import React from 'react';

import { GetStaticProps } from 'next';

import { IBlogGalleryProps } from '../blog/BlogGallery';
import Hero from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Home" description={AppConfig.description} />}>
    <Hero />
    {/* <BlogGallery posts={props.posts} pagination={props.pagination} /> */}
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'image', 'description']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
