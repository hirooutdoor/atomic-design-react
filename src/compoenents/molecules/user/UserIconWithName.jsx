import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { name, image } = props;
  return (
    <SUserIcon>
      <img alt={name} src={image} />
      <p>{name}</p>
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
