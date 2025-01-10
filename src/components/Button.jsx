
const Button = ({ text = "Show All"}) => {
    return (
        <button className="py-2 px-6 border border-primaryColor bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-300">{text}</button>
    );
};

export default Button;