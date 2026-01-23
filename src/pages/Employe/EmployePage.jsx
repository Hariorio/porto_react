import React from 'react'


const Employe = () => {
  return (
   <div className="p-6">
      <div className="card overflow-x-auto">
        <h2 className="card-title mb-4">Daftar Karyawan</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left text-sm text-slate-700">
              <th className="px-4 py-3 border-b">#</th>
              <th className="px-4 py-3 border-b">Nama</th>
              <th className="px-4 py-3 border-b">Email</th>
              <th className="px-4 py-3 border-b">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <tr className="hover:bg-slate-50">
              <td className="px-4 py-3 border-b">1</td>
              <td className="px-4 py-3 border-b">Ahmad</td>
              <td className="px-4 py-3 border-b">ahmad@email.com</td>
              <td className="px-4 py-3 border-b">
                <span className="inline-block rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
                  Aktif
                </span>
              </td>
            </tr>

            <tr className="hover:bg-slate-50">
              <td className="px-4 py-3 border-b">2</td>
              <td className="px-4 py-3 border-b">Dani</td>
              <td className="px-4 py-3 border-b">dani@email.com</td>
              <td className="px-4 py-3 border-b">
                <span className="inline-block rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-medium">
                  Nonaktif
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Employe