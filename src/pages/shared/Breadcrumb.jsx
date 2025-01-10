
const Breadcrumb = ({ title = "Professional care for your outdoor"}) => {
    return (
        <div className="py-36 bg-breadcrumb bg-no-repeat bg-cover relative">
            <div className="absolute inset-0 bg-black bg-opacity-50">
            </div>
            <div className="relative z-10 text-center text-white">
                <h3 className="text-2xl md:text-4xl font-bold uppercase">{title}</h3>
                    <p className="mt-4 underline underline-offset-4 text-base md:text-lg">By LushCare</p>
            </div>
        </div>
    );
};

export default Breadcrumb;