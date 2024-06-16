import {driver, DriveStep} from "driver.js"
import delay from "delay"
import {emit} from "./Events.ts";

let driverObj: ReturnType<typeof driver>

function init() {
	const t = window.i18n.global.t
	const controls: DriveStep[] = [
		{element: "#tour-run", popover: {title: t("tutorial.iCSimulation.title"), description: t("tutorial.iCSimulation.description"), side: "bottom", align: "center"}},
		{element: "#speedControl", popover: {title: t("tutorial.speedControl.title"), description: t("tutorial.speedControl.description"), side: "bottom", align: "center"}},
		{element: "#tour-step", popover: {title: t("tutorial.step.title"), description: t("tutorial.step.description"), side: "bottom", align: "center"}},
		{
			element: "#tour-goto",
			popover: {title: t("tutorial.goto.title"), description: t("tutorial.goto.description"), side: "bottom", align: "center"},
		},
		{
			element: "#tour-reset",
			popover: {
				title: t("tutorial.reset.title"),
				description: t("tutorial.reset.description"),
				side: "bottom",
				align: "center",
			},
		},
	]
	const saveSystem: DriveStep[] = [
		{
			element: "#tour-File",
			popover: {
				title: t("tutorial.fileMenu.title"),
				description: t("tutorial.fileMenu.description"),
				side: "bottom",
				align: "start",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>("#tour-File")?.click()
					await delay(100)
					driverObj.moveNext()
				},
			},
		},
		{
			element: "#FileMenu_0",
			popover: {title: t("tutorial.save.title"), description: t("tutorial.save.description"), side: "left", align: "center"},
		},
		{
			element: "#FileMenu_1",
			popover: {
				title: t("tutorial.saveAs.title"),
				description: t("tutorial.saveAs.description"),
				side: "left",
				align: "center",
			},
		},
		{
			element: "#FileMenu_2",
			popover: {title: t("tutorial.open.title"), description: t("tutorial.open.description"), side: "left", align: "center"},
		},
		{element: "#FileMenu_3", popover: {title: t("tutorial.load.title"), description: t("tutorial.load.description"), side: "left", align: "center"}},
		{
			element: "#FileMenu_5",
			popover: {
				title: t("tutorial.share.title"),
				description: t("tutorial.share.description"),
				side: "left",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>("#tour-File")?.click()
					await delay(100)
					driverObj.moveNext()
				},
			},
		},
	]
	const AddDevice: DriveStep[] = [
		{
			element: "#AddDevice",
			popover: {
				title: t("tutorial.iCSimulation.title"),
				description: t("tutorial.iCSimulation.description"),
				side: "bottom",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>("#AddDevice")?.click()
					await delay(200)
					driverObj.moveNext()
				},
			},
		},
		{
			element: "#deviceHash",
			popover: {
				title: t("tutorial.addDevice.title"),
				description: t("tutorial.addDevice.description"),
				side: "top",
				align: "center",
			},
		},
		{
			element: "#deviceName",
			popover: {
				title: t("tutorial.labeler.title"),
				description: t("tutorial.labeler.description"),
				side: "top",
				align: "center",
			},
		},
		{element: "#devicePin", popover: {title: t("tutorial.pinD0-D5.title"), description: t("tutorial.pinD0-D5.description"), side: "top", align: "center"}},
		{
			element: "#deviceId",
			popover: {
				title: t("tutorial.deviceID.title"),
				description: t("tutorial.deviceID.description"),
				side: "bottom",
				align: "center",
			},
		},
		{
			element: "#tourAddDeviceAdd",
			popover: {
				title: t("tutorial.addDevice.title"),
				description: t("tutorial.addDevice.description"),
				side: "top",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>("#tourAddDeviceCancel")?.click()
					await delay(200)
					driverObj.moveNext()
				},
			},
		},
	]
	const body: DriveStep[] = [
		{
			element: "#tour-code-ic10 .cm-editor",
			popover: {title: t("tutorial.codeEditor.title"), description: t("tutorial.codeEditor.description"), side: "top", align: "start"},
		},
		{
			element: "#tour-code-ic10 .register >  div:nth-child(2)",
			popover: {title: t("tutorial.registersView.title"), description: t("tutorial.registersView.description"), side: "right", align: "start"},
		},
		{
			element: "#tour-code-ic10 .register >  div:nth-child(4)",
			popover: {
				title: t("tutorial.constantsView.title"),
				description: t("tutorial.constantsView.description"),
				side: "right",
				align: "start",
			},
		},
		{element: "#tour-code-ic10 .errors ", popover: {title: t("tutorial.errorLog.title"), description: t("tutorial.errorLog.description"), side: "top", align: "start"}},
	]
	const device: DriveStep[] = [
		{
			element: "#tour-devises > div > div",
			popover: {
				title: t("tutorial.simulationEnvironment.title"),
				description: t("tutorial.simulationEnvironment.description"),
				side: "top",
				align: "center",
			},
		},
		{
			element: '#tour-devises div[data-pc-section="title"]',
			popover: {title: t("tutorial.devicePrefabName.title"), description: t("tutorial.devicePrefabName.description"), side: "left", align: "center"},
		},
		{
			element: '#tour-devises div[data-pc-section="subtitle"]',
			popover: {title: t("tutorial.deviceName.title"), description: t("tutorial.deviceName.description"), side: "left", align: "center"},
		},
		{
			element: "#tour-devises .device-ports",
			popover: {
				title: t("tutorial.pinsAndAliases.title"),
				description: t("tutorial.pinsAndAliases.description"),
				side: "left",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>(".device-header-props")?.click()
					await delay(200)
					driverObj.moveNext()
				},
			},
		},
		{
			element: "#tour-devises .device-props",
			popover: {
				title: t("tutorial.deviceProperties.title"),
				description: t("tutorial.deviceProperties.description"),
				side: "left",
				align: "center",
			},
		},
		{
			element: "#tour-devises .device-new-prop",
			popover: {
				title: t("tutorial.deviceVariables.title"),
				description: t("tutorial.deviceVariables.description"),
				side: "left",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>(".device-header-slots")?.click()
					await delay(100)
					driverObj.moveNext()
				},
			},
		},
		{
			element: "#tour-devises .device-slots",
			popover: {
				title: t("tutorial.slots.title"),
				description: t("tutorial.slots.description"),
				side: "left",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>(".device-header-stack")?.click()
					await delay(100)
					driverObj.moveNext()
				},
			},
		},
		{
			element: "#tour-devises .device-stack",
			popover: {
				title: t("tutorial.stack.title"),
				description: t("tutorial.stack.description"),
				side: "left",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>(".device-header-stack")?.click()
					await delay(100)
					driverObj.moveNext()
				},
			},
		},
		{
			element: "#tour-devises > div > div:nth-child(1) > div > div.p-card-header > div > button",
			popover: {title: t("tutorial.pin_device.title"), description: t("tutorial.pin_device.description"), side: "left", align: "center"},
		},
		{
			element: "#tour-devises .device-remove",
			popover: {title: t("tutorial.remove.title"), description: t("tutorial.remove.description"), side: "left", align: "center"},
		},
	]
	const instructionsHelp: DriveStep[] = [
		{
			element: "#tour-instructions-open", popover: {
				title: t("tutorial.instructions.title"),
				description: t("tutorial.instructions.description"),
				side: "right",
				align: "center",
				onNextClick: async () => {
					emit("openInstructions")
					await delay(200)
					driverObj.moveNext()
				},
			}
			,
		},
		{
			element: "#tour-instructions-body .p-listbox-list-wrapper ul li:nth-child(1)", popover: {
				title: t("tutorial.instructions.row.title"),
				description: t("tutorial.instructions.row.description"),
				side: "top",
				align: "center",
				onNextClick: async () => {
					document.querySelector<HTMLButtonElement>("#tour-instructions-body .p-listbox-list-wrapper ul li:nth-child(1) .tour-instructions-row-open")?.click()
					await delay(200)
					driverObj.moveNext()
				},
			}
		},
		{
			element: "#tour-instructions-body .p-listbox-list-wrapper ul li:nth-child(1)", popover: {
				title: t("tutorial.instructions.row-opened.title"),
				description: t("tutorial.instructions.row-opened.description"),
				side: "top",
				align: "center",
				onNextClick: async () => {
					driverObj.moveNext()
					emit("closeInstructions")
				},
			}

		}

	]

	const steps: DriveStep[] = [
		{
			element: "#tour-headers",
			popover: {title: t("tutorial.tutorial.title"), description: t("tutorial.tutorial.description"), side: "bottom", align: "center"},
		},
		...saveSystem,
		...controls,
		...AddDevice,
		...instructionsHelp,
		{
			element: "#hashConverter",
			popover: {title: t("tutorial.converter.title"), description: t("tutorial.converter.description"), side: "bottom", align: "center"},
		},
		...body,
		...device,
		{
			element: "#ResetAll",
			popover: {
				title: t("tutorial.delete.title"),
				description: t("tutorial.delete.description"),
				side: "bottom",
				align: "center",
			},
		},
	]

	const dev: DriveStep[] = [...AddDevice, ...instructionsHelp]
	// const dev: DriveStep[] = [...instructionsHelp]
	if (import.meta.env.DEV) {
		return (driverObj = driver({
			showProgress: true,
			smoothScroll: true,
			steps: dev,
			onDestroyStarted: () => {
				if (!driverObj.hasNextStep() || confirm(t("tutorial.end_confirm"))) {
					driverObj.destroy()
				}
			},
		}))
	}
	return (driverObj = driver({
		showProgress: true,
		smoothScroll: true,
		steps,
		onDestroyStarted: () => {
			if (!driverObj.hasNextStep() || confirm(t("tutorial.end_confirm"))) {
				driverObj.destroy()
			}
		},
	}))
}

export function start() {
	init().drive()
}
