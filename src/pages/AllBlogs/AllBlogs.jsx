import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import Breadcrumb from "../shared/breadcrumb";
import img1 from "../../assets/new1.jpg";
import img2 from "../../assets/new2.jpg";
import img3 from "../../assets/new3.jpg";
import SinglePost from "../Home/Blog/SinglePost";

const AllBlogs = () => {
    return (
        <>
            <Helmet><title>LushCare - All Services</title></Helmet>
            <main>
                <Breadcrumb title="Insight on gardening"></Breadcrumb>
                <section className="container mx-auto px-4 min-h-screen">
                    <SectionTitle firstTitle="all" secondTitle="blogs"></SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mb-40">
                        <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img1} animationDelay={200}></SinglePost>
                        <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img2} animationDelay={500}></SinglePost>
                        <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img3} animationDelay={800}></SinglePost>
                        <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img1} animationDelay={200}></SinglePost>
                        <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img2} animationDelay={500}></SinglePost>
                        <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img3} animationDelay={800}></SinglePost>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AllBlogs;