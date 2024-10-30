"use client"

import { TransactionButton, useActiveAccount } from "thirdweb/react"
import { LoginButton } from "../components/LoginButton"
import { defineChain, getContract } from "thirdweb"
import { claimTo } from "thirdweb/extensions/erc721"
import { client } from "../client"
import Link from "next/link"

export default function NFTClaim(){
    
    const account = useActiveAccount();

    return(
        <div className="min-h-screen font-montserrat flex flex-col items-center justify-center">
        <div className="min-h-3.5 font-montserrat flex flex-col w-80 border rounded-lg items-center justify-center">
            <div className="p-4 flex items-center justify-center flex-col">
                <p className="font-bold text-3xl mb-6">Claim NFT</p>
                <p className="text-white font-semibold">You can claim NFT Here</p>
                <div className="my-6 mb-4">
                    <LoginButton/>
                </div>
                <TransactionButton 
                transaction={()=>claimTo({
                    contract: getContract({
                        client: client,
                        // chain: defineChain(12227332),
                        // address: "0x7F712dd4aDC8B17C52b812F3c8b6804CE5504630"
                        chain: defineChain(1320),
                        address: "0xf4D756E38CB255a7124eFe2c2837cE29ad0E828D"
                    }),
                    to: account?.address || "",
                    quantity: 1n,
})}

        onTransactionConfirmed={async()=>{
            alert("NFT claimed")
        }}
        >Claim NFT</TransactionButton>
        <div className="py-10">
        <Link  href={"/gated-content"}>
            <button className="mt-4 bg-zinc-100 text-black px-4 py-2 rounded-md">
                Go To Gated Page
            </button>
        </Link>
            </div>
            </div>
        </div>
        </div>
    )
}