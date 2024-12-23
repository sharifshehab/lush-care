import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import PopularServices from './PopularServices/PopularServices';

const Home = () => {
  const axiosPublic = useAxiosPublic();

  const { data: services = [], isPending } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/services?limit=6');
      return res.data;
    }
  });

    return (
        <main>
        <PopularServices services={services}></PopularServices>
        </main>
    );
};

export default Home;