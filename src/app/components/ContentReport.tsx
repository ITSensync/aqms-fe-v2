import React from "react";

export default function ContentReport() {
  return (
    <div className="p-6">
      <div className="bg-blue-light p-4 rounded-box opacity-85 mb-4">
        <p className="font-sf-pro-rounded text-2xl font-bold text-white">
          Report Parameter Kualitas Udara
        </p>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-blue-light opacity-85">
        <table className="table text-white font-sf-pro-rounded">
          {/* head */}
          <thead className="text-zinc-100 font-light">
            <tr>
              <th></th>
              <th>Waktu</th>
              <th>PM10</th>
              <th>PM25</th>
              <th>HC</th>
              <th>SO2</th>
              <th>NO2</th>
              <th>O3</th>
              <th>CO</th>
              <th>Kec. Angin</th>
              <th>Arah Angin</th>
              <th>Suhu</th>
              <th>Kelembapan</th>
              <th>Tekanan</th>
              <th>Curah Hujan</th>
              <th>Radiasi</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
