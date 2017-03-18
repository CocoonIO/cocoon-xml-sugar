"use strict";

const XMLSugar = require("../../out").default;
const Environment = require("../../out").Environment;
const Orientation = require("../../out").Orientation;
const fs = require("fs");

describe("A spec for the Cocoon XML Sugar", () => {
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
		expect(xmlSugar.getVersionCode()).toBe("1.0.0");
		expect(xmlSugar.getCocoonVersion()).toBe("latest");
		expect(xmlSugar.getContentURL()).toBe("index.html");
		expect(xmlSugar.getOrientation()).toBe(Orientation.SYSTEM_DEFAULT);
		expect(xmlSugar.isFullScreen()).toBeFalsy();
		expect(xmlSugar.getEnvironment()).toBe(Environment.WEBVIEW);
	});

	it("should be able to modify the basic information of the project", () => {
		xmlSugar.setName("HelloCocoon");
		expect(xmlSugar.getName()).toBe("HelloCocoon");
		xmlSugar.setDescription("A sample Cocoon.io application that responds to the deviceready event.");
		expect(xmlSugar.getDescription()).toBe("A sample Cocoon.io application that responds to the deviceready event.");
		xmlSugar.setAuthorName("Cocoon.io Team");
		expect(xmlSugar.getAuthorName()).toBe("Cocoon.io Team");
		xmlSugar.setAuthorEmail("apps@ludei.com");
		expect(xmlSugar.getAuthorEmail()).toBe("apps@ludei.com");
		xmlSugar.setAuthorURL("http://cocoon.io");
		expect(xmlSugar.getAuthorURL()).toBe("http://cocoon.io");
		xmlSugar.setBundleId("io.cocoon.hellococoon");
		expect(xmlSugar.getBundleId()).toBe("io.cocoon.hellococoon");
		xmlSugar.setVersion("2.1.3");
		expect(xmlSugar.getVersion()).toBe("2.1.3");
		xmlSugar.setVersionCode("201030");
		expect(xmlSugar.getVersionCode()).toBe("201030");
		xmlSugar.setCocoonVersion("2.1.0");
		expect(xmlSugar.getCocoonVersion()).toBe("2.1.0");
		xmlSugar.setContentURL("www/index.html");
		expect(xmlSugar.getContentURL()).toBe("www/index.html");
		xmlSugar.setOrientation(Orientation.BOTH);
		expect(xmlSugar.getOrientation()).toBe(Orientation.BOTH);
		xmlSugar.setFullScreen(true);
		expect(xmlSugar.isFullScreen()).toBeTruthy();
		xmlSugar.setEnvironment(Environment.CANVAS_PLUS);
		expect(xmlSugar.getEnvironment()).toBe(Environment.CANVAS_PLUS);
	});

	it("should be able to get plugins", () => {
		let plugins = xmlSugar.findAllPlugins();
		expect(plugins.length).toBe(1);
		expect(plugins[0].getAttribute("name")).toBe("cordova-plugin-whitelist");
		expect(plugins[0].getAttribute("spec")).toBe("1");
	});

	it("should be able to add plugins", () => {
		xmlSugar.addPlugin("cocoon-xml-sugar");
		xmlSugar.addPlugin("https://github.com/CocoonIO/cocoon-xml-sugar.git");
		let plugins = xmlSugar.findAllPlugins();
		expect(plugins.length).toBe(3);
		expect(plugins[0].getAttribute("name")).toBe("cordova-plugin-whitelist");
		expect(plugins[0].getAttribute("spec")).toBe("1");
		expect(plugins[1].getAttribute("name")).toBe("cocoon-xml-sugar");
		expect(plugins[1].getAttribute("spec")).toBe("*");
		expect(plugins[2].getAttribute("name")).toBe("https://github.com/CocoonIO/cocoon-xml-sugar.git");
		expect(plugins[2].getAttribute("spec")).toBe("https://github.com/CocoonIO/cocoon-xml-sugar.git");
	});

	it("should be able to remove plugins", () => {
		xmlSugar.removePlugin("cordova-plugin-whitelist");
		let plugins = xmlSugar.findAllPlugins();
		expect(plugins.length).toBe(0);
	});

	it("should be able to add, get and remove plugin variables", () => {
		xmlSugar.addPluginVariable("cordova-plugin-whitelist", "EXAMPLE_VAR", "EXAMPLE_VALUE");
		let pluginVariable = xmlSugar.findPluginVariable("cordova-plugin-whitelist", "EXAMPLE_VAR");
		expect(pluginVariable).toBe("EXAMPLE_VALUE");
		xmlSugar.removePluginVariable("cordova-plugin-whitelist", "EXAMPLE_VAR");
	});
});
