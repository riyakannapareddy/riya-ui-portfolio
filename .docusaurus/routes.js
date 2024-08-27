import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about-me',
    component: ComponentCreator('/about-me', 'e1a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '303'),
    exact: true
  },
  {
    path: '/blog/another-example--post',
    component: ComponentCreator('/blog/another-example--post', 'a30'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/example-blog-post',
    component: ComponentCreator('/blog/example-blog-post', '276'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/freeform',
    component: ComponentCreator('/blog/tags/freeform', '488'),
    exact: true
  },
  {
    path: '/blog/tags/wordjournal',
    component: ComponentCreator('/blog/tags/wordjournal', 'b0f'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b68'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'eb1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
