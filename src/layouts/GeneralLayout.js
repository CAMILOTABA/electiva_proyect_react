import React, { useState } from "react";
import { Layout,Button } from "antd";
import {GithubOutlined} from "@ant-design/icons"
import MenuTop from "../components/MenuComponents/MenuTop";
import MenuSider from "../components/MenuComponents/MenuSlider";

import "./GeneralLayout.scss"

export default function GeneralLayout(props){
    const [menuCollapsed,setMenuCollapsed] = useState(false);
    const { header , content ,footer } = Layout;
    const {children} = props;
    return (
        <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout style={{marginleft: menuCollapsed ? "80px" : "200px"}}>
            <header className="layout-admin_header">
                <MenuTop
                menuCollapsed={menuCollapsed}
                setMenuCollapsed={setMenuCollapsed}
                />
            </header>
            <content className="layout-admin_content">{children}</content>
            <footer className="layout-admin_footer">
                <button type="link" onClick={() => console.log("Github")}>
                    <GithubOutlined style={{fontSize:"17px"}}/>
                </button>
            </footer>
        </Layout>
        </Layout>
    );
};