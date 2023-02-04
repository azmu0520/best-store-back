import React, { useState } from 'react';
import { Container } from './style';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';
import { useBlogContext } from '../../context/Blog';
import CardBlog from './Card';

export const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [{ allBlog }, dispatch] = useBlogContext();

  const { request } = useAxios();

  useQuery(['getBlog'], () => request({ url: '/' }), {
    onSuccess: (res) => {
      dispatch({ type: 'getAllBlog', payload: { data: res?.data?.data } });
      setLoading(false);
    },
    onError: (err) => console.log(err, 'getBlog'),
  });

  return (
    <Container>
      <Container.Header className='header'>
        <span className='span'>Yangiliklar</span> & Blog
      </Container.Header>
      <Container.Text className='text'>
        A collection of websites and projects built with Webbrain UI
      </Container.Text>
      {loading ? (
        <h1>Loading....</h1>
      ) : allBlog === undefined ? (
        <h1>NoData</h1>
      ) : (
        allBlog?.map((value) => {
          return <CardBlog value={value} key={value._id} />;
        })
      )}
    </Container>
  );
};

export default Blog;
