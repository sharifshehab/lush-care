import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";
import Swal from "sweetalert2";

const ManageServices = () => {
    const { user } = useAuth();
    // TODO: use axios secure
    const axiosPublic = useAxiosPublic();

    const { data: myService = [], isPending, refetch } = useQuery({
        queryKey: ['services', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/services?email=${user.email}`);
            return res.data;
        }
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#87b303",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.delete(`/service/${id}`)
                    .then(res => {
                        console.log();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#87b303"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <main>
            <section className="container mx-auto">
                <SectionTitle firstTitle="my" secondTitle="service"></SectionTitle>
                <div className="overflow-x-auto mt-16">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Area</th>
                                <th>Price</th>
                                <th className="hidden md:table-cell">Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myService.map(service => <TableRow key={service._id} service={service} handleDelete={handleDelete}></TableRow>)}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default ManageServices;