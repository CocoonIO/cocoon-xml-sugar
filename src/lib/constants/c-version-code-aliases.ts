"use strict";

export const versionCodeAliases: {[key: string]: string} = {
	android: "android-versionCode",
	ios: "ios-CFBundleVersion",
	osx: "osx-CFBundleVersion",
	/*ubuntu: "ubuntu-tmpVersionPlaceholder", // TODO: find real name*/
	windows: "windows-packageVersion",
};
