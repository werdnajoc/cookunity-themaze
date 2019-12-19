import Head from 'next/head'
import React from "react";

import NavTop from "../../components/nav";

import "./style.css";

export default (props) => (
    <>
        <Head>
            <title>{ props.title }</title>
        </Head>
        <main>
            <div className="navTop">
                <div className="title">
                    <img
                        src="https://www.cookunity.com/newsubscription/template/img/newLanding/logo-cu.png"
                        width={140}
                    />
                </div>

                <div className="menu">
                    <NavTop
                        options={props.navTopOptions}
                    />
                </div>
            </div>
            {props.children}
        </main>
    </>
)
