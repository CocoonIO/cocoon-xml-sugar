"use strict";

const XMLSugar = require("../../out").default;
const fs = require("fs");

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("A spec for the Cocoon SDK", () => {
	let xmlSugar;
	const xmlString = fs.readFileSync(__dirname.replace("tests", "assets/config.xml"), "utf8");

	beforeEach(() => {
		xmlSugar = new XMLSugar(xmlString);
	});

	it("should be able to get the basic information of the project", () => {
		expect(xmlSugar.getName()).toBe("HelloCordova");
		expect(xmlSugar.getDescription()).toContain("A sample Apache Cordova application that responds to the deviceready event.");
		expect(xmlSugar.getAuthorName()).toContain("Apache Cordova Team");
		expect(xmlSugar.getAuthorEmail()).toBe("dev@cordova.apache.org");
		expect(xmlSugar.getAuthorURL()).toBe("http://cordova.io");
		expect(xmlSugar.getBundleId()).toBe("io.cordova.hellocordova");
		expect(xmlSugar.getVersion()).toBe("1.0.0");
		expect(xmlSugar.getVersionCode()).toBe("");
		expect(xmlSugar.getCocoonVersion()).toBe("latest");
		expect(xmlSugar.getContentURL()).toBe("index.html");
		expect(xmlSugar.getOrientation()).toBe(2);
		expect(xmlSugar.isFullScreen()).toBeFalsy();
	});
});
