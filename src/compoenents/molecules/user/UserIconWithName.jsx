import React, { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
//import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { name, image } = props;
  //const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  console.log("UserIconWithName");

  return (
    <SUserIcon>
      <img alt={name} src={image} />
      <p>{name}</p>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SUserIcon>
  );
});

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
