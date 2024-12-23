import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ServiceToDo = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: myBookings = [], isPending, refetch } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked-services?email=${user.email}`);
            return res.data;
        }
    });


    const handleAction = (id, status) => {

        axiosPublic.patch(`/booked-services/change-status/${id}`, { status })
            .then(res => {
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Service Status Changed",
                        text: "Service status changed successfully",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
        })
    }

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
                                <th>Customer Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {myBookings.map(booking =>
                                <tr key={booking._id}>
                                    <td>{booking.serviceName}</td>
                                    <td>{booking.date}</td>
                                    <td>$ {booking.servicePrice}</td>
                                    <td>{booking.serviceStatus}</td>
                                    <td>{booking.customerEmail}</td>
                                    <td>
                                        <select onChange={(e) => handleAction(booking._id, e.target.value)} defaultValue={booking.serviceStatus} className="select select-bordered w-full max-w-xs">
                                            <option value="pending">pending</option>
                                            <option value="working">working</option>
                                            <option value="completed">completed</option>
                                        </select>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default ServiceToDo;