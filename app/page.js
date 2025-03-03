'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-300 to-purple-200 min-h-screen text-gray-800">
      {/* About Section */}
      <section id="about" className="py-20 px-10 text-center bg-indigo-100">
        <h2 className="text-4xl font-bold text-gray-700">Tentang Saya</h2>
        <div className="mt-6">
          <Image
            src="/profile.jpg.jpeg" // Ganti dengan gambar profil kamu
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </div>
        <p className="mt-6 text-lg text-gray-600">
          Hallo, saya Estasyah, seorang mahasiswa di bidang Sistem Informasi. Saya sangat tertarik dengan teknologi, pengkodean, dan menciptakan solusi berbasis web.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-10 bg-purple-100 text-center">
        <h2 className="text-4xl font-bold text-gray-700">Kemampuan</h2>
        <div className="mt-6 flex justify-center gap-8">
          {['HTML', 'CSS', 'JavaScript', 'Excel', 'MS Word'].map((skill) => (
            <div key={skill}>
              <h3 className="text-xl font-semibold text-gray-800">{skill}</h3>
              <div className="w-24 h-1 bg-pink-500 mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-10 bg-pink-200 text-center">
        <h2 className="text-4xl font-bold text-gray-700">Layanan</h2>
        <div className="mt-6 flex justify-around">
          <div>
            <span className="text-4xl">🌐</span>
            <h3 className="text-xl font-semibold text-gray-800">Pengembangan Website</h3>
            <p className="mt-2 text-gray-600">Membangun website responsif HTML, React Native, CSS, PHP.</p>
          </div>
          <div>
            <span className="text-4xl">🎨</span>
            <h3 className="text-xl font-semibold text-gray-800">Desain UI/UX</h3>
            <p className="mt-2 text-gray-600">Mendesain antarmuka pengguna yang intuitif dan ramah pengguna.</p>
          </div>
          <div>
            <span className="text-4xl">📝</span>
            <h3 className="text-xl font-semibold text-gray-800">Konsultasi Teknologi</h3>
            <p className="mt-2 text-gray-600">Memberikan konsultasi mengenai teknologi web dan framework terbaik.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-10 bg-indigo-200 text-center">
        <h2 className="text-4xl font-bold text-gray-700">Portofolio</h2>
        <div className="mt-6 flex justify-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold">Proyek 1</h3>
            <p className="mt-2 text-gray-600">Situs portofolio pribadi yang dibangun dengan HTML, CSS, dan JavaScript.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 text-center bg-purple-100">
        <h2 className="text-4xl font-bold text-gray-700">Kontak</h2>
        <div className="mt-6">
          <p className="text-lg text-gray-600">Jangan ragu untuk menghubungi saya melalui link berikut!</p>
          <div className="flex justify-center gap-6 mt-4">
            {/* GitHub Emoticon */}
            <a href="https://github.com/" target="_blank" className="text-gray-700">
              <span className="text-3xl">🐙</span> {/* Github Octocat Emoticon */}
            </a>

            {/* LinkedIn Emoticon */}
            <a href="https://www.linkedin.com/" target="_blank" className="text-gray-700">
              <span className="text-3xl">🔗</span> {/* LinkedIn Emoticon */}
            </a>

            {/* Email Emoticon */}
            <a href="mailto:estasyah5028@gmail.com" className="text-gray-700">
              <span className="text-3xl">📧</span> {/* Email Envelope Emoticon */}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}