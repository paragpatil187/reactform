import { Tabledata } from "./Tabledata";
export const Table = ({ data, deleteData }) => {
  if (data === null) {
    return null;
  } else {
    return (
      <>
        {data.map((e, i) => {
          return <Tabledata key={i} data={e} deleteData={deleteData} />;
        })}
      </>
    );
  }
};