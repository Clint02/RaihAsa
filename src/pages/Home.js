import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gambar1 from "../components/img/home1.svg";
import Gambar2 from "../components/img/home2.svg";
import Gambar3 from "../components/img/home3.svg";
import Gambar4 from "../components/img/home4.svg";

const Home = () => {
	return (
		<>
			<Navbar />
			<section className="bg-black h-auto text-white py-10">
				<div className="flex flex-row">
					<div className="container ">
						<div className="backdrop-blur-sm">
							<h1 className="text-5xl font-bold">
								Informasi Seputar Lomba <br /> dan Beasiswa
							</h1>

							<h2 className="text-xl">
								Media yang menyediakan informasi beasiswa dan kompetisi yang
								Anda butuhkan. Selain itu, kami adalah media penyedia teman
								untuk mengikuti kompetisi
							</h2>
						</div>
						<div className="flex flex-row gap-5">
							<button
								type="submit"
								className="bg-red rounded-md px-8 py-2 mb-8"
							>
								Beasiswa
							</button>
							<hr className="rotate-90 w-7" />
							<button
								type="submit"
								className="bg-red rounded-md px-8 py-2 mb-8"
							>
								Lomba
							</button>
						</div>
					</div>
					<div>
						<img src={Gambar1}></img>
					</div>
				</div>
			</section>
			<section className="bg-black h-auto text-white py-10">
				<div>
					<p className="text-right text-7xl font-semibold opacity-10 pb-4">
						Apa yang kami sediakan
						<br /> dan persiapkan?
					</p>
					<h1 className="text-5xl font-bold py-4">
						Apa yang kami sediakan
						<br /> dan persiapkan?
					</h1>
				</div>
			</section>
			<section className="bg-black h-auto text-white py-10">
				<div>
					<div className="flex flex-row justify-center content-center ">
						<div>
							<p className="text-xl">
								Menyediakan <span className="font-bold">informasi lengkap</span>{" "}
								dan
								<span className="font-bold"> up-to-date</span> mengenai{" "}
								<span className="font-bold">beasiswa </span>
								kepada para{" "}
								<span className="font-bold">pelajar SMA dan mahasiswa</span>
							</p>
						</div>
						<div>
							<img src={Gambar2}></img>
						</div>
					</div>
					<div className="flex flex-row justify-center content-center ">
						<div>
							<img src={Gambar3}></img>
						</div>
						<div>
							<p className="text-xl">
								Menyediakan informasi mengenai{" "}
								<span className="font-bold">lomba-lomba</span> kepada
								<span className="font-bold">
									{" "}
									pelajar SMA dan mahasiswa
								</span>{" "}
								dan mengelompokkan berdasarkan{" "}
								<span className="font-bold">kategori</span> untuk{" "}
								<span className="font-bold">memudahkan </span>
								dalam pencarian
							</p>
						</div>
					</div>
					<div className="flex flex-row justify-center content-center ">
						<div>
							<p className="text-xl">
								<span className="font-bold">Fitur mencari teman</span> bagi yang
								mengikuti lomba agar
								<span className="font-bold"> memudahkan</span> para pelajar atau
								mahasiswa dalam
								<span className="font-bold"> mencari teman</span> serta
								<span className="font-bold"> menambah relasi</span>
							</p>
						</div>
						<div>
							<img src={Gambar4}></img>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;
