import { Arrow } from '../components/Arrow'
import { contactContent, personalInfo } from '../data/content.ts'

export function Contact() {
    return (
        <section className="contact" id="contact">
            <div><span className="eyebrow">{contactContent.eyebrow}</span><h2>{contactContent.title}<br /><em>{contactContent.accentTitle}</em></h2></div>
            <div className="contact-details">
                <a className="contact-email" href={`mailto:${contactContent.email}`}>{contactContent.email} <Arrow /></a>
                <a className="contact-phone" href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
        </section>
    );
}
