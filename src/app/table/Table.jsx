import * as React from "react";
import { TRANSACTIONS } from "../../data/data";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ActiveButton from "../../shared-component/ActiveButton";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("date", {
    header: (
      <div>
        <p>Date</p>
      </div>
    ),
    size: 200,

    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("remark", {
    header: (
      <div>
        <p>Remake</p>
      </div>
    ),
    size: 200,

    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("amount", {
    header: (
      <div>
        <p>Amount</p>
      </div>
    ),
    size: 200,

    cell: (info) => <p>${info.getValue()}</p>,
  }),
  columnHelper.accessor("currency", {
    header: (
      <div>
        <p>Currency</p>
      </div>
    ),
    size: 200,

    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("type", {
    header: (
      <div>
        <p>Type</p>
      </div>
    ),
    size: 200,

    cell: (info) => (
      <p>
        <ActiveButton prop={info.getValue()} />
      </p>
    ),
  }),
];

export default function Table() {
  const [data, _setData] = React.useState(() => [...TRANSACTIONS]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="border border-gray-400  rounded-md w-full overflow-x-auto">
        <table
          className="w-full border rounded-md border-gray-200 table-auto"
         
        >
          <thead className="bg-gray-100 border-b border-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-gray-400">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-900 "
                  >
                    <div className="">
                      <p>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </p>
                      <div>
                        <input
                          class="px-1 py-1 border"
                          placeholder="Search..."
                          type="text"
                          value=""
                        />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="tbody">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition-colors border-b border-gray-200 bg-white"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 text-sm text-gray-900 "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
