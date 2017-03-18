"use strict";

import {Environment} from "../enums/e-environment";

export const canvasplusPlugins: any = {
	android: {
		plugin: "com.ludei.canvasplus.android",
	},
	ios: {
		plugin: "com.ludei.canvasplus.ios",
	},
	value: Environment.CANVAS_PLUS,
};
