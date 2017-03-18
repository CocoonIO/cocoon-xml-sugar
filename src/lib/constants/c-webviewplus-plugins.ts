"use strict";

import {Environment} from "../enums/e-environment";

export const webviewplusPlugins: any = {
	android: {
		plugin: "com.ludei.webviewplus.android",
	},
	ios: {
		plugin: "com.ludei.webviewplus.ios",
	},
	value: Environment.WEBVIEW_PLUS,
};
