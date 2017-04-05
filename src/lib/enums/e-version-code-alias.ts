"use strict";

export enum VersionCodeAlias {
	android = "android-versionCode" as any,
	ios = "ios-CFBundleVersion" as any,
	osx = "osx-CFBundleVersion" as any,
	// ubuntu = "ubuntu-tmpVersionPlaceholder" as any, // TODO: find real name
	windows = "windows-packageVersion" as any,
}
