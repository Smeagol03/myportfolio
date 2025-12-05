import { User, MapPin, Calendar, Phone, Mail } from "lucide-react";

const DataDiri = () => {
  const data = {
    nama: "Alpian Tabrani",
    tempatLahir: "Lombok Timur",
    tanggalLahir: "21 Desember 2001",
    alamat: "Desa Rumbuk, Kec. Sakra, Kab. Lombok Timur, NTB",
    noPonsel: "+62 815-4719-0395",
    email: "atabrani3@gmail.com",
    kewarganegaraan: "Indonesia",
    agama: "Islam",
    statusPerkawinan: "Belum Menikah",
    golonganDarah: "O",
  };

  return (
    <div className="mt-16 md:mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Informasi Pribadi */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
              Informasi Pribadi
            </h2>

            <div className="space-y-4">
              <InfoItem
                icon={<Calendar className="w-5 h-5 text-blue-600" />}
                label="Tempat, Tanggal Lahir"
                value={`${data.tempatLahir}, ${data.tanggalLahir}`}
              />

              <InfoItem
                icon={<User className="w-5 h-5 text-blue-600" />}
                label="Kewarganegaraan"
                value={data.kewarganegaraan}
              />

              <InfoItem
                icon={<User className="w-5 h-5 text-blue-600" />}
                label="Agama"
                value={data.agama}
              />

              <InfoItem
                icon={<User className="w-5 h-5 text-blue-600" />}
                label="Status Perkawinan"
                value={data.statusPerkawinan}
              />

              <InfoItem
                icon={<User className="w-5 h-5 text-blue-600" />}
                label="Golongan Darah"
                value={data.golonganDarah}
              />
            </div>
          </div>

          {/* Informasi Kontak */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-500">
              Informasi Kontak
            </h2>

            <div className="space-y-4">
              <InfoItem
                icon={<MapPin className="w-5 h-5 text-indigo-600" />}
                label="Alamat"
                value={data.alamat}
                multiline
              />

              <InfoItem
                icon={<Phone className="w-5 h-5 text-indigo-600" />}
                label="No. Ponsel"
                value={data.noPonsel}
              />

              <InfoItem
                icon={<Mail className="w-5 h-5 text-indigo-600" />}
                label="Email"
                value={data.email}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Data terakhir diperbarui:{" "}
            {new Date().toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value, multiline }) => {
  return (
    <div className={`flex gap-3 ${multiline ? "items-start" : "items-center"}`}>
      <div className="shrink-0 mt-1">{icon}</div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-gray-800 font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
};

export default DataDiri;
