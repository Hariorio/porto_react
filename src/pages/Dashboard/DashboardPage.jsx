import React, { useState } from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
const DashboardPage = () => {
const [isi, setIsi] = useState ({ name: "", alamat: "" });

function handleKetik(i) {
    if (i.target.name === "name") {
        setIsi((prev) => ({ name: i.target.value, alamat: prev.alamat }));
        // console.log(i.target.value);
         return;
    }

    if (i.target.name === "alamat") {
      setIsi((prev) => ({ alamat: i.target.value, name: prev.name,}));
    //   console.log(i.target.value)
      return;
    }
    // console.log(i.target.id);
}

function subMitBtn() {
   const payload = {
    name:isi.name,
    alamat:isi.alamat
   };
   console.log(payload);
}

return (
   <div>
    <div className="flex flex-wrap gap-1 p-2 mx-auto">
        <Card className="lg:w-73 !p-0 overflow-hidden hover:bg-gray-700">
            <div className="bg-red-500 px-4 py-3 ">
            <h2 className="text-lg text-white font-semibold">Form</h2>
            </div>
            <label  htmlFor='name' className="mt-2 ml-2 p-2 block text-sm font-medium">
                Nama
            </label>
              <input
                    id='name'
                    name='name'
                    value={isi.name}
                    onChange={handleKetik}
                    className="ml-2 m-2 w-68 rounded-md border p-2"
                    placeholder="ketik nama..."
                />
                <label  htmlFor='alamat' className="mt-2 ml-2 p-2 block text-sm font-medium">
                Alamat
                </label>
                <input
                    id='alamat'
                    name='alamat'
                    value={isi.alamat}
                    onChange={handleKetik}
                    className="ml-2 m-2 w-68 rounded-md border p-2"
                    placeholder="ketik alamat"
                />
                <div className="ml-45">
                <Button onClick={subMitBtn} className="p-2 m-2 bg-red-500">
                  <div>
                    Save
                  </div>  
                </Button>
                </div>
        </Card>
        <Card className="lg:w-73">
            <h2 className="text-lg font-semibold">Form</h2>
            <label className="mt-3 block text-sm font-medium">
                Nama
            </label>
              <input
                    className="mt-2 w-full rounded-lg border p-2"
                    placeholder="ketik nama..."
                />
                 <input
                    className="mt-2 w-full rounded-lg border p-2"
                    placeholder="alamat"
                />
        </Card>
        <Card className="lg:w-73">
            <h2 className="text-lg font-semibold">Form</h2>
            <label className="mt-3 block text-sm font-medium">
                Nama
            </label>
              <input
                    className="mt-2 w-full rounded-lg border p-2"
                    placeholder="ketik nama..."
                />
                 <input
                    className="mt-2 w-full rounded-lg border p-2"
                    placeholder="alamat"
                />
        </Card>
          <Card className="lg:w-73">
            <h2 className="text-lg font-semibold ">Form</h2>
            <label className="mt-3 block text-sm font-medium">
                Nama
            </label>
              <input
                    className="mt-2 w-full rounded-lg border p-2"
                    placeholder="ketik nama..."
                />
                 <input
                    className="mt-2 w-full rounded-lg border p-2"
                    placeholder="alamat"
                />
        </Card>
    </div>
    
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-lime-600 p-4 rounded-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-lime-600 p-4 rounded-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
          <div className="bg-red-600 p-4 rounded-t-lg shadow-xl hover:bg-gray-700">
            <h1 className="text-lg mb-px text-center text-white font-semibold">Judul Card</h1>
            <p className="mt-2 text-white text-center text-sm ">Isi card.</p>
        </div>
        </div>
   </div>
  )
}

export default DashboardPage