import React from "react";

const Row = ({ number }) => {
  return (
    <tr>
      <th scope="row">
        <div clasName="form-floating">
          <textarea
            className="form-control text-area"
            placeholder={number}
            id="floatingTextarea2"
          ></textarea>
        </div>
      </th>
      <td>
        <div class="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </td>
    </tr>
  );
};

export default Row;
