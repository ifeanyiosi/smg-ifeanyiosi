import React from "react";
import TableRows from "./Table-rows";

const Table = ({
  handleId,
  handleOnePost,
  setDisplayState,
  dataBase,
  tableHead,
}) => {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="text-slate-400 text-sm font-bold py-4 text-left pl-6">
            {tableHead.id}
          </th>
          <th className="text-slate-400 text-sm font-bold py-4 text-left w-16">
            {tableHead.title}
          </th>

          {/* To conditionally display the header based on which page we are on */}
          <th className="text-slate-400 text-sm font-bold py-4 text-left">
            {tableHead.name || tableHead.owner}
          </th>

          {/* To conditionally display the likes header if it is available*/}
          {tableHead.likes && (
            <th className="text-slate-400 text-sm font-bold py-4 text-left">
              {tableHead.likes}
            </th>
          )}

          {/* To conditionally display the published header if it is available*/}
          {tableHead.published && (
            <th className="text-slate-400 text-sm font-bold py-4 text-left">
              {tableHead.published}
            </th>
          )}
          <th className="text-slate-400 text-sm font-normal py-4 text-left w-8"></th>
        </tr>
      </thead>
      <tbody>
        {dataBase &&
          dataBase.map((datum) => {
            return (
              <TableRows
                key={datum.id}
                data={datum}
                handleId={handleId}
                handleOnePost={handleOnePost}
                setDisplayState={setDisplayState}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
