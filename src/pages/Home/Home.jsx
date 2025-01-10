import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import PopularServices from './PopularServices/PopularServices';
import Hero from './Hero/Hero';
import { Helmet } from 'react-helmet-async';
import About from './About/About';
import Blog from './Blog/Blog';
import { useEffect } from 'react';

const Home = () => {
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { data: services = [], isPending } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/services?limit=8');
      return res.data;
    }
  });

  if (isPending) {
    return <div className="flex items-center justify-center h-screen">
      <span className="loading loading-ring loading-lg text-primaryColor"></span>
    </div>
  }

  return (
    <>
      <Helmet><title>LushCare - Home</title></Helmet>
      <main>
        <Hero></Hero>
        <About></About>
        <PopularServices services={services}></PopularServices>
        <Blog></Blog>
      </main>
    </>
  );
};

export default Home;