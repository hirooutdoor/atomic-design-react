import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;

  return (
    <Card>
      <UserIconWithName
        image={user.image}
        name={user.name}
        alt={user.name}
        isAdmin={isAdmin}
      />
      <SDL>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>URL</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 40px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
