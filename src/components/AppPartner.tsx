const AppPartner = () => {
    return (
        <div className="w-full h-[50vh] px-[8%] bg-[url('./images/app-market-mobile.png')] 
            bg-no-repeat bg-contain bg-center flex justify-center items-center text-center
            sm:h-[90vh] sm:bg-[url('./images/app-market.png')] sm:bg-[center_top_3rem]">
            <div>
                <h5 className="text-primary text-xs font-semibold leading-[1.2] 
                    sm:leading-[1.2] sm:mb-2">
                    App Partner
                </h5>
                <h2 className="text-secondary text-4xl font-bold leading-[1.2] mt-4 
                    sm:text-4xl">
                    Join our thriving App Marketplace
                </h2>
                <p className="text-secondary-light text-sm font-normal leading-[1.5] mt-4 
                    sm:leading-[1.2]">
                    Expand your reach and grow your business with Referrizer's App Marketplace
                </p>
            </div>
        </div>
    )
}

export { AppPartner };

