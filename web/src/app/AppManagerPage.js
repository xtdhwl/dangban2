/**
 * Created by xtdhwl on 11/5/16.
 */


import React, {Component} from 'react';

import SRList from '../widget/SRList';
import SRListItem from '../widget/SRList';

class App {
    constructor() {
        this.name = "";
        this.icon = "";
        this.versionName = "";
        this.size = "";
        this.data = "";
    }

    static create(name, icon, versionName, size, data) {
        var app = new App();
        app.name = name;
        app.icon = icon;
        app.versionName = versionName;
        app.size = size;
        app.data = data;
        return app;
    }

    static creactList() {
        var appList = [];

        var app = App.create("知乎", require('../img/app.png'), "1.0", "1.2M", "08/29/2016");
        var app1 = App.create("知乎", require('../img/app.png'), "1.0", "1.2M", "08/29/2016");
        appList.push(app);
        appList.push(app1);
        return appList;
    }
}

export default class AppManagerPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }


    render() {

        return (
            <div>
                <div className="toolbar">
                    <button onClick={this.onRefreshClicker.bind(this)}>刷新</button>
                    <button onClick={this.onUninstallClicker.bind(this)}>卸载</button>
                    <button onClick={this.onDownloadClicker.bind(this)}>下载</button>
                    <button onClick={this.onInstallClicker.bind(this)}>安装</button>
                </div>

                <SRList ref="appList">
                    {this.getAppItem()}
                </SRList>
            </div>
        );
    }

    getAppItem() {
        var appList = App.creactList();
        var listItems = appList.map((item, index)=> {
            return (
                <SRListItem key={index}>
                    <div className="app_layout" >
                        <input id="app_checkbox" type="checkbox"/>
                        <img id="app_icon" src={require('../img/app.png')}/>
                        <div id="app_info">
                            <p>应用名称3</p>
                            <p>版本号</p>
                        </div>
                        <p id="app_sub_info">大小 时间</p>
                    </div>
                </SRListItem>
            );

        });
        return listItems;
    }

    onRefreshClicker() {
        alert("刷新");
    }

    /**
     * 下载app
     */
    onDownloadClicker() {
        alert("onDownloadClicker");
    }

    /**
     * 卸载app
     */
    onUninstallClicker() {
        //alert("onUninstallClicker");
        console.log("onUninstallClicker");
        var appListView = this.refs.appList;

        for(var appView of appListView.props.children){
            console.log(appView);
        }
    }

    onInstallClicker() {
        alert("onInstallClicker");
    }
}


