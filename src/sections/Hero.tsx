import HomePic from '../assets/HomePic.jpg'

import { Button } from '../components/Button'
import { heroContent } from '../data/content.ts'

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
                <span className="eyebrow">
                    {heroContent.greeting} <span className="wave">✦</span>
                </span>

                <h1 id="hero-title">
                    <em>{heroContent.role}</em>
                </h1>

                <p className="hero-lede">
                    {heroContent.description}
                </p>

                <div className="hero-actions">
                    <Button href="#projects">{heroContent.primaryAction}</Button>
                    <Button href="#contact" secondary>{heroContent.secondaryAction}</Button>
                </div>
            </div>

            <div
                className="hero-visual"
                aria-label="Gia Bao portrait"
            >
                <img
                    className="hero-image"
                    src={HomePic}
                    alt={heroContent.imageAlt}
                />

                <span className="visual-label">
                    {heroContent.location}
                    <br />
                    {heroContent.availability}
                </span>
            </div>

            <div className="scroll-cue">
                <span>{heroContent.scrollLabel}</span>
                <span className="scroll-line" />
            </div>
        </section>
    )
}