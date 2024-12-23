
const TableRow = ({ service, handleDelete, handleModal }) => {
    const { _id, name, image, area, price, description } = service;
    return (
            <tr>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt={name} />
                        </div>
                    </div>
                </td>{/* image */}
                <td>
                    <h4>{name}</h4>
                </td>{/* name */}
                <td>
                    <p>{area}</p>
                </td>{/* area */}
                <td>
                    <span>${price}</span>
                </td>{/* price */}
                <td className="hidden md:table-cell w-1/5">
                    <p>{description}</p>
                </td>{/* description */}
                <th>
                    <div className="flex flex-col md:flex-row items-center gap-x-2">
                        <button onClick={() => handleModal(_id)} className="btn btn-neutral bg-primaryColor rounded-none text-white btn-xs">Edit</button>
                        <span className="hidden md:table-cell">|</span>
                        <span className="table-cell md:hidden">-</span>
                    <button onClick={() => handleDelete(_id)} className="btn btn-warning rounded-none btn-xs">Delete</button>
                    </div>
                </th>{/* action */}
            </tr>
    );
};

export default TableRow;