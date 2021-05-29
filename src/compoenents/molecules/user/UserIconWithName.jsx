import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { name, image } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SUserIcon>
      <img alt={name} src={image} />
      <p>{name}</p>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SUserIcon>
  );
};

const SUserIcon = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
    height: 160px;
    width: 160px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
    color: #40514e;
  }
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
