import React from 'react';

function Social() {
    return (
        <ul className="d-lg-flex d-sm-block justify-content-between">
            {getSocials().map(social => (
                <li key={social.id} className="ml-3 d-inline-block">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <img src={social.image} alt="social" className="icon icon-md" />
                    </a>
                </li>
            ))}
        </ul>
    )
}
const getSocials = () => [
    {
        id: 0,
        href: "https://facebook.com/",
        image: "/images/icons/social/fb.png"
    },
    {
        id: 1,
        href: "https://ok.ru/",
        image: "/images/icons/social/ok.png"
    },
    {
        id: 2,
        href: "https://vk.com/",
        image: "/images/icons/social/vk.png"
    },
    {
        id: 3,
        href: "https://twitter.com/",
        image: "/images/icons/social/twitter.png"
    }
];
export default Social