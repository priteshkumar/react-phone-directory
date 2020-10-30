import React from 'react';

function GetCriteria(msg){
    return <span style={{fontSize:"160%",fontWeight:"550"}}>{msg}</span>;
}

const Msg1 = GetCriteria("Minimum 8 characters long");
const Msg2 = GetCriteria("Atleast 1 special character");
const Msg3 = GetCriteria("Atleast 1 number");
const Msg4 = GetCriteria("Atleast 1 capital letter");

const StrengthCriteria = function(){
    return (
        <div>
        {Msg1}
        <br/>
        {Msg2}
        <br/>
        {Msg3}
        <br/>
        {Msg4}
        <br/>
        </div>
        );
}

export default StrengthCriteria;