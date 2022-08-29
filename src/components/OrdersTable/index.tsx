import { profilePics } from "../../utils/profilepics";
import Button from "../Button";
import { ProfileImage, TableContainer } from "./styles";


function getRandomProfileImage(items: [string]) {
  return items[Math.floor(Math.random() * items.length)];
}

function OrdersTable() {
  return (
    <>
      <TableContainer className="row mx-3 p-3">
        <div className="col d-flex justify-content-start">
          <ProfileImage>
            <img
              height={45}
              width={45}
              src={getRandomProfileImage(profilePics)}
            ></img>
          </ProfileImage>
        </div>

        <div className="col align-items-center">
          <div className="row justify-content-center">Titulo</div>
          <div className="row justify-content-center">texto</div>
          <div className="row justify-content-center">texto2</div>
        </div>

        <div className="col d-flex justify-content-end">
          <Button types={"tableButton"}>
            <i className="bi bi-pencil-square"></i>
          </Button>
        </div>
      </TableContainer>
    </>
  );
}

export default OrdersTable;
