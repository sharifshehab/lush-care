import SinglePost from "./SinglePost";
import img1 from "../../../assets/new1.jpg";
import img2 from "../../../assets/new2.jpg";
import img3 from "../../../assets/new3.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Blog = () => {
    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="news" secondTitle="blog"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-40 mt-10">
                <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img1} animationDelay={200}></SinglePost>
                <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img2} animationDelay={500}></SinglePost>
                <SinglePost tag="clients, case-study" title="Dolor sit amet adipis slcin elit sed eiusmod temp incididunt" time={15} image={img3} animationDelay={800}></SinglePost>
            </div>
        </section>
    );
};

export default Blog;