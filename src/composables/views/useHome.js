import useArrows from "../helpers/useArrows.js";
import useHelpers from "../helpers/useHelpers.js";

const {right} = useArrows();
const {createIUG} = useHelpers();
const IUG = createIUG();

export default (function useHome() {
    IUG.setDirectory('logos');
    const upCity = {
        logo: IUG.generateImageUrl('upcity.svg'),
        star: '<i class="fa-solid fa-star text-[#23A6F0]" />'
    };

    const header = {
        label: 'We Design & Develop Websites That Deliver Results',
        text: `Our goal is to develop simple and modern websites that are optimized
             for both search engines and user experience, ultimately driving more
             traffic and revenue to your business.`,
    };

    const buttons = {
        bac: 'Book a Call <i class="fa-solid fa-arrow-right text-black"/>',
        ow: 'Our Work <i class="fa-solid fa-arrow-right text-white"/>',
        lm: `Learn More ${right}`,
        lt: `Let's Talk ${right}`,
        rm: `Read More ${right}`,
        vapo: `View All Posts ${right}`,
    };

    const partners = {
        before:
            "before:content-[''] before:w-[17vw] before:h-0.5 before:mr-6 before:bg-white before:opacity-10 before:max-md:hidden",
        label: 'Trusted by Innovative Companies Worldwide',
        after:
            "after:content-[''] after:w-[17vw] after:h-0.5 after:ml-6 after:bg-white after:opacity-10 after:max-md:hidden",
        logos: Array(5).fill(IUG.generateImageUrl('united-way.svg')),
    };

    const techsHeader = {
        label: `Your Dedicated Web Design<br/>& Development Team`,
        text: `We are small team of experts that have been building on the
internet for over a decade. We are passionate about helping
businesses thrive online and creating user-focused websites
that drive real results.`,
    };

    IUG.setDirectory('icons');
    const icons = [
        {
            icon: IUG.generateImageUrl('custom-websites.svg'),
            label: 'Custom Websites',
            text: `Whether you’re looking to build a custom
marketing website or the next Twitter we can
help you build it.`,
            name: 'CustomWebsites'
        },
        {
            icon: IUG.generateImageUrl('search-engine-optimization.svg'),
            label: 'Search Engine Optimization',
            text: `You’ve got yourself a beautiful website but now
you need your customers to find it, let us help
you.`,
            name: 'TemplatedWebsites',
        },
    ];


    IUG.setDirectory('blogs');
    const posts = {
        label: 'Recent Posts',
        _: Array(3).fill(
            {
                label: `10 Landing Page Do’s and Don’ts`,
                img: IUG.generateImageUrl('10-Landing-Page-Dos-and-Donts-1024x534.jpg'),
            }),
    };

    const footer = {
        label: 'Want to see if Icepick is the right fit for you?',
        text: 'Give us a shout and let’s see if we’re the right match for you and your business!',
    }

    return {upCity, header, buttons, partners, icons, techsHeader, posts, footer}
});