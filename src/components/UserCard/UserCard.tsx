import "./style.css";

interface UserCardProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
}

export function UserCard(props: UserCardProps) {
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
