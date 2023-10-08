import React from "react";

type prop = {
    children: React.ReactNode;
};

const HText = ({ children }: props) => {
    return (
        <h1 className="basis-3/5 font-monserrat text-3xl font-bold" >
            {children}
        </h1>
    );
};
export default HText