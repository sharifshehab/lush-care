import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Breadcrumb from "../shared/breadcrumb";

const BookedServices = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: myBookings = [], isPending, refetch } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booked-services?email=${user.email}&role=customer`);
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
            <Helmet><title>LushCare - Booked Services</title></Helmet>
            <main>
                <Breadcrumb></Breadcrumb>
                <section className="container mx-auto px-4 min-h-screen">
                    <SectionTitle firstTitle="my" secondTitle="bookings"></SectionTitle>
                    <div className="overflow-x-auto mt-14">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-sm dark:text-white">
                                    <th>Service Name</th>
                                    <th>Service Date</th>
                                    <th>Service Price</th>
                                    <th>Service Status</th>
                                    <th>Service Provider Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {myBookings.length === 0 ? <tr><td className="text-center py-4" colSpan="6"><h2 className="text-lg text-primaryColor">no booking is available</h2></td></tr>
                                    : myBookings.map(booking =>
                                        <tr key={booking._id} className="dark:text-primaryColor">
                                            <td>{booking.serviceName}</td>
                                            <td>{booking.date}</td>
                                            <td>$ {booking.servicePrice}</td>
                                            <td>{booking.serviceStatus}</td>
                                            <td>{booking.providerEmail}</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BookedServices;