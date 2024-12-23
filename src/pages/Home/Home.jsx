import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import PopularServices from './PopularServices/PopularServices';
import Hero from './Hero/Hero';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const axiosPublic = useAxiosPublic();

  const { data: services = [], isPending } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/services?limit=6');
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
        <PopularServices services={services}></PopularServices>
      </main>
    </>
  );
};

export default Home;