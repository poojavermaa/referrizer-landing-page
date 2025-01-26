import React from 'react'
import { Header } from '../components/Header'
import { AppPartner } from '../components/AppPartner'
import { Tools } from '../components/Tools'
import { DevDocs } from '../components/DevDocs'
import { Testimonial } from '../components/Testimonial'
import { FAQ } from '../components/FAQ'
import { CommunityBanner } from '../components/CommunityBanner'
import { SuccessStory } from '../components/SuccessStory'

const Home = () => {
    return (
        <main>
            <Header />
            <AppPartner />
            <Tools />
            <DevDocs />
            <Testimonial />
            <FAQ />
            <CommunityBanner />
            <SuccessStory />
        </main>
    )
}

export { Home }