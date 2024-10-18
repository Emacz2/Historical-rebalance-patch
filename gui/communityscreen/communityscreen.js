var g_CommunityScreenFile = "gui/communityscreen/communityscreen.txt";

function init(data)
{
	Engine.GetGUIObjectByName("mainText").caption = Engine.TranslateLines(Engine.ReadFile(g_CommunityScreenFile));
	Engine.GetGUIObjectByName("displayCommunityScreen").checked = Engine.ConfigDB_GetValue("user", "gui.communityscreen.enable") === "true";
}
function closePage()
{
	Engine.ConfigDB_CreateAndWriteValueToFile("user", "gui.communityscreen.enable", String(Engine.GetGUIObjectByName("displayCommunityScreen").checked), "config/user.cfg");
	Engine.ConfigDB_CreateAndWriteValueToFile("user", "gui.communityscreen.version", Engine.GetFileMTime(g_CommunityScreenFile), "config/user.cfg");
	Engine.PopGuiPage();
}