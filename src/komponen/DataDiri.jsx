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
    <div className="py-20 bg-slate-50 dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-white font-semibold tracking-wider text-sm uppercase mb-2 block">
            Biodata
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Informasi Diri & Kontak
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          {/* Informasi Pribadi */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden shadow-lg dark:shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    Pribadi
                  </h3>
                  <p className="text-slate-500 dark:text-slate-300 text-sm">
                    Detail informasi personal
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-xs md:text-sm">
                <InfoItem
                  variants={itemVariants}
                  icon={<Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Lahir</span>}
                  value={
                    <span className="text-slate-900 dark:text-white font-medium">{`${data.tempatLahir}, ${data.tanggalLahir}`}</span>
                  }
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Flag className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Kewarganegaraan</span>}
                  value={
                    <span className="text-slate-900 dark:text-white font-medium">{data.kewarganegaraan}</span>
                  }
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Agama</span>}
                  value={<span className="text-slate-900 dark:text-white font-medium">{data.agama}</span>}
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Status</span>}
                  value={
                    <span className="text-slate-900 dark:text-white font-medium">{data.statusPerkawinan}</span>
                  }
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Droplet className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Gol. Darah</span>}
                  value={
                    <span className="text-slate-900 dark:text-white font-medium">{data.golonganDarah}</span>
                  }
                />
              </div>
            </div>
          </motion.div>

          {/* Informasi Kontak */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                  <Phone className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    Kontak
                  </h3>
                  <p className="text-slate-500 dark:text-slate-300 text-sm">Saluran komunikasi aktif</p>
                </div>
              </div>

              <div className="space-y-6 text-xs md:text-sm">
                <InfoItem
                  variants={itemVariants}
                  icon={<MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Alamat Domisili</span>}
                  value={<span className="text-slate-900 dark:text-white font-medium">{data.alamat}</span>}
                  multiline
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                  label={
                    <span className="text-slate-500 dark:text-slate-400">No. Ponsel / WhatsApp</span>
                  }
                  value={<span className="text-slate-900 dark:text-white font-medium">{data.noPonsel}</span>}
                />
                <InfoItem
                  variants={itemVariants}
                  icon={<Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                  label={<span className="text-slate-500 dark:text-slate-400">Alamat Email</span>}
                  value={<span className="text-slate-900 dark:text-white font-medium">{data.email}</span>}
                  isLink
                  linkType="mailto"
                />
              </div>

              {/* Added Call to Action area for better interactivity */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 font-medium">Ingin berkolaborasi?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${data.email}`}
                    className="flex-1 text-center py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors text-sm shadow-sm hover:shadow-md"
                  >
                    Kirim Email
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${data.noPonsel.replace(
                      /[^0-9]/g,
                      "",
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm shadow-sm hover:shadow-md"
                  >
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 dark:text-gray-400 text-sm font-medium">
            Terakhir diperbarui:{" "}
            <span className="text-slate-600 dark:text-gray-600">4 Desember 2025</span>
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
      <div className="p-2.5 bg-slate-50 dark:bg-gray-50/10 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-gray-50/20 group-hover:shadow-sm transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide font-semibold mb-1">
          {label}
        </p>
        <p
          className={`${
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
      className="group flex gap-4 items-start p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-50/5 transition-colors"
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
