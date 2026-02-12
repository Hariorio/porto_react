import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Alert, { AlertSukses } from '../../components/Alert'
import Loading from '../../components/Loading'
import { api } from '../../lib/Api'
import { Pencil, Trash2 } from "lucide-react";



// Hardcode Data
const namex = [
  { value: "1", text: "Ade" },
  { value: "2", text: "Pace" },
  { value: "3", text: "Dan" },
  { value: "4", text: "Edo" },
];

const jeniskelamin = [
{value:"1" , text:"laki-laki"},
{value:"2" , text:"perempuan"},
{value:"3" , text:"lainya"}
];

const experiences = [
  {
    id: 1,
    period: "Nov 2023 - Sekarang",
    title: "STAFF IT LEAD (FullStack Developer)",
    company: "PT. Kosmetika Klinik Indonesia (MS GLOW OFFICE)",
  },
  {
    id: 2,
    period: "Feb 2022 - Nov 2023",
    title: "STAFF IT (FullStack Developer)",
    company: "PT. Viva Kencana Investindo",
  },
  {
    id: 3,
    period: "Aug 2021 - Aug 2022",
    title: "STAFF IT (FullStack Developer)",
    company: "Wava Husada Hospital",
  },
];


const DashboardPage = () => {

// Form
const [isi, setIsi] = useState ({ name: "", alamat: "" });
const [jenis, setJenis] = useState({value:""});
const [alamatIsi, setAlamatisiberubah] = useState ({alamat:""});
const [nilaiAwal, setAmbildannilaiberubah] = useState ({text:""});

// Alert
const [showAlert, setShowAlert] = useState (false);
const [alertPesan, setAlertPesan] = useState ("");
const [sukses, setSukses] = useState("");

// Loading
const [loading, setLoading] = useState(false); 


// API

const [datas, setDatas] = useState ([]);
const [kota, setKota] = useState([]);
const [error, setError] = useState("");

const [Result, SetResult] = useState([]);


useEffect(() => {
  
async function GetResult() {
    try {

     const res = await api.get('/api/hasil/v1/berkembang');
     SetResult(res.data); 
     console.log(res.data);  

    } catch (err) {
         setError(err?.response.data?.message || err.message || "gagal");
    }
}

GetResult();

},[]);






useEffect(() => {
  
async function GetNama() {
    try {
    
    const res = await api.get("/api/GetNama");
     setDatas(res.data.datas);
    // setData(res.data.datas);
    // console.log("datax",res.data);
    } catch (err) {
       setError(err?.response?.data?.message || err.message || "Gagal ambil data");
    }

}

GetNama();

},[]);


useEffect (() => {
  
async function GetKota() {
 
try {
    
const res = await api.get("/api/Get/Toko");
setKota(res.data);
// console.log("hasil", res.data);

} catch (err) {
    setError(err?.response.data?.message || err.message || "gagal");
}  

} 

GetKota();

},[]);


const [selectusername, setselectusername] = useState("");


function handlebuttonusername(e) {
  setselectusername({username: e.target.value});
}



const [valuename,setValuename] = useState("");

function selectedNama (r) {
    setValuename({nama: r.target.value});
}

const [SelectKota, setSelectKota] = useState("");

function handlekota (k) {
    setSelectKota({id: k.target.value});
}


async function saveApi() {
  const payload = {
    username:selectusername.username,
    nama:valuename.nama,
    cabang:SelectKota.id  
  };
  setShowAlert(false);
    // console.log(payload);
  try {
    const res = await api.post("/api/cabang/v1/nama", payload);
    setSukses(true); 
    setTimeout(() => {
  
          setSukses(false); 
        }, 2000);
    return res.data;
  

  } catch (err) { 
    if (err.response?.status === 422) {
    //   console.log(err.response.data.errors);
    const data = err.response.data;
    console.log("bikin variable data dan di isi dengan err.response.data :", data)  
    if (data && data.errors) {
        const ambilerr = data.errors;
        console.log("dan didalam data tersebut ada object errors,massage,status bikin lagi variable untuk mengambil nilainya lalu isi dengan data.errors ", ambilerr);
    if (ambilerr.username) {
        setAlertPesan(ambilerr.username);
        setShowAlert(true);
        return;
    }
    if (ambilerr.nama) {
        setAlertPesan(ambilerr.nama);
        setShowAlert(true);
        return;       
    }
    if (ambilerr.cabang) {
        setAlertPesan(ambilerr.cabang);
        setShowAlert(true);
        return;
    }

    }

    }
  }
}

useEffect(() => {
    if (sukses) {
      setselectusername({ username: "" });
    //   console.log("apa", username);
      setValuename({ nama: "" });
      setSelectKota({ id: "" });
    }
  }, [sukses])

useEffect(() => {
  if (!showAlert) return;

  const t = setTimeout(() => {
    setShowAlert(false);
    setAlertPesan("");
  }, 3000);

  return () => clearTimeout(t);
}, [showAlert, alertPesan]);


async function BtnUpdateApi(s) {
    console.log(s)
}






function perubahansetelahdichange(e) {
  setAmbildannilaiberubah({ text: e.target.value });  
}

function handleIsi(x) {
    //console.log(x.target.value);
    setAlamatisiberubah({alamat: x.target.value});  
}

function handlejk(j) {
// console.log(j.target.value)   
setJenis({value: j.target.value})    
}


// POST DATA Harocode
function ikiBtn() {
//buat cecking, mengeceks adalah objek yang berisi beberapa objek lain, yang masing-masing berisi properti value dan message
// Array validations:

//  membuat array validations yang berisi objek dengan dua properti: value (isi input) dan message (pesan error). Setiap objek merepresentasikan satu form yang harus divalidasi.

// Ini memungkinkan kamu untuk menambah atau mengurangi kondisi validasi tanpa menambah banyak if statement atau duplikasi kode.

// Looping untuk Validasi:

// Fungsi handleButtonClick sekarang melakukan iterasi melalui array validations. Setiap objek diperiksa untuk nilai kosong.

// Jika ada nilai kosong, setAlertMessage diatur dengan pesan yang sesuai dan alert muncul. Fungsi kemudian berhenti dengan return setelah menemukan kondisi yang gagal.

// Pesan Dinamis:

// alertMessage diatur sesuai dengan kondisi yang gagal, dan alert akan muncul dengan pesan yang relevan, misalnya "Jenis kelamin harus diisi!" atau "Alamat harus diisi!".

// Menambah Kondisi Validasi:

// Untuk menambah form atau input baru yang harus divalidasi, cukup tambahkan objek baru ke dalam array validations


const mengeceks = [
{value:nilaiAwal.text, message: "Nama Field Harus Di Isi !"},
{value:alamatIsi.alamat, message: "Alamat Field Harus Di Isi  !"},
{value:jenis.value, message: "Jenis kelamin harus diisi !"}

];

for (let mengecek of mengeceks) {
    if (mengecek.value === "") {
        setAlertPesan(mengecek.message); 
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false); 
        }, 2000);
        return; 
      }
    }

setLoading(true);
setShowAlert(false);
const namaVariable = {
    namatabelketikainsertdidb:nilaiAwal.text,
    alamat:alamatIsi.alamat,
    jk:jenis.value
   };

   setSukses(true);
   setTimeout(() => {
    setLoading(false);
          setSukses(false); 
        }, 2000);
        return;  
  console.log(namaVariable);     
};



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

useEffect(() => {
    if (sukses) {
      setAmbildannilaiberubah({ text: "" });
      setAlamatisiberubah({ alamat: "" });
      setJenis({ value: "" });
    }
  }, [sukses])
if (error) return <p>Error: {error}</p>;

const handleEdit = (id) => {
    console.log("edit", id);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

// console.log("showAlert:", showAlert); 
return (
   <div>
    <div className="flex flex-wrap gap-1 p-2 mx-auto">
        {/* CARD SATU */}
        <Card className="lg:w-73 !p-0 overflow-hidden">
            <div className="bg-red-500 px-4 py-3 ">
                <h2 className="text-lg text-white font-semibold">Form Input</h2>
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

        {/* CARD DUA */}
        <Card className="lg:w-73 !p-0 overflow-hidden">
            <div className="bg-blue-500 px-4 py-3">

            <h2 className="text-lg font-semibold text-white">Form Select</h2>
            </div>

            <label  htmlFor='usernamex' className="mt-2 ml-2 p-2 block text-sm font-medium">
                username
            </label>
            
            <select id='username' onChange={perubahansetelahdichange} value={nilaiAwal.text} className='m-2 w-68 rounded-md border p-2'>
                <option value="">-- Pilih Nama --</option>
                {namex.map((data)=>
                (
                    <option key={data.value} value={data.text}>
                     {data.text}
                    </option>
                ))}

            </select>
            <label  htmlFor='address' className="mt-2 ml-2 p-2 block text-sm font-medium">
                Alamat
            </label>    
                <input
                     id='address'
                     name='alamat'
                     onChange={handleIsi}
                     value={alamatIsi.alamat}
                     className="ml-2 m-2 w-68 rounded-md border p-2"
                     placeholder="alamat"
                />

             <label htmlFor="jenisKelamin" className='mt-2 ml-2 p-2 block text-sm font-medium'>
                Jenis Kelamin
             </label>
             <select id='jenisKelamin' onChange={handlejk} value={jenis.value} className='m-2 w-68 rounded-md border p-2'>
                <option value="">-- Jenis Kelamin --</option> 
                {jeniskelamin.map((hasil)=>
                (
                    <option key={hasil.value} value={hasil.value}>
                       {hasil.text} 
                    </option>

                ))}   
            </select> 
             {loading ? <Loading /> : null}
             {showAlert && (
                <Alert className="bg-red-500 rounded-br-3xl mb-4">
                {alertPesan}
                </Alert>
            )}

            {sukses && (
                <AlertSukses className="bg-lime-500 rounded-br-3xl mb-4">
                  Sukse Mengirim data Hanya Tinggal Get Api !
                </AlertSukses>
            )}
            <div className='ml-45'>
                <Button onClick={ikiBtn} className="p-2 m-2 bg-blue-500">
                    <div >
                        Save
                    </div>  
                </Button>
            </div>    
        </Card>

        {/* Get Data API */}
         <Card className="lg:w-73 !p-0 overflow-hidden">
            <div className="bg-green-500 px-4 py-3 ">
                <h2 className="text-lg text-white font-semibold">Get Data And Post API</h2>
            </div>
           <label  htmlFor='username' className="mt-2 ml-2 p-2 block text-sm font-medium">
                Username
            </label>
              <select className='m-2 p-2 w-68 border rounded-md text-gray-400' onChange={handlebuttonusername} value={selectusername.username}>
                <option value=""> Pilih Username </option>

                {datas.map((i)=>
                (
                <option key={i.new_id} value={i.username} className='bg-gray-800'>
                {i.username} 
                </option>
                ))} 
              </select>
            <label  htmlFor='nama' className="mt-2 ml-2 p-2 block text-sm font-medium">
                Nama
            </label>    
           <select className='m-2 p-2 w-68 border rounded-md text-gray-400' onChange={selectedNama} value={valuename.nama}>
                <option value=""> Pilih Nama </option>
                {datas.map((x) => (
                    <option key={x.new_id} value={x.nama} className='bg-gray-800'>
                    {x.nama}
                    </option>
                ))}
          </select>

            <label htmlFor="kota" className='mt-2 ml-2 p-2 block text-sm font-medium'>Kota</label>
            <select name="cabang" id="cabang" className='m-2 p-2 w-68 border rounded-md text-gray-400' onChange={handlekota} value={SelectKota.id}> 
                <option value="" > Pilih cabang </option>

            {kota.map((x) => (
                    <option key={x.id} value={x.id} className='bg-gray-800'>
                    {x.nama}
                    </option>
                ))}
            </select>
             {showAlert && (
                <Alert className="bg-red-500 rounded-br-3xl mb-4">
                {alertPesan}
                </Alert>
            )}


            <div className=''>
                <Button onClick={saveApi} className='m-2 p-2 bg-green-500'>
                    Submit
                </Button>
                <Button onClick={BtnUpdateApi} className=' ml-10 p-2 bg-yellow-500'>
                    Update
                </Button>
            </div>

        </Card>

        <Card className="lg:w-73 hover:bg-gray-700">
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
    
 
    <div className="mt-3 max-w-2xl space-y-3">
    {experiences.map((item) => (
        <div
        key={item.id}
        className="relative flex items-center justify-between rounded-md border border-transparent ring-1 ring-blue-400 bg-white px-4 py-3"
        >
        <span className="absolute left-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r bg-blue-400" />

        <div className="grid min-w-0 flex-1 grid-cols-[220px_1fr] items-center gap-5 pr-3">
            <p className="text-xl font-semibold text-slate-800 leading-tight">{item.period}</p>

            <div className="min-w-0">
            <p className="truncate text-xl font-semibold text-slate-800 leading-tight">{item.title}</p>
            <p className="truncate text-lg font-medium text-slate-600 leading-tight mt-1">{item.company}</p>
            </div>
        </div>

        <div className="flex shrink-0 items-center gap-4">
            <button onClick={() => handleEdit(item.id)} className="text-blue-700" type="button">
            <Pencil size={18} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="text-red-500" type="button">
            <Trash2 size={18} />
            </button>
        </div>
        </div>
    ))}
    </div>


    {/* DATA TABLES */}
    <div className="overflow-x-auto m-2 rounded-xl border p-2 border-gray-200 shadow-lg">
    <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
        <tr>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Song</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Artist</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Year</th>
        </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 [&>tr:nth-child(odd)]:bg-white [&>tr:nth-child(even)]:bg-gray-50">
        <tr className="hover:bg-gray-100 transition-colors">
            <td className="px-4 py-3 text-gray-800">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="px-4 py-3 text-gray-700">Malcolm Lockyer</td>
            <td className="px-4 py-3 text-gray-700">1961</td>
        </tr>
        <tr className="hover:bg-gray-100 transition-colors">
            <td className="px-4 py-3 text-gray-800">Witchy Woman</td>
            <td className="px-4 py-3 text-gray-700">The Eagles</td>
            <td className="px-4 py-3 text-gray-700">1972</td>
        </tr>
        <tr className="hover:bg-gray-100 transition-colors">
            <td className="px-4 py-3 text-gray-800">Shining Star</td>
            <td className="px-4 py-3 text-gray-700">Earth, Wind, and Fire</td>
            <td className="px-4 py-3 text-gray-700">1975</td>
        </tr>
        </tbody>
    </table>
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