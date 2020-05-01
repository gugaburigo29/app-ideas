import React from "react";

export const Key = ({name, onClick, double}) =>
    <div className={`calculator-key ${double ? "--double" : ""}`} onClick={onClick}>{name}</div>;
