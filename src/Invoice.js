import React from "react";

const Invoice = () => {
  const myData = [{
    SN: 1,
    Task:"run",
    Edit:"edit button",
    Delete:"Delete",
  }];

  return (
    <>
      <h1>TO DO LIST</h1>
      <form>
      <label>Product Name <input placeholder="Add Product" /></label>
      <label>Product Price <input placeholder="Product Price" /></label>
      <label>Product Quantites <input placeholder="Product Quantites" /></label>
      <button>Done</button>
      </form>

      <table>
        <thead>
          <th>S.no</th>
          <th>Task</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {
            myData.map((e)=><td>{e.SN}</td>)
          }

        </tbody>
      </table>
    </>
  );
};

export default Invoice;
