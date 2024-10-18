class CommunityScreenHandler
{
	constructor(initData, hotloadData)
	{
		this.showCommunityScreen = hotloadData ? hotloadData.showCommunityScreen : initData && initData.isStartup;

		this.mainMenuPage = Engine.GetGUIObjectByName("mainMenuPage");
		this.mainMenuPage.onTick = this.onFirstTick.bind(this);
	}

	getHotloadData()
	{
		// Only show splash screen(s) once at startup, but not again after hotloading
		return {
			"showCommunityScreen": this.showCommunityScreen
		};
	}

	// Don't call this from the init function in order to not crash when opening the new page on init on hotloading
	// and not possibly crash when opening the new page on init and throwing a JS error.
	onFirstTick()
	{
		if (this.showCommunityScreen)
			this.openPage();

		delete this.mainMenuPage.onTick;
	}

	openPage()
	{
		this.showCommunityScreen = true;

		if (Engine.ConfigDB_GetValue("user", "gui.communityscreen.enable") === "true" ||
		    Engine.ConfigDB_GetValue("user", "gui.communityscreen.version") < Engine.GetFileMTime("gui/communityscreen/communityscreen.txt"))
			Engine.PushGuiPage("page_communityscreen.xml", {});
	}
}
