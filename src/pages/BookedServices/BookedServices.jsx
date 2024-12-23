import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const BookedServices = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: myBookings = [], isPending, refetch } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked-services?email=${user.email}`);
            return res.data;
        }
    });
    console.log(myBookings);
    return (
        <main>
            <section className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Date</th>
                                <th>Service Price</th>
                                <th>Service Status</th>
                                <th>Service Provider Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {myBookings.map(booking =>
                                <tr key={booking._id}>
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
    );
};

export default BookedServices;