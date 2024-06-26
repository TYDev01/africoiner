import "@/styles/globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
	arbitrum,
	avalanche,
	bsc,
	fantom,
	gnosis,
	mainnet,
	optimism,
	polygon,
} from "wagmi/chains";

// MY IMPORTS

import FAQS from '@/components/FAQs/FAQS';
import Countdown from '@/components/countdown/Countdown';
import Discover from '@/components/discover/Discover';
import Footer from '@/components/footer/Footer';
import Main from '@/components/main/Main';
import Nav from '@/components/nav/Nav';
import StayUpdated from '@/components/stayUpdated/StayUpdated';
import Update from '@/components/update/Update';



const chains = [
	mainnet,
	polygon,
	avalanche,
	arbitrum,
	bsc,
	optimism,
	gnosis,
	fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
	name: "Next Starter Template",
	description: "A Next.js starter template with Web3Modal v3 + Wagmi",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }: AppProps) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(true);
	}, []);
	return (
		<main className='w-full h-full font-tilt'>
		
			{ready ? (
				<WagmiConfig config={wagmiConfig}>
					<Component {...pageProps} />
				</WagmiConfig>
			) : null}

			<Nav />
			<Main />
			<Discover />
			<Update />
			<Countdown />
			<StayUpdated />
			<FAQS />
			<Footer />
		</main>
	);
}
