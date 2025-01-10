import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Breadcrumb from "../shared/breadcrumb";

const ServiceToDo = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: myBookings = [], isPending, refetch } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booked-services?email=${user.email}&role=provider`);
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

    if (isPending) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg text-primaryColor"></span>
        </div>
    }
    
    return (
        <>
            <Helmet><title>LushCare - Scheduled Services</title></Helmet>
            <main>
                <Breadcrumb></Breadcrumb>
                <section className="container mx-auto px-4 min-h-screen">
                    <SectionTitle firstTitle="Scheduled" secondTitle="services"></SectionTitle>
                    <div className="overflow-x-auto mt-14 pb-32">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-sm dark:text-white">
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
                                {
                                    myBookings.length === 0 ? <tr><td className="text-center py-4" colSpan="6"><h2 className="text-lg text-primaryColor">no services is scheduled</h2></td></tr>
                                        :
                                        myBookings.map(booking =>
                                            <tr key={booking._id} className="dark:text-primaryColor">
                                                <td>{booking.serviceName}</td>
                                                <td>{booking.date}</td>
                                                <td>$ {booking.servicePrice}</td>
                                                <td>{booking.serviceStatus}</td>
                                                <td>{booking.customerEmail}</td>
                                                <td>
                                                    <select onChange={(e) => handleAction(booking._id, e.target.value)} defaultValue={booking.serviceStatus} className="select select-bordered w-full max-w-xs" disabled={booking.serviceStatus === "completed"}>
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
        </>
    );
};

export default ServiceToDo;