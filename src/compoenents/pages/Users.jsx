import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

export const Users = () => {
  return (
    <SContainer>
      <h2>All Users</h2>
      <SearchInput />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
