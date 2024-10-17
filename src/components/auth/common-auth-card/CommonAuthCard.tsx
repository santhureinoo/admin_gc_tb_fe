
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/svg/logo.svg";
import './style.css';

interface CommonAuthCardProps {
    title: string;
    subtitle: string;
    content: () => React.ReactNode;
    footer: () => React.ReactNode;
    className: string;
}

const CommonAuthCard: React.FC<CommonAuthCardProps> = ({ title, subtitle, content, footer, className }) => {
    return (
        <div className="main-div">
            <main className="inner-main-div">
                <section className={`${className} auth-card-section`}>
                    <div className="auth-card-content">
                        <div className="auth-card-content-header">
                            <div className="logo-div">
                                <a href="/">
                                    <span className="sr-only">GlobalCaring</span>
                                    <Image src={Logo} alt="Logo" width={150} height={200}/>
                                </a>
                            </div>
                            <div className="title-div">
                                <h2 className="text-9xl font-bold mq450:text-[22px] mq450:leading-[30px]">
                                    {title}
                                </h2>
                                <div className="px-[34px] leading-[26px]">
                                    {subtitle}
                                </div>
                            </div>
                        </div>
                        {content()}
                    </div>
                    <div className="auth-card-footer">
                        {footer()}
                    </div>
                </section>
            </main>
        </div>
);
};

export default CommonAuthCard;