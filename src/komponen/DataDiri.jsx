import {
  User,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Flag,
  Heart,
  Droplet,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const DataDiri = () => {
  const data = {
    nama: "Alpian Tabrani",
    tempatLahir: "Lombok Timur",
    tanggalLahir: "21 Desember 2001",
    alamat: "Desa Rumbuk, Kec. Sakra, Kab. Lombok Timur, NTB",
    noPonsel: "6287894721726",
    email: "atabrani3@gmail.com",
    kewarganegaraan: "Indonesia",
    agama: "Islam",
    statusPerkawinan: "Belum Menikah",
    golonganDarah: "O",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white font-semibold tracking-wider text-sm uppercase mb-2 block">
            Biodata
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Informasi Diri & Kontak
          </h2>
          <div className="h-1.5 w-20 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          {/* Informasi Pribadi */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="h-2 bg-linear-to-r from-blue-500 to-cyan-500" />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Pribadi
                  </h3>
                  <p className="text-white text-sm">
                    Detail informasi personal
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-xs md:text-sm">
                <InfoItem
                  variants={itemVariants}
                  icon={<Calendar className="w-5 h-5 text-blue-600" />}
                  label={<span className="text-white">Lahir</span>}
                  value={
                    <span className="text-white">{`${data.tempatLahir}, ${data.tanggalLahir}`}</span>
                  }
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Flag className="w-5 h-5 text-blue-600" />}
                  label={<span className="text-white">Kewarganegaraan</span>}
                  value={
                    <span className="text-white">{data.kewarganegaraan}</span>
                  }
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<BookOpen className="w-5 h-5 text-blue-600" />}
                  label={<span className="text-white">Agama</span>}
                  value={<span className="text-white">{data.agama}</span>}
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Heart className="w-5 h-5 text-blue-600" />}
                  label={<span className="text-white">Status</span>}
                  value={
                    <span className="text-white">{data.statusPerkawinan}</span>
                  }
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Droplet className="w-5 h-5 text-blue-600" />}
                  label={<span className="text-white">Gol. Darah</span>}
                  value={
                    <span className="text-white">{data.golonganDarah}</span>
                  }
                />
              </div>
            </div>
          </div>

          {/* Informasi Kontak */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="h-2 bg-linear-to-r from-indigo-500 to-purple-500" />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <Phone className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Kontak
                  </h3>
                  <p className="text-white text-sm">Saluran komunikasi aktif</p>
                </div>
              </div>

              <div className="space-y-6 text-xs md:text-sm">
                <InfoItem
                  variants={itemVariants}
                  icon={<MapPin className="w-5 h-5 text-indigo-600" />}
                  label={<span className="text-white">Alamat Domisili</span>}
                  value={<span className="text-white">{data.alamat}</span>}
                  multiline
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Phone className="w-5 h-5 text-indigo-600" />}
                  label={
                    <span className="text-white">No. Ponsel / WhatsApp</span>
                  }
                  value={<span className="text-white">{data.noPonsel}</span>}
                  isLink
                  linkType="tel"
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Mail className="w-5 h-5 text-indigo-600" />}
                  label={<span className="text-white">Alamat Email</span>}
                  value={<span className="text-white">{data.email}</span>}
                  isLink
                  linkType="mailto"
                />
              </div>

              {/* Added Call to Action area for better interactivity */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-white mb-4">Ingin berkolaborasi?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${data.email}`}
                    className="flex-1 text-center py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors text-sm shadow-sm hover:shadow-md"
                  >
                    Kirim Email
                  </a>
                  <a
                    href={`https://wa.me/${data.noPonsel.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm shadow-sm hover:shadow-md"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm font-medium">
            Terakhir diperbarui:{" "}
            <span className="text-gray-600">4 Desember 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({
  icon,
  label,
  value,
  multiline,
  variants,
  isLink,
  linkType,
}) => {
  const content = (
    <>
      <div className="p-2.5 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
          {label}
        </p>
        <p
          className={`text-gray-800 font-medium ${
            multiline ? "leading-relaxed" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </>
  );

  return (
    <motion.div
      variants={variants}
      className="group flex gap-4 items-start p-2 rounded-lg hover:bg-gray-50/50 transition-colors"
    >
      {isLink ? (
        <a
          href={`${linkType}:${value}`}
          className="flex gap-4 items-start w-full"
          target={linkType === "tel" ? "_self" : "_blank"}
          rel="noreferrer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

export default DataDiri;
