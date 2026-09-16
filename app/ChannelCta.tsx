"use client";

const WA_CHANNEL_LINK = "https://chat.whatsapp.com/HITZJi3wthRKfAtLIyQK1i";

export default function ChannelCta() {
    return (
        <h1 className="text-center text-lg font-bold mx-auto md:w-1/2">
            Join our <a href={WA_CHANNEL_LINK} className="link"><b>BROADCAST CHANNEL</b></a> for EARLY BIRD TICKETS and INSIDER INFORMATION.
        </h1>
    )
}