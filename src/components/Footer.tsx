import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Twitter} from "./LinkIcons/twitter";
import {Discord} from "./LinkIcons/discord";
import {Youtube} from "./LinkIcons/youtube";
import {Github} from "./LinkIcons/github";
import {Reddit} from "./LinkIcons/reddit";
import {Telegram} from "./LinkIcons/telegram";
export const Footer: FC = () => {
    const currentYear  = new Date().getFullYear();
    const brandName = 'YOUR BRAND'
    return (
        <div className="flex">
            <footer className="border-t-2 border-[#141414] bg-black hover:text-white w-screen" >
                <div className="ml-12 py-12 mr-12">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
                            <div className='flex flex-row ml-1'>
                                <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    <div className='flex flex-row ml-1'>
                                        <Image
                                            src="/solanaLogo.png"
                                            alt="solana icon"
                                            width={156}
                                            height={96}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex md:ml-2">
                                <Twitter url={'https://x.com/'} />
                                <Youtube url={'https://youtube.com'} />
                                <Discord url={'https://discord.gg'} />
                                <Github url={'https://github.com'} />
                                <Reddit url={'https://reddit.com'} />
                                <Telegram url={'https://t.me'} />


                            </div>
                            <div className="mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary">
                                        © 2023 - {currentYear} {brandName}, All rights reserved.
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <div className="font-normal capitalize mb-2.5">SOLANA</div>

                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Labs
                                </Link>
                                <Link href="https://solana.org" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Foundation
                                </Link>
                                <Link href="https://solanamobile.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Solana Mobile
                                </Link>
                                <Link href="https://solanapay.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Solana Pay
                                </Link>
                                <Link href="https://solana.org/grants" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Grants
                                </Link>
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <h5 className="font-normal capitalize tracking-tight  mb-2.5">DEVELOPERS</h5>

                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://docs.solana.com/developers" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Documentation
                                </Link>
                                <Link href="https://github.com/solana-mobile/solana-mobile-stack-sdk" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Mobile SDK
                                </Link>
                                <Link href="https://github.com/solana-labs/solana-pay" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Pay SDK
                                </Link>
                                <Link href="https://solanacookbook.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Cookbook
                                </Link>
                                <Link href="https://solana.com/developers/dao" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    DAOs
                                </Link>
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <h5 className="font-normal tracking-tight  mb-2.5">ECOSYSTEM</h5>

                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://solana.com/news" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    News
                                </Link>
                                <Link href="https://solana.org/validators" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Validators
                                </Link>
                                <Link href="https://www.youtube.com/@SolanaFndn" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Youtube
                                </Link>
                                <Link href="https://app.realms.today/discover" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Realms
                                </Link>
                                <Link href="https://www.solanau.org" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Solana U
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
