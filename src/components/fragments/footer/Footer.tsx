import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-auto flex justify-center items-center border border-red-500 bg-amber-700">
      <div className="w-3/5 border border-black flex my-10">
        <div className="border border-white w-1/2">
          <Image
            src="/icons/logo-black.png"
            alt="logo"
            width={500}
            height={500}
            className="w-1/2 h-auto"
          />
          <p className="my-4">
            Proyek ini dibangun oleh M. Raihan Hafiz, seorang Pengembang
            Frontend yang bersemangat, yang menggabungkan kekuatan Next.js,
            Firebase, dan teknologi web modern untuk memberikan rekomendasi
            makanan yang dipersonalisasi berdasarkan cuaca dan waktu.
          </p>
          <p>muhammadraihan86185@gmail.com | github : RaihanHafiz27</p>
        </div>
        <div className="border border-green-400 w-1/2">world</div>
      </div>
    </footer>
  );
};

export default Footer;
