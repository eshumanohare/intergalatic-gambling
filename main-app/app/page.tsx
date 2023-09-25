export default function Home() {
	return (
		<>
			<section className='bg-primary flex flex-col items-center justify-evenly py-10'>
				<h1 className='text-9xl text-secondary font-Handjet font-semibold'>
					UNLEASH YOUR COSMIC MIGHT
				</h1>
				<img src='/images/homeImg.gif' alt='Super Cool GIF' className='mt-12' />
				<h3 className='text-3xl text-white font-Handjet text-center mt-11'>
					Experience the Thrill of Cosmic Conquest with 'Intergalactic War
					<br /> The Game That Utilizes NFTs to Help You Seize Your Stellar
					Empire
				</h3>
				<button className='text-2xl font-bold bg-secondary px-2 py-1 text-primary rounded-md font-Handjet mt-11'>
					Begin Now
				</button>
			</section>
			<section className='bg-primary flex flex-col items-center justify-evenly py-10 font-Montserrat min-h-screen'>
				<h1 className='text-4xl text-secondary font-bold font-Handjet'>
					Prepare for Battle
				</h1>
				<p className='text-white mt-4 w-3/6 text-center font-Montserrat'>
					Welcome to the interstellar arena of 'Intergalactic War,' where the
					smart contract is deployed on the secretive Oasis network, ensuring
					your data remains cloaked in privacy.
					<br />
					<br />
					In this cosmic showdown, every NFT holds seven mysterious properties,
					hidden from prying eyes until the moment of battle!
				</p>

				<h2 className='text-2xl text-white font-semibold mt-6'>
					Here are the Rules of Engagement:
				</h2>
				<ul className='list-none ml-6 text-white text-center'>
					<li className='mt-3 text-lg'>
						<span className='text-secondary font-bold'>
							Connect Your Wallet:
						</span>{' '}
						To step into this intergalactic battleground, you'll need to connect
						your trusty digital wallet.
					</li>
					<li className='mt-3 text-lg'>
						<span className='text-secondary font-bold'>Mint Your NFT:</span>{' '}
						Every warrior gets one chance to mint their NFT for free, their
						ticket to the stars.
					</li>
					<li className='mt-3 text-lg'>
						<span className='text-secondary font-bold'>
							Challenge Fellow Explorers:
						</span>{' '}
						Prove your cosmic prowess by dueling other players, wielding your
						NFT as your weapon.
					</li>
					<li className='mt-3 text-lg'>
						<span className='text-secondary font-bold'>
							Prepare for Combat:
						</span>{' '}
						Each battle consists of one thrilling round against your chosen
						opponent.
					</li>
					<li className='mt-3 text-lg'>
						<span className='text-secondary font-bold'>
							Reveal the Secrets:
						</span>{' '}
						When the moment of truth arrives, you'll finally unveil the seven
						enigmatic traits of your NFT.
					</li>
					<li className='mt-3 text-lg'>
						<span className='text-secondary font-bold'>
							Choose Your Weapon:
						</span>{' '}
						Both contenders will select a single attribute to harness in their
						cosmic clash.
					</li>
				</ul>
			</section>
		</>
	);
}
